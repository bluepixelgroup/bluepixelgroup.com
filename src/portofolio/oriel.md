---
title: "Project one title"
date: "2017-08-21"
testimonial: "Great testimonial for project one"
projectName: "Oriel"
featuredImage: ../assets/images/portfolio/oriel-icon.png
projectShortDescription: "Holder text for use in your graphic, print and web layouts, and discover plugins for."
featured: true
coverImage: ../assets/images/portfolio/oriel-cover.png
tags:
  - Privacy
  - GDPR
  - ePrivacy
tech:
  - Python
  - Django
  - Node.js
  - React.js
  - Javascript
---

## Challenge

The General Data Protection Regulation (EU) 2016/679 (“GDPR”) is an EU regulation whose purpose is to give individuals control over their personal data, for protecting their privacy and for addressing the export of such data outside of the EU, replacing the Data Protection Directive 95/46/EC.

## Solution

Disabling or limiting the expiry date of the tracking cookie is not the advice of the Dutch DPA and it’s a little know fact that it can be done.

If you’re using “analytics.js” the tracking cookie is named by default “_ga” and it’s set to expire in 2 years. That may be too much and by limiting its maximum age you can address privacy concerns while still being able to track the number of unique users for the marketing campaigns that you care about.

WARNING: Disabling the tracking cookie will make GA unable to accurately track unique users, so you’re going to lose accuracy. However if hard pressed to use an implementation that drops no tracking cookies at all, this can be achieving on the client-side via this: