---
title: "The Truth About React"
date: "2016-06-09T15:10:08.000Z"
path: "/the-truth-about-react"
layout: "post"
---
Everyone is using React, right? Not so fast. The world of JavaScript moves quickly, and it's okay if you're catching up. I am too.

But back to React. I believe it matters, though for unique reasons (outside of the "cool factor"). In order to explain myself properly, let's begin with A Brief History of Front-End Development, which will establish the proper context.

## A Brief History of Front-End Development

A significant portion of my professional life, at least the last decade, has been spent writing JavaScript. I've watched it grow from a scrappy but ill-regarded language for tinkerers, into a large, diverse ecosystem.

Any developer or analyst will tell you, JavaScript is hot. When pressed to explain this phenomenon, some credit projects like [Node.js](https://nodejs.org), the first widely successful server runtime. But even though Node certainly raised the language's profile among traditional back-end developers, I believe other factors are in play also.

I instead believe the existence of popular libraries &mdash; many of which existed to ease the pain of native browser APIs &mdash; are the largest and most influential driver behind JavaScript's current popularity. Ask anyone in the community, and they'll usually agree; most of today's professional JavaScript hackers began their career writing jQuery plugins.

Today's web is vastly improved. But as we know now, even unobtrusive JavaScript systems will eventually become a tangled mess without a clear separation of concerns. Frameworks came and a handful stuck, but they were all additive; not one brought it's promised revolution.

As front-end engineers, we collectively gave up.

## A Shift in Thinking

In 2013, Facebook open-sourced it's ground-breaking user interface library, [React](http://reactjs.com), which proposed [reactive programming](https://en.wikipedia.org/wiki/Reactive_programming) as a solution for managing the complexity of modern, front-end web applications. However, React certainly wasn't the first library of it's kind: Ember, Backbone, Knockout, and other frameworks were all working on the same problem: how to enable the next generation of dynamic web applications without ballooning engineers' cognitive load.

The building block of all React applications is the Component. A Component represents a tiny piece of the application interface, and can be composed into larger Components, which then control the behavior of all children.

```javascript
import React from 'react';

const MetadataComponent = ({artist, title}) => {
  return (
    <div className="metadata">
      <span className="artist">{artist}</span>
      <span className="title">{title}</span>
    </div>
  );
};
```

These Components often use [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) (seen above), a template syntax devised specifically for React. JSX decouples your application from the rendering medium. Because it must be compiled before being executed, JSX is also able to render templates in multiple environments: in the browser, React creates and renders content into DOM elements. On React Native, however, JSX templates will create OS native views.

[Data binding isn't new.](https://guides.emberjs.com/v2.6.0/object-model/bindings) But where most frameworks would render the data immediately, React's approach &mdash; decoupling the template contents from the rendering medium &mdash; allows each performant equality checks, ensuring that only updated properties are rendered. While you may hate it at first, [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) is a powerful tool that shouldn't be dismissed without inspection.

However, the true shift inspired by React isn't JSX, nor the one-way data flow. Instead, I believe React's most inventive concept has nothing to do with the library itself. In a bold move that is still unequaled by any other framework, React embraced the greater JavaScript ecosystem; including Node and npm. React is a tool for constructing Views only, which aligns nicely with the common small-module philosophy.

This understanding, that React is just another library in a expansive language community, is overall positive. But if this approach has been so wonderful, why don't other libraries adopt similar ideas?

## The Price of Modularity

React builds Views and nothing else. It's excellent at creating and manipulating interfaces, and terrible at everything else.

Modularity, especially in the world of software, always [comes with a price.](http://gianarb.it/blog/the-price-of-modularity) That price is often worth paying, because code with clear separation of it's responsibilities is often easier to test, simple to compose, and generally considered as high quality. Plus, a team who correctly understands modularity can move quickly and restructure even complex portions of their codebase with ease.

The cost is paid by newcomers. These enthusiastic spectators, who finally decided to enter the field themselves, can be met with the harsh uphill climb of learning thirty required libraries.

Ember developers aren't paying this cost. Backbone developers were never asked to, thanks to it's relative simplicity. Newcomers, regardless of their experience, should never pay. But we, even as experienced React developers, pay this cost too often.

These are the affects modularity has on a code base. With these facts in mind, is React's small-module ethos worth it all? Absolutely.

## Specialization and Integration

If there's one thing the JavaScript community has right in 2016, it's libraries. npm has spoiled me: if I can conceive of a library for any given function, it almost certainly exists.

[Redux](http://redux.js.org), a library for state management, is the result of this small-module ethos as well. A new concept in the browser space, it implements a reactive, immutable state tree. It's a staple: if your state can be represented by serializable data structures, Redux is your friend.

Redux-Saga is a new, but well-loved project that appends generator-running middleware to Redux's event stack and simplifies asynchronous side effects.