---
layout: post
title: The Developers Checklist for Implementing SEO 🔍
date: 2022-10-26 13:30:00 +0100
permalink: /blog/2022/10/26/the-developers-checklist-for-implementing-seo
description: The Developers Checklist for Implementing SEO - Let's talk about everything a developer should be implementing for good SEO audits and scores.  
categories: blog
iconUrl: /assets/imgs/logos/logo-green.svg 
---

So you want to learn more about what you should be implementing for good SEO practices huh? That's assuming you're a developer who wants a checklist of everything you should be adding to your website...? If so read on!

<h2>Meta Tags</h2>
<br>
There are a number of meta tags you should be adding directly into the head of your website. First up and most importantly it's the meta robots tag:  

```html
    <meta name="robots" content="follow, index">
```

> 💡 If you set this to "nofollow, noindex" your website will be hidden from search engines.

The next most important meta tags to include in your head are the meta title and description tags. These tags define how your search result will appear on Google and the more informed the content is for these tags the higher your search result will appear:

```html
    <title>PAGE NAME - COMPANY NAME</title>
    <meta name="description" content="DESCRIPTION GOES HERE" />
```

> 💡 It is recommended page titles are between <strong>10 and 60 characters</strong>.

> 💡 Page descriptions shouldn't be too long or too short. Long page descriptions will only be partially shown in search results and short descriptions are unlikely to be helpful to users. It is recommended page descriptions are between <strong>100 and 320 characters</strong>.

<h2>Social Tags/Cards</h2>
<br>
Next up for your websites head are the social media meta tags for social media cards. These meta tags can control the appearance of any links you share on social (specifically Facebook & Twitter) by allowing you to control the image, title, description and dimensions of your social card.

```html
    <meta property="fb:app_id" content="">
    <meta property="og:url" content=“” />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="" />
    <meta property="og:image" content="" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:description" content="" />
    <meta property="og:site_name" content="" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:locale:alternate" content="en_GB" />
    
    <meta name="twitter:card" content="" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:url" content="" />
    <meta name="twitter:title" content="" />
    <meta name="twitter:description" content="" />
    <meta name="twitter:image" content="" />
```

<h2>H1's</h2>
<br>
Each page should have a H1 heading that is unique between all other pages on the site to avoid duplicate content issues. Each indexable page on a site should have unique content and each indexable page should have an H1 heading that accurately describes the topic of that page. This means each indexable page should have an H1 heading that is unique to that page.

> 💡 In short: <strong>There should only be <u>one</u> H1 tag per page</strong>.

<h2>Images</h2>
<br>
Make sure images have alt tags with a good description and that image files are named appropriately. 

Bad Example:
```html
    <img src="JXHS450a0fsd0ddf.jpg">
```

Good Example:
```html
    <img src="meet-the-team.jpg" alt="the company name team">
```

<h2>Sitemap.xml/Robots.txt</h2>
<br>
Don't forget to generate a sitemap.xml for your website and make sure to update the sitemap URL in your robots.txt file like so:
```html
    Sitemap: https://YOURDOMAIN.COM/sitemap.xml
```
> 💡 I generated the sitemap for this site with a free online sitemap generator: <a href="" target="blank" rel="noopener">www.xml-sitemaps.com</a>

<h2>Set up WWW or non WWW redirects</h2>
<br>
The "www." before the start of any website is technically a subdomain. This means if you don't set up a redirect for WWW or non WWW you'll have two versions of your website available online e.g:

www.yourwebsite.com & yourwebsite.com

This can play havoc with any analytics you have installed so you'll want to choose whether your website has "www." at the start or not. If your server is using Apache server and you have a .htaccess file you can add:

For WWW to non WWW redirect:
```html
    RewriteBase /
    RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
    RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

Force WWW always:
```html
    RewriteCond %{HTTP_HOST} !=""
    RewriteCond %{HTTP_HOST} !^www\. [NC]
    RewriteCond %{HTTPS}s ^on(s)|
    RewriteRule ^ http%1://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```

<h2>Mobile Scaling/Responsive Design</h2>
<br>
For most websites the majority of your traffic will be users viewing your site via a mobile device. I shouldn't have to go into more detail here since it's not 2005 anymore and your website should be mobile responsive.

> 💡 Your website SEO score will be marked negatively if your website isn't mobile responsive.