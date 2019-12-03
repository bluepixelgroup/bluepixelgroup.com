---
title: "How we helped Oriel.io build their GDPR solution"
date: "2017-08-21"
testimonial: "Oriel contracted the Blue Pixel team to help build our Consent Management Solution. Without their help and development skills, we simply could not have delivered this project to plan. They delivered on time, to spec and in the budget, so I have no hesitation in recommending their company and will definitely use them again."
author:
  name: "Aidan Joyce"
  role: "CEO"
  company: "Oriel Ventures"
  image: ../assets/images/portfolio/oriel-author.jpg
projectName: "Oriel"
projectLink: "http://oriel.io"
featuredImage: ../assets/images/portfolio/oriel-icon.png
projectShortDescription: "How we helped Oriel.io build their GDPR solution"
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
media:
  - ../assets/images/portfolio/media/oriel-scan.png
  - ../assets/images/portfolio/media/oriel-landing.png
  - ../assets/images/portfolio/media/yournet.png
---

## Challenge
Starting 25 May 2018 The General Data Protection Regulation (EU) 2016/679 (“GDPR”) came into effect and companies were forced 
to provide solutions that are compliant with the new regulation. Publishers were faced with the need to collect, store and respect 
user consent in regards to the use of their personal data and users were seeking a way to manage their digital identity and decide 
which entities should have access to their personal data. In order to mitigate the publisher's risk of breaching GDPR, Oriel proposed 
a SaaS solution for collecting and managing user consent.


## Solution
The solution was based on the [Transparency & Consent Framework](https://iabeurope.eu/tcf-for-cmps/) (“TCF”) 
for building a Consent Management Platform (“CMP”) offered by the [Interactive Advertising Bureau](https://www.iab.com/) (“IAB”).
The final solution contained the following:

###### CMP Widget
A configurable widget that the publisher would load inside the website. The TCF compliant widget was built using JavaScript and Preact 
and allowed users to give (or revoke) consent for the publisher to share the user's personal data with third parties. The widget offered 
granular consent, meaning that the user is able to decide for which purposes his personal data will be used (E.g. Content selection, delivery, reporting, etc.)

###### Website Scanner
A tool that the publishers can use to scan their website in order to see if they are in breach of GDPR. The tool scans 
the website and creates a report with all the cookies and trackers divided using a proprietary scoring algorithm into 
3 categories: High Risk, Medium Risk, and Low risk.

###### Oriel dashboard
A dashboard where the clients could customize the look and feel of the widget, configure the widget for each website they own,
get a view of their website analytics, scan the website in order to see if they are GDPR compliant,
see billing details and upgrade/downgrade their pricing plan. 

###### Oriel website
The company website, which was the main entry-point of the solution, provided the user with a light scan of their
website to see if they are GDPR compliant and a smooth onboarding process for the new customers.
