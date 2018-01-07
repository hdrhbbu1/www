---
title: Distill
date: '2014-05-01'
path: /distill
layout: post
tags:
  - engineering
  - software
  - javascript
---
One of the major challenges I've had to overcome with Node.js is a task that's relatively simple in Ruby. You wouldn't think this would be difficult, but serializing JSON can be frustrating, even though you're working entirely in JavaScript. If you needed to quickly rename properties or embed values from items in an array, you were out of luck... until now. Data doesn't always come out of your database in the format you would prefer, and Node is exceptionally good at designing RESTful API interfaces that expose their data over HTTP, so a tool for re-arranging JSON is definitely needed.

## Enter Distill

If you've ever experienced the headaches with reformatting JSON, I'm here to help. Today, I would like to introduce [Distill](http://github.com/originalmachine/distill): a small library that removes impurities from a JSON schema and will improve how you create APIs.

<script src="https://gist.github.com/nicholaswyoung/747c145ea9df4835e7cc.js"></script>

As you can see, simply require the <code>distill</code> module, then pass it an object (or array of objects). It allows you to chain methods for plucking fields or embedding specific keys from arrays that it might encounter. Distill is simple, but it gets the job done. In fact, this post is probably overkill, but I'm sharing this snippet mostly for my RSS readers. If you've ever wrote complex map statements with Underscore or Lodash, this dramatically cleans up your code. In my benchmarks, it doesn't introduce noticeable overhead either.

## In Closing

It's obvious to me that other languages see JavaScript as a second-class citizen; a language to be tamed and relegated to the browser. The modern variant of JavaScript is nothing like this, as I discussed in my last post, but I know quite a few people who still subscribe to this mentality. Maybe that's why their language has tools for simplifying JSON: because they see it as a hassle from the very beginning. Hopefully, with Distill (and the other tools I hope will be inspired by it), Node can become a bit friendlier to developers from other languages, and continue to grow. There's no need to reach for ActiveModel Serializers &mdash; just use Distill, and keep your app in JavaScript. The future thanks you.

<small>Photo credit: [Josh Koontz](https://www.flickr.com/photos/koonce/8854724999) - used under a BY-NC license.</small>
