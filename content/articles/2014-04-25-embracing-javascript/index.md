---
title: Embracing JavaScript
date: '2014-04-24'
path: /embracing-javascript
layout: post
tags:
  - engineering
  - software
  - javascript
---
In a previous life, I was a professional web developer. I've used JavaScript extensively throughout my career, but I always saw it as the necessary evil: a weird little language that existed solely to provide interactive features in your web browser. For most of it's lifespan, this evaluation was accurate: every major vendor had their own additions, and developing cross-browser applications was damn hard. John Resig and jQuery were the only glimmer of hope.

A few years ago, the conversation shifted: developers everywhere were falling in love with JavaScript, thanks to Ryan Dahl's project, [Node.js](http://nodejs.org). For many, Node represented a single-language utopia, where you could use the same platform on the server and browser. I was puzzled. Why would anyone run this bug-ridden, frustrating language on the server? It would be a pain at best, and truly disastrous at worst.

Nevertheless, my curiosity won out. I downloaded Node and tried it on several pet-projects. My daily language was Ruby, and these early trials placed Node slightly ahead of it, though not by much. I set it aside, and returned to my old tools, while the Node team perfected it's runtime. This phase lasted for months, as Node became even more popular. Every few months, I would glance at the Node message boards, then dive back into my Rails stack.

Eventually, I couldn't ignore Node anymore. During my initial tests, I benchmarked Node heavily, and the results were surprising. As my Rails stack began to slow under the weight of a global audience, I thought a second look at Node might be appropriate.

## The Backstory

For those of you who don't know me very well, here's an explanation of what led to the events above. Six months ago, I launched [The Machine](http://machine.fm), a broadcasting network where we produce content for independent creators and entrepreneurs. During our short lifespan, we've experienced tremendous growth: in the beginning, only my friends listened to our shows. Now, we serve content to over 25,000 listeners per month, a number that continues to grow rapidly.

When I launched the network, our platform was written with Rails. It was my web-development tool of choice. I was productive, and Ruby is a pleasure to write. This single application served our public facing website, embeddable players, admin panel, and tracked downloads from podcast clients. It was fine in the beginning, but six months in, the system slowed to a crawl as our audience exploded.

## Fast Forward

In my attempt to increase performance (and ultimately, serve media to an increasing number of listeners), I decided to divide each element of the service into it's own app. The download tracer, which is arguably the most important part of our platform, was up first. With this model, I could try running Node in production on a few, but not all, of our services. If it failed, I could return to Ruby.

Just over a month ago, I launched Tracer, the first [Machine.FM](http://machine.fm) service I ported to Node. During the rewrite, I was able to directly compare the JavaScript implementation to what I previously wrote in Ruby. The results were staggering: not only was the new application easier to read and understand, but it benchmarked over 30-times faster than the previous system. This newfound perspective opened by eyes, and silenced my critical tongue. JavaScript is cool, and it's here to stay.

## Best Practices

Despite my praise, the transition from Ruby to JavaScript was difficult. I was coming from the world of Sinatra and Rails, where the language itself governs how your application is designed. While Node forces you to work within the context of an event loop, it's otherwise un-opinionated. Extending this ethos, most frameworks built on top of it are too. With regards to application structure, it's still the wild-west of software development, where anything goes.

At first, I was perplexed. I knew how to structure Ruby code, but JavaScript is different. How would I separate concerns without modules, classes, and namespaces? It took a while to learn, even though I had mastered common front-end patterns. Eventually, after writing (and rewriting) thousands of lines of server-side code, I created the following list of best-practices. These ideas govern all of my production Node.js deployments.

### CommonJS Is Your Friend

In the world of Ruby, Python, or PHP, your code only has three main structures: everything is bare, you bundle methods into classes, or maybe include a module or two. But at the core, everything is encapsulated in a language-defined container. [CommonJS](http://wiki.commonjs.org/wiki/CommonJS), which powers the <code>require()</code> construct in Node.js is different, and in my experience, far more flexible.

It allows you to easily bundle related methods into one or more modules, using two special variables: <code>exports</code> allows you to expose default values, one-off function calls, or any other data type allowed in JavaScript. I've used it for objects, arrays, and initialization code that would be tedious to type repeatedly by hand. <code>module.exports</code>, it's big brother, is used when you only need to export _one object_ from your module. This is helpful for wrangling JavaScript's prototypal inheritance chain.

For me, the biggest challenge was understanding how module definitions impacted the structure of my code. What if I needed to require a module several times over? Using Node's <code>global</code> namespace is a bit dirty, so this is a reasonable question.

Thankfully, Node is smart: if you require a module 100 times and in different files, it doesn't increase your RAM usage. Instead, it caches the first <code>require()</code> and directs subsequent calls to the instance in-memory. If you're worried about memory bloat (as I was), don't be concerned. Write your code in small, maintainable chunks and use CommonJS as it was intended.

### Avoid "Callback Hell"

Traditional languages like Ruby, PHP, and Python are designed to run in the order that they're written, one line after the previous. This is a wonderful idea, but eventually your program will need to wait. It might sleep until your database returns query data, or pause for user input. This event is all too common, and even in threaded code, waiting too long dramatically reduces performance. Node handles IO differently, opting for the callback structure that was first pioneered in client-side JavaScript. If a callback is present, you're waiting on something.

This provides a clear delineation between code that runs straight-through, and parts of your application that wait on outside data sources. But writing asynchronous code isn't all fun. What if several functions need to run in series? Novice JavaScript developers might handle this flow as such:

<code>
fs.readDir(function (err, files) {
&nbsp;&nbsp;files.forEach(function (file) {
&nbsp;&nbsp;&nbsp;&nbsp;fs.open(file, function (err, data) {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Finally, we can do something with each file!
&nbsp;&nbsp;&nbsp;&nbsp;});
&nbsp;&nbsp;});
});
</code>

This is a common problem faced by developers writing for platforms like Node. Named functions will relieve this in part, but there are better options available. Thankfully, Joyent (the corporate sponsor of Node.js) has the perfect solution. David Pacheco's [vasync](https://github.com/davepacheco/node-vasync) module offers a suite of facilities for dealing with async flow control. While I would love to see something like this make it into Node core (or even better, the JavaScript language), I'm happy to leave it as a module.

Critics will say this is one of JavaScript's shortcomings, and that it isn't ready for prime-time development. I'll kindly ask those folks to shut up. While JavaScript is improving (thanks to the team behind [ECMAScript 6](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29)), today's version is fine, and if you haven't noticed, it's the most widely adopted language on the planet.

### CoffeeScript is Cancer

Several years ago, Ted Dziuba's post "[Node.js is Cancer](http://pages.citebite.com/b2x0j8q1megb)" sparked a huge debate. Sparks flew from both sides, as critics piled on Dziuba's bandwagon, and Node developers defended the young platform. I obviously don't believe Ted's gospel, but I think there's something equally dangerous gnawing at the Node community today: CoffeeScript.

Here's the deal: I _want_ to love CoffeeScript. It's beautiful, clean syntax is enticing, and I've tried to use it on several projects. In the end, I always ditch it for plain, boring JavaScript.

But why? CoffeeScript is incredibly popular, and works for so many developers. I'll answer this in the only way known to programmers: statistics.

**CoffeeScript is only suitable for client-side development.**

With source maps, CoffeeScript is almost a first-world citizen in the browser. If you move it onto the server, there's no clean way (that I've found) to compile a directory of <code>.coffee</code> files, and maintain their structure. I'm sure a workflow for this problem exists, but what takes more time: using plain JavaScript, or setting up a complex build script?

For the record, I also know that CoffeeScript can be <code>require()</code>'d from standard JavaScript, or run via the <code>coffee</code> command. In my tests, both of these methods added 10+ megabytes to my application's required RAM. Node is designed to be fast and light. Why would I load it down with unnecessary enhancements? Write beautiful JavaScript and be done with it.

**CoffeeScript isn't moving at the speed of JavaScript**

The JavaScript community has embraced Promises as a wonderful alternative to callback-based programming. Personally, I use Promises every day, and they're beautiful to write in vanilla JavaScript. In CoffeeScript, [not so much](http://stackoverflow.com/questions/17510756/chaining-promises-in-coffeescript). To my eyes, CoffeeScript obfuscates a few of the core principals that make JavaScript a joy to author. It's unclear when you're chaining methods, and in this situation, CoffeeScript introduces far more mental overhead. Listen, even when you're writing CoffeeScript, you're thinking in JavaScript. Your head and hands should speak the same language.

**There are two versions!**

You read that right. Two versions, [each with slight syntax variants](https://github.com/michaelficarra/CoffeeScriptRedux/wiki/Intentional-Deviations-From-jashkenas-coffee-script), but both bearing the CoffeeScript name. This is confusing, and another reason why anyone writing modern JavaScript should stay away &mdash; especially newcomers.

From what I know, these projects don't plan on merging; at least, not anytime soon. And while Michael Ficarra has put many hours into his "CoffeeScript Redux" project, the benefits of using it aren't clear to me.

Before you get on my back, I understand how open source works. If you don't like something, you change it. But it's a common courtesy to differentiate your project from the original to avoid polluting the existing mindshare. This is a classic example of two projects sharing the same space, and thus confusing newcomers to the JavaScript community. If the Node community needs anything, it's for the CoffeeScript debate to end. Nobody on the core team likes it, so I choose to ignore it.

I say this with no hard feelings towards Michael Ficarra, or Jeremy Ashkenas, the original creator of CoffeeScript. I just don't like it, based on the trials I've endured. It's a genius idea, and a brilliant piece of software engineering &mdash; but like Ruby versus Python, everything comes down to taste. If you want to use CoffeeScript in your Node program, go ahead, but prepare for some rough sailing.

## Wrap Up

In the end, I've learned a lot about the language that I once hated. JavaScript is a wonderful little tool, with incredible flexibility. If you haven't tried Node yet, you should. As I write this, Node now powers all of our systems at [The Machine](http://machine.fm), and I expect it will continue to do so. Both the language and Node runtime have very bright futures as more developers join the community.

I'll continue to share tips and tricks, as I learn more about working in Node. It's been a thrilling, though challenging endeavor thus far, and there's still more to learn. I am, by no means, an expert. Nobody is, really, because the standards and best practices will continue to shift as the platform matures. But for now, if the ideas above help someone avoid the awkwardness often associated with writing server-side JavaScript, I'll be happy.

But I've gushed on JavaScript's beautiful heritage enough. Granted, it took me a long time to see it this way, but why did I choose Node when I could've used Python's Twisted or Ruby's EventMachine and gained similar performance improvements? For me, it's about time. Too often, programmers tend to discount using the skills they already know, in favor of learning something new. We're a special breed, friends. Shiny new technologies matter more to us than almost anything else. Node is shiny, sure, but after writing a trivial HTTP server in only minutes, I realized there was so much more I could do. I already knew JavaScript inside-and-out, so I was ready to go.

Rails touts it's friendliness as a framework, and Ruby is "a programmer's best friend." While I agree with these statements, I prefer to make something work quickly. I'm not here to be friendly with my code, lest it become the principal activity in my life. I'm writing code to accomplish a goal, put it on the production servers, and walk away. Node allows me to do exactly this. I write, test, deploy, and then get back to doing what I really love: making great radio.
