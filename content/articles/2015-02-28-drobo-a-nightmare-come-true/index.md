---
title: 'Drobo: a Nightmare Come True'
date: 2015-02-28T05:39:00.000Z
path: /drobo-a-nightmare-come-true
layout: post
tags:
  - customer-service
  - gripes
---
Settle in, dear reader. I'm here to share a story of frustration, unbelievably offensive customer service, and ultimately, a brand gone astray.

It was mid-2012. I was preparing to launch [The Machine](http://machine.fm), a broadcasting network for listeners interested in artisan goods, intellectual conversations, and spirited debate. Anticipating our looming need for storage, I purchased a DroboFS network-attached storage device, convinced it was the best product for our needs as a growing, but still home-based business.

When the unit arrived, I hurried to unbox it, install the hard drives I purchased expressly for archival storage, and connect the Drobo to our network. For two months, everything was excellent: we recorded, edited, and packaged up content for our launch, storing everything on the 5-drive array whirring quietly beside my desk. It was easy to use, fast to access, and at that point, appeared to be a solid investment. The praises of Drobo's "BeyondRAID" technology kept pouring in; everyone agreed that, not only was it the easiest to use NAS on the market, but adding capacity was simple: just add a new drive, and you're ready to go again.

Unfortunately, it wasn't that easy. Two months after purchase, I stepped into the studio and found all lights on the unit flashing red. Upon further inspection via the Drobo Dashboard, I discovered that all of my drives were corrupt. For most, this event would inspire panic, but given the marketing hype, I assumed a solution wasn't that far ahead.

I emailed Drobo's customer care department, attached my diagnostic file, and awaited their swift and clear response. The unit was only a few months old, and of course, covered under warranty. What I received was a baffling and accusatory email, insisting I had improperly set up the unit: by allowing the power source to die, the disk corruption was clearly user error. Never did the technical support team offer to assist or troubleshoot any further.

But for a moment, let's reverse to cover a few important topics. First, the Drobo was connected to a brand-new APC Uninterruptible Power Supply (UPS), again, bought specifically to power my storage solution. Second, according to the Drobo's internal logs, power to the unit was never interrupted, and yet, their team continued to insist that it was. This assertion, that the customer is idiotic and always at fault was frustrating to say the least. I asked to return the unit, and was met with denials stronger than I've ever experienced from any other established company. Little did I know that as I struggled with their team, several other influential digital creators ([Scott Kelby](http://scottkelby.com/2012/im-done-with-drobo/), to name one) were also fighting for their data integrity and being extorted with $300 data recovery fees.

After many emails, phone calls, and aggravated tweets, the Drobo team finally agreed to help. They suggested I purchase all new drives (to replace the barely used ones), and create a block level clone of all affected hard drives. Over the course of a week, most of which was spent monitoring the carefully orchestrated copying process, I created a perfect duplicate of every corrupted drive and installed them into the Drobo. At last, my $800 storage device was functioning properly again.

This event caused me to swear off any future recommendations I might've made for the product, and taught me to be careful of a company's marketing promises. Recognizing the error of their actions, my contacts at Drobo said that should an event of this sort ever happen again, they would strive to be helpful: paying for data recovery, and sending out a new, updated product. They lied.

## Round II

For two years, the product worked mostly as advertised. We had a few glitches, but they were minor and nothing my IT skills couldn't handle. It was easy, replacing the network cord, updating the UPS that powered our Drobo, and general housekeeping of the file structure were minor tasks that you expect to handle with any networked storage array. I was mostly happy, but in the back of my mind, I knew disaster might strike again. I hoped that it wouldn't.

Last October, I logged in to find several corrupt files on our Drobo system. Remembering how helpful their team promised to be, I emailed support. Again, I was met with utter disdain for contacting them. My case was referred to a higher tier, and while I waited for the techs to process my diagnostics file, the representative suggested we attempt a relatively simple fix.

Apparently, every Drobo has a "repair" button built into the dashboard. But there was one problem: it was greyed out, and unable to be accessed. This baffled the techs, who suggested I upgrade the firmware. I did, and it still didn't help.

Finally, after four days of waiting, Tier II support rang to investigate further, eventually recommending that I migrate some data off the Drobo, purchase new drives, clone the old ones, and then attempt to repair it. This sounds familiar, right?

I'm now stuck in an endless loop. I don't have the budget to purchase all new drives, and their techs refuse to help troubleshoot until I do, because it's much easier to blame the customer rather than resolve recurring issues with their product. I've tried everything they asked, short of trashing the old drives and replacing them with new ones, a tall order to expect from someone who purchased a storage device billed as a "self-healing, self-managing and even self-optimizing" system, only to have it fail multiple times.

## The Takeaway

Frankly, I don't know what is next. As I type this, all of my network shares are inaccessible, held hostage by the box that has now ate $1,000 worth of money and countless hours of time. Support is no help, often insisting on one fix-all solution which never seems to work when implemented. To date, they have only offered ideas which don't work with my hardware variant, or aren't available even with the latest firmware.

We're at an impasse. Unless someone in leadership at Drobo steps in, I don't know if I'll ever retrieve the stored data. And even then, I'll never trust the brand again.

It's a tough position to be in. You want to believe products were designed to serve a specific purpose, and that marketing amplifies the truth behind them. And, when all else fails, a customer can get help. Unfortunately, in the context of my dealings with Drobo, all of these ideals prove themselves to be untrue. It's easier to lie and cover your problems, behaving like they don't exist, but eventually, the truth will get out. Bank on it.

## Get In Touch

If anyone from Drobo reads this and wants to make everything right, [email](mailto:nyoung@untilnow.co) me.
