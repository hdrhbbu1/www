---
title: "When Technology is Irrelevant"
date: "2016-01-28T18:39:04.000Z"
path: "/when-technology-is-irrelevant"
layout: "post"
---
The only consistent force, in software development and business, is change.

Because of this, one day you must decide to change technologies, or decide with existing ones. This shift alters your trajectory, sometimes positively, though often not.

This choice is always required. Any seasoned professional will agree, but far too many newcomers ignore this force of nature at their own peril.

Listen, I understand. It's easy to live in a bubble, only writing Rails applications, but there's a world outside of Ruby that came before, and bears value.

You could be using [Elixir](http://elixir-lang.org) on the backend, and build the interface in [React.](http://facebook.github.io/react) Maybe you decide to switch out React for [Mercury](https://github.com/Raynos/mercury), then throw away [Om](https://news.ycombinator.com/item?id=8139882) for [Redux](http://github.com/rackt/redux), and it still wouldn't matter. There are a myriad of libraries for every imaginable use case, especially in the JavaScript world, but common reasoning doesn't acknowledge this truth. Our logic dictates that new and unique is always better, that only idiots follow the neckbeards sage advice, and our brogramming peers are the new kingmakers.

There is more work in a simple product, than in a complex one. And every time you bet on a hot new piece of tech, or choose to invent &mdash; the complexity of your app grows exponentially.

"But," you stutter, "I can name five ways that *my* stack yields a vastly improved workflow..." Of course you can. Instead of listening, I'll stop you there. This conversation isn't just fun and games.

It's obvious that you never truly investigated the alterations dictated by your solution. I'll counter, and ask for proof of time in the trenches, with ages old technology. You, I bet, don't have the chops to dismantle my argument.

## Business Risk Kills

I just offended half of my readership, and that's fine. They probably stopped reading. If, by some miracle, you are still are, and belong to a disenfranchised splinter, here's the kicker: *technology is irrelevant*. The power is not in what tools you chose, but how they're applied. You can choose the hottest, fastest growing technology on the planet, and if you still write code with your head up your ass, the resulting product will suffer.

Business risk is the killer.

---

One of the projects I'm currently working on has a tech stack that reads like a game of bingo played by tech executives: [Django](https://www.djangoproject.com) powers the API, while [Node](http://nodejs.org), [Router5](http://router5.github.io), React, and Redux keep the  user experience hipsters engaged.

Some will see it as disjointed, but these tools, regardless of what you may think, work beautifully together. The API and front-end are their own, separate repositories &mdash; so each product can iterate, for the most part, at it's own pace. It's an example of how to choose the best tool for a given problem.

Recently, I was on a call with a client. They don't own a tech company, and aren't interested in becoming one. Any changes that involve altering the DNA of their organization are antithetical to the core mission. They sell products that you would often find only in physical stores, online. That's it. A single market, dominated by a single product category. A simpleton would miss the point by dismissing their tenacity: the business model works. Period, point blank.

During the call, we went over their current marketing automation suite. I heard stories of disjointed business tools that never dovetailed as they should. I understand; building a system to compliment your workflow is no easy task.

## Breaking: When Laws Apply

Before we go deeper, let's examine the current laws that govern email newsletter practices. In the United States, all senders must comply with the [CAN-SPAM Act of 2003](https://en.wikipedia.org/wiki/CAN-SPAM_Act_of_2003), which governs, among other things, how unsubscribe requests must be handled. When a subscriber asks to be removed, the sender must:

1. Ensure that a visible and operable unsubscribe mechanism is present in all emails.

2. Honor all consumer opt-out requests within 10 business days.

3. Use opt-out lists also known as "Suppression Lists", which prohibit anything other than explicit re-subscription, for compliance purposes.

These rules are rooted in courtesy and fair business practices, but not everyone understands. The main issue at hand with this client was their insistence to handle unsubscribe requests themselves, initially, instead of passing it on to a company who provides e-mail marketing as a service.

## Run Your Business, and Nobody Else's

It should go without saying that unless e-mail marketing *is your business*, you shouldn't handle these cases in *your software*. Pay, and use, platforms designed by experts.

I'm sure you see the problem. When you, as a company, attempt to tackle anything other than your core business, you accept unnecessary risk. This is the angle I presented to the client, who immediately understood and agreed. In the end, they chose the professionals, with solid expertise and a simple platform.

Why was this decision essential? Building tools that aren't a core part of your business are foolish. Any smart businessperson knows their time and finances are better spent focusing on the bottom line. In the end, the needed tools were unessential, and best designed by someone else.

## My Secrets, Laid Bare

I run a technology consulting firm, where we work with many languages and frameworks &mdash; and yet, when sharing stories like this, I'm forced to acknowledge this secret &mdash; one rule for decision making that applies to me, and most every other consultant in the field.

Technology is a tool to mitigate business risk, and little else. Yes, I'm publishing this on the internet, for free. Why?

Because I'm willing to bet you still won't make the call: doing so may require passing on your favorite tools and acknowledging that they might not fit your clients' needs.

Folks, it's not about technology. If you disagree, you're sorely misguided.

One platform &mdash; whether it's Node, PHP, Elixir, Ruby, or Python &mdash; is never the ideal choice in all cases. A smart businessperson always chooses technologies based on indexes that measure risk: financial, public relations, or otherwise. You must elect these items as the only valuable decision points; otherwise, you'll be left out in the cold.

---

*Special thanks to my friend [Mike Maddaloni](http://thehotiron.com) for editing this article. He's a genius. No, seriously... go hire him.*

*And also to my friends from Elixir, Python, and Node.js communities &mdash; specifically Brian Hunter &mdash; for teaching me how to think outside the box, and realize that the polyglot way is the only way.*