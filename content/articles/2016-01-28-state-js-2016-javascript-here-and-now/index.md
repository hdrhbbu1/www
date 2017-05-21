---
title: "State.js 2016: JavaScript, Here and Now"
date: "2016-01-28T22:25:00.000Z"
path: "/state-js-2016-javascript-here-and-now"
layout: "post"
---
While Twitter, for many individuals, has taken the place of blogging &mdash; instead, for me, it's the place where ideas are fostered and allowed to grow before expanding into fully formed pieces of prose.

This post is a study of that pattern. A few days ago, I tweeted the following statement:

> "Why do we have so many React-like frameworks? I can show you several that are almost identical. I guess it's the curse of JavaScript."

And what a curse it is. Between React, Deku, Mercury, Inferno, and the many frameworks that I probably missed, "virtual DOM" or the often used phrase ["DOM diffing"](https://github.com/search?q=dom-diffing), is poised to take over GitHub searches in 2016. I cannot, and I will not keep up. This community, as much as I love it, is "innovating" at a breakneck pace, a speed that I cannot see lasting forever. Even with the passion and work ethic present in the global, JavaScript workforce, you must acknowledge that the sort of high-caliber creative output we're used to, with such relentless frequency, will not scale.

My friends at the excellent [*JavaScript Jabber*](https://devchat.tv/js-jabber/194-jsj-javascript-tools-fatigue) podcast chatted for an hour, covering "tool fatigue" in depth. It was a necessary, important discussion; and while I'm grateful that we have many options for building, minifying, concatenating, linting, and transpiling our code, I still ask, with the myriad of tooling options spread out before me: *do we need any of this?*

## Act One: We Love Where We Come From

If your job or hobby routinely involves crafting programs for the web, it's likely that you at least tolerate JavaScript and it's propensity for change. This isn't always positive. After all, the barrier is low &mdash; just drop in a `<script>` tag and your environment is primed &mdash; but this initial simplicity can also become problematic.

Perhaps, like some, you do more than tolerate JavaScript. Personally, I love it. The dynamism of this loosely typed language allows for more possible flexibility than almost any other platform in the modern era, but this power also comes with a equal risk. And since the language is extraordinarily dynamic (and let's be real, at this point, a required skill for every developer) each author or company has a style guide of their own.

ESLint, the closest thing we have to a universally accepted standard of best practices, is customizable. We use this ability for both good and evil: if you look at other tools (like `gofmt`, the de-facto [style enforcer for Go](https://golang.org/cmd/gofmt) programs), you'll realize how dangerous this can be.

Here's the thing. I love a strict style guide. Turn the linter to eleven and cut me loose. If the feedback loop is tight enough, I don't care. Not one iota.

Gulp, Grunt, Broccoli. Rollup, Browserify, Webpack. Each time a new tool surfaces, sometimes more than once per day, we look around and sigh. My startup's code base, even though it's written in React, has fell out of vogue. Surely we could remain hip for at least a week; guess again.

If you're coming over from Go, Java, C, C++, C#/.NET, or any other programming community, I'm sure you wonder how we get anything done. Most of us don't. We either make a conscious choice to live on the edge, consistently dissatisfied and unhappy, always looking for the next fix, or we intentionally lag behind. If you value safety and seek to spend your technical finances wisely, stay back by at least two years.

But if you love the community, and the action within it. You're happy. The rest of us, especially with small teams, are doomed to forever play catch-up.

---

Like almost everything in life, this dilemma has a handful of positive attributes too. No tool will ever stagnate. If an ecosystem can survive the meteoric rise required to stick, the odds of it staying strong over years are solid. I'd bet on them any day.

It also means that tools like [React Native](https://facebook.github.io/react-native) get invented in the JavaScript community before anywhere else. Look around, and tell me that you see another community where invention is the norm. Even in the Elixir community, where many basic modules still don't exist, you won't find this level of activity. I genuinely mean, nowhere. (I challenge you to find it, but for the record, ClojureScript and CoffeeScript don't qualify. The latter, as I've said on numerous occasions, [is cancer.](/embracing-javascript))

## Act II: Where Do We Stop?

That, dear reader, is the sixty-four-thousand dollar question. I don't think anyone knows. There is good, evil, and indifference in every programming community, but I'd like to think that despite the breakneck pace, the JavaScript community will come out on top. In order to do that, we must agree on a steady, unchanging set of rules.

Let's first go over what we know to be true:

**The Unix philsophy from Node has bled over into JavaScript culture at large. And this is a very good thing.**

I admit, it sucks as a newcomer to learn that thirty modules are required before you can serve up a basic website. Okay, I know, thirty is an exaggeration. All you really need is [Express](http://expressjs.com) &mdash; but what if you choose Koa, or Hapi? Prepare to load up the plugins.

This is good, yes, because CommonJS and the incoming ES2015 Modules spec make it easy to develop small, reusable building blocks. (Who doesn't like writing an authentication system once and using it everywhere?) Especially when coupled with [Rollup](http://rollupjs.org)'s "tree shaking" feature, which only includes active code, this technique is ready for prime time.

**If you're going to render code generated by React (and other frameworks like it) on the server side, it's always easy to fire up a new web server and get it done.**

I find it exceptionally hard to argue with the flexibility that React and JSX bring to the UI debate. It's so smashingly good.

That said, I wish we could spend less time on tooling and focus on state management tutorials, but that isn't going to happen anytime soon. Many newcomers don't understand the reducer pattern, from what I've seen. They desire to augment POJOs (plain old JavaScript objects) with something like Immutable.js. And while there's nothing inherently wrong with Immutable, it's a heavyweight tool that you only need a portion of the time.

When you're brand new, and presented with a grab-bag of 25 dependencies, you rarely choose the correct subset. No, you choose them all!

**We've gotta stop focusing on build tools.**

I shouldn't have to write this. We have enough. Focus on improving the ones we already have. Done.

**Don't treat newcomers like sh*t.**

There are areas of the JavaScript community where you get looked down upon for not understanding what `+"44"` means. (That's a coercion technique, FYI.) It shouldn't be that way. 20 years of language development, almost always by the crowd or committee has it's price.

You can do almost anything in JavaScript. Really, you can. But should you? That's damn hard to say.

Other areas of the community are exceptionally welcoming and friendly. [Node is one of them](https://twitter.com/nicholaswyoung/status/690668841253343232), and that's why I love hanging out [with my rad](https://twitter.com/ReBeccaOrg) [NPM friends.](https://twitter.com/aredridel)

## How About the Good Stuff?

It isn't all bad, I promise. I'm proud to call the people below my friends. They're amazing humans who do the hard work, despite the lack of immediate, quantitative value. Here are a few charges led by people who deserve our praise.

**The learning curve is being shaved off.**

My pal [Jed Watson](http://twitter.com/jedwatson) and his team are kicking ass with tools like [Keystone](http://keystonejs.com), which dramatically short-circuits the huge learning curve. Did you mention building a website in Node? Are you cool with MongoDB? (Hint: you should be, for most cases.) Use Keystone. Boom. Done.

**The boilerplates you encounter everyday really do have a place.**

Some of you are turning away right now. (Didn't he just say that tooling is killing us?) Correct you are. I hate that we need it, but we do. It's a hazard of being so un-opinionated, and frankly, that's what makes JavaScript great. It's a two-edged sword. You can wield it with power and grace, or anger and wrath.

The choice is yours, young JavaScripter. Which side will you be on? (The light side always wins. We, as a collected community, see to that.)

Sure, we need to figure out how to best scaffold applications, and make the process easier for everyone (especially newcomers). But that may happen by distilling a handful of boilerplate configurations into a couple of specs that are boilerplate projects themselves.

**Standards will be our friend forever.**

Node.js' [initial release dropped in May, 2009](https://en.wikipedia.org/wiki/Node.js). As of this writing, the runtime &mdash; which arguably predates the "platform" that would be built on top of it &mdash; is just over 5 years old. The [Node Foundation](https://nodejs.org/en/foundation), a nonprofit organization formed as a joint project with The Linux Foundation, was introduced by [Joyent in February 2015](https://www.joyent.com/blog/introducing-the-nodejs-foundation) by the occasionally embattled CEO, Scott Hammond.

Consider this. The project is less than a decade old. The Foundation, which is possibly Node's most important initiative, since it launched the formal Technical Steering Community and many other helpful working groups, is almost one, per the Joyent blog post above.

Any way you slice it, as a community, foundation, or runtime; Node is young. This may be controversial to mention, but Node has *magic*. It hasn't yet matured to a point where everything is standardized. I've been working with Node almost since the very beginning, [0.2.0 to be exact](https://blog.risingstack.com/history-of-node-js). Firsthand, we've reinvented the world several times, and while the next releases are moving along at a steady clip, the ecosystem isn't finished evolving. We still need time to establish bulletproof standards. I can only imagine that build processes, based around tools like [onChange](https://www.npmjs.com/package/onchange) will eventually be the norm, not the exception.

The Community, not so much at large, but on the fringes, tends to fall prey to hyperbole and fad-chasing. Folks are now ditching Gulp and Grunt without considering *why they choose a given build system in the first place*.

But first, all of us must place a flag firmly in the ground and decide where we want to be. Build systems are fine, but everyone will need to understand why they use a certain tool. ("Because my friends use it," or "my team thought it was a good idea," are unacceptable answers... unless it was your superior, who knows how Node rolls. Then follow their lead.)

**The Node Foundation Board of Directors: It's Real**

Did you know that The Node Foundation elects board members? That's right, and my fellow Nodevember attendee, [Ashly Williams](https://twitter.com/ag_dubs) is a candidate. Vote.

Why does this matter? For a very long time, Node was controlled by corporate powers at Joyent. We were grateful, but ultimately, a Foundation was required. This tiny project grew up and quickly strained at the bit of it's corporate sponsor. This is not new.

This power struggle has been fixed, forever, by the Foundation. Live it, breathe it, pay into it, and support it's efforts.

---

JavaScript, running in the browser and on the server, is a fantastic language. Frankly, it's a phenomenon that the world doesn't often witness. I'm grateful for the opportunity to speak, write, and work in this fantastic community; even if I have to author critiques, like this, occasionally. It really is a wonderful place to be.

[My daughter is being born tonight.](/dad-jokes) Her involvement in the world of Computer Science, even as a hobby, is of the utmost importance. JavaScript is the only language, alongside Elixir, where I would encourage her to become involved at any level. My friends, some of whom who hold high positions in the community, would allow her unfettered access to the environment and communities' highest value assets.

Are you ready? JavaScript. It's not Java, nor is it only for Scripting. It's the language of the future.

<small>Photo Credit: [@eterps](http://twitter.com/eterps) / [From my Nodevember 2015 talk.](/speaking)</small>