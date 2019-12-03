---
title: "How we helped Yournet build a web proxy solution"
date: "2017-08-21"

author:
  name: "James Quinn"
  role: "Co-founder"
  company: "Yournet"

projectName: "Yournet"
featuredImage: ../assets/images/portfolio/yournet-icon.png
projectShortDescription: "How we helped Yournet build a web proxy solution"
projectLink: "https://yournet.io"
featured: true
coverImage: ../assets/images/portfolio/oriel-cover.png
tags:
  - Proxy
  - VPN
  - Geo-blocking
tech:
  - Python
  - Django
  - Terraform
  - Squid
  - Node.js
  - React.js
  - Javascript
stats:
  weeks: 21
  persons: 3
  
media:
  - ../assets/images/portfolio/media/yournet.png  
---

### Challenge
With geo-blocked content being on the rise, users need a lightweight, easy to use and free solution for accessing their favorite
content. Existing free proxy solutions don't always work or they track users online and use their personal data for monetization.
\
\
Yournet proposes a proxy solution where the users provide no personal data and there is no need for using hard currency in order to access
geo-blocked content. The service requires no account, emails or user names to use. Users access Yournet servers via anonymous
engagement with surveys or ads.

### Solution
The proposed solution is based on creating a Google Chrome extension that users will install and after interacting with an
anonymous ad or survey they will be rewarded a certain amount of proxy access time. The extension has granular control giving the users
the ability to decide which browser tabs they need to proxy and select the country trough which they want their content to be proxied
trough. 
\
\
The entire backend infrastructure is hosted on Amazon AWS making it scalable and easy to maintain and is built using 
Infrastructure as Code (IaC) processes, leveraging Terraform scripts for managing and provisioning computer data centers.

### Features MVP:
- Website
- Blog
- Solution for collecting user feedback
- Google Chrome extension
- Integrations with various ad/survey providers
- Multiple reward plans based on the duration of the ad/survey interaction 
- Backend API
- Proxy servers network
- Monitoring for the proxy network
- AWS Infrastructure as Code (IaC) with Terraform.
