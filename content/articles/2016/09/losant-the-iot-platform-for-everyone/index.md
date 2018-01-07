---
title: 'Losant: the IoT Platform for Everyone'
date: '2016-09-01'
path: /losant-the-iot-platform-for-everyone
layout: post
tags:
  - software
  - engineering
  - review
  - internet-of-things
---
This year has been filled with wonderful events, some were [expected](/sloan-alexis/), while others, wholly unthinkable in early January, have [also became reality.](/going-west/)

One of the more pleasant surprises came in February, when I received a special delivery from [Losant](https://losant.com) (then Structure), a software-as-a-service platform that empowers developers to easily create powerful, reactive, connected applications that can be run on small devices and embedded into our lives.

The devices then serve as our main interface to the application, which in turn, interfaces with Losant. Tech writers refer to this as the ["Internet of Things."](https://en.wikipedia.org/wiki/Internet_of_things)

![A fancy package from Losant.](https://s3.amazonaws.com/media.nicholaswyoung.com/img/losant-kit.jpg)

A few weeks before the package was even shipped, [Todd Henderson](https://twitter.com/todd_henderson) (who handles Business Development for Losant), reached out on Twitter and offered the above Builders Kit in exchange for my candid thoughts regarding their product. This long overdue article, finally authored and published, fulfills my promise of an honest evaluation.

In April, I unpacked the kit and spent a few minutes with it, but that was all. Now with the kit, myself, and family all having relocated to Denver, the stress of our major move has passed. I finally had time to collect my thoughts before giving the kit and platform a thorough review.

## Hacker Life

Let's begin this review in my childhood. As the son of an entrepreneur and self-taught electrical engineer, I was seemingly raised to become an inventor. As a young adult, when I wasn't [adding strobes and amateur radio equipment to my storm spotting vehicle,](https://www.youtube.com/watch?v=HDp-brsP62A) I was fashioning usable long distance [antennas from lawn chair scraps](https://www.qrz.com/db/KG4HSR), producing audio, or writing software in BASIC.

My upbringing was anything but normal. One standout moment was not only being allowed (encouraged, actually) to build a remote fireworks detonator out of a returned [pager](https://en.wikipedia.org/wiki/Pager), a 6-volt battery, relay, and steel wool.

This desire to experiment and push the boundaries has also manifested itself in my professional career, for better or worse. After a decade plus spent working intermittently as a software consultant, audio engineer, designer, and radio producer &mdash; I also recently came to the conclusion that I'm a creative generalist hacker. I've never shied away from any new experience, which explains the list of disparate fields above.
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-2222008371700158"
     data-ad-slot="6074071537"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
Over the years, as devices around my home slowly [gain internet access](https://en.wikipedia.org/wiki/Internet_of_things), I'm excited to see how the technology manifests itself. And I want to be part of that future if at all possible. Besides, as an [amateur radio operator,](https://en.wikipedia.org/wiki/Amateur_radio) this wasn't my first attempt at interfacing the [ephemeral, digital world with the physical one.](https://en.wikipedia.org/wiki/PSK31)

So when the kit arrived, I immediately thought "this is tech I know." Sliding the components out of their anti-static bag, I spread the resistors, LED, and transistor out on my desk, smiling as I did so.

After the hour was up, I had built an "internet button" (to control the LED's illumination via an internet connected button) and temperature logger. Everything came together quickly, reminding me of the last hardware project I tackled many years ago, but much easier thanks to prepackaged components!

The truly difficult task, as we'll soon realize, isn't interfacing the radically different world of digital and analog (home technologists such as myself have been doing that for years); but creating a system that can archive, index, reference, compute, and derive value from your heap of data: that's where the values. And, not to stress it, but preferably in real time.

## The Internet of Too Many Things

Imagine that your refrigerator is connected to the internet, and can request a repair call (with your consent, of course) from the manufacturer or a nearby authorized service center.

This experience, which is already being realized by some, goes beyond that of your "check engine" light.

However, if we look closely, would-be inventors and large companies alike still have a problem; though not with the built-in technological component, but the data it generates. Devices like the Raspberry Pi, Adafruit Feather, and Beaglebone have made [deploying a fleet of devices](http://www.theverge.com/circuitbreaker/2016/8/15/12484636/onion-omega2-tiny-computer-that-only-costs-5-dollars) to generate analytical data points simple and cheap.

Producing data is simple. The difficult proposal is receiving, processing, and learning from it. And if you can't derive intelligence from your heap of data, consider it a lost investment.

Data, especially if it has a long life, is like an anchor; worth the hassle, if you can harness the potential intelligence within. Otherwise, it represents nothing but wasted fuel, time, and sweat.

## Intelligence Is Essential

Short of guiding you towards the *correct datapoints*, Losant is an essential tool for warehousing, analyzing, and *learning from* the data produced by connected devices. Trust me, if you think "data" is made-up technospeak for a concept that may not exist but still you'll never understand (and that's okay), Losant will help it seem like a tangible source of reason.

**Judging Criteria: Available Data Exploration Tools**

Words only paint half the picture, though. Let's take a look at Losant's intelligent dashboard &mdash; which, while it may seem basic, would take much too long if developing it yourself.

![Losant's Workflow System.](https://s3.amazonaws.com/media.nicholaswyoung.com/img/losant-workflow.jpg)

In the screen capture above, we see Workflow, one of the many helpful interfaces that assist in understanding how our data flows through the various steps in our processing pipeline, and if required, notifying us at every turn.

This real-time, drag-and-drop decision engine is the most powerful feature, I believe. But yet, even as a developer who often chooses to hand code my own solutions, I'm delighted by the elegance and reactivity of the interface.

Let's begin our scoring here. How did the user interface rate?

I believe the design team hit a sweet spot, surfacing power features for pro users while retaining the simplicity and approachability that I believe matters most in emerging markets such as this one. Even after my account sat dormant for months, I log in and it feels familiar.

It's also worth noting that I also expect Losant, as a company, to redesign and adapt as otherwise required to meet the need of future customers. We haven't yet seen the full portfolio of issues that will be raised by large-scale IoT platforms.

But in time, as we do, I believe Losant's design strategy will change to address those issues.

**Judging Criteria: The API**

Since this tool was founded by developers as a service for other developers (who will be integrating their products with Losant), the API matters. There's no consistent, effective method for easing pain associated with working around a poorly designed external dependency.

[Losant's REST API](https://docs.losant.com/rest-api/overview), while I haven't had direct experience, seems friendly and powerful. It feels so feature-complete, my hunch is Losant uses their own API when building the web interface. (Though it's only a hunch.)

In addition to providing the [standard endpoints](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete), the API also supports robust event handling via [Webhooks](https://en.wikipedia.org/wiki/Webhook).

Their REST API is well documented, simple, powerful, and flexible without becoming overly verbose.

## General Thoughts and Analysis

Losant is a technology platform that I believe will be relevant both now and in the future. With any new device or system, you need to thoroughly explore before determining whether it satisfies the needs of your application, but I highly suggest you examine their offering. I believe they're capable of ingesting data at scale, and the data visualization offerings round out an already compelling package.

In case your needs aren't handled by the built-in visualization tools, Webhooks provide an clean method for invoking your custom data processing workflow.

However, I also noticed several areas where they can improve:

**Wider language support would be very nice.**

I believe modern systems programming is primarily happening in Rust, Go, and a handful of emerging languages that currently aren't present in the lineup of existing libraries. I'd like to see these new languages, many of which diverge from classical thinking by attempting to solve old problems with novel solutions, join JavaScript, Python, and Ruby as ecosystems with Tier 1 support.

It matters not whether this happens naturally, where a third party library is dubbed the official version once stable, or if the effort is coordinated by Losant itself. But I think this idea is worth exploring.

**Can I see pricing, please?**

I know my starter workload won't require enterprise pricing, but I'd still like assurance you'll be around as years pass. That means I pay you money, rather than just freeloading.

I'm not actively looking to add an IoT component into any product, but it's something I regularly consider. Rudimentary pricing info between the free and enterprise levels would be wonderful. (Granted, I can write in and ask. But I want to evaluate with an average small business customer or developer in mind.)

**Help users create data immediately.**

The homepage is very informative, but I think it can be more. What if you could construct a small workflow on the homepage, with autogenerated sample data flowing through it?

That's a novel concept for an IoT company, you say. All I ask is that if you adopt it because of this blog post, just mention my name and [give me a link.](http://nicholaswyoung.com/losant-the-iot-platform-for-everyone/)

## Wrap Up

All in all, I'm glad I was chosen to test-drive Losant's system. It's well polished, and with the introduction of the Losant Go App (which turns your phone into an IoT device), they've again proven how it can only improve from here.

<small>[Photo credit: WeMake Milano](https://flic.kr/p/n6GcAn)</small>
