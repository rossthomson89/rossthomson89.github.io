---
layout: post
title:  The Future's Dark 🌙
date:   2019-11-27 13:30:00 +0100
permalink: /blog/2019/11/27/the-futures-dark
description: The Future's Dark - This article explains how I went about creating a dark mode feature for my website with the use of a CSS media query and some JQuery. 
categories: blog
iconUrl: /assets/imgs/logos/logo-green.svg 
---

With some of the worlds tech giants releasing dark mode features (including Google, Apple, Instagram & Reddit) I wanted to know how it could be implemented for any of my future website projects.

If you're currently viewing this site with dark mode enabled on your browser/operating system then you should hopefully (and automatically) be seeing a "darker" version of the site. It's much friendlier on the old retina's if you ask me! 

<p><strike>Truth be told, whenever I'm working on this site I do it exclusively in dark mode.</strike></p>

For any web developers out there wanting to know how I added a dark mode feature to this site then the next part of this article might be of interest to you, however the rest of you can bail out <a href="/contact">here</a>.  

So probably the easiest way you could implement an automatic dark mode feature on your website is with a good ol' CSS media query:
 
<pre>
    <code>
    /* Light mode */
    @media (prefers-color-scheme: light) {
        body {
            background-color: #fff;
            color: 000;
        }
    }
    
    /* Dark mode */
    @media (prefers-color-scheme: dark) {
        body {
            background-color: #000;
            color: #fff;
        }
    }
    </code>
</pre>

The code above should be pretty self explanatory to even a non developer so I won't go into the basics of CSS here. The problem with this method however is the same old story that is <a href="https://caniuse.com/#search=prefers-color-scheme" target="_blank">browser support</a>. 

To combat this issue it seemed the simplest way was to allow users to manually toggle between dark and light mode via some sort of button (hence the cool toggle button in the navigation). This was done with some basic JQuery and CSS:

<pre>
    <code>
    //Toggle button for light/dark mode
    $(".mode_button").change(function() {
        if(this.checked) {
            if (localStorage.toggled != 'dark') {
                $('body').toggleClass('dark', true);
                localStorage.toggled = "dark";
            }
        } else {
             $('body').toggleClass('dark', false);
             localStorage.toggled = "";
        }
    });
    </code>
</pre>

The above function toggles a CSS class called "dark" which appends (or removes) the class from the HTML's body element which in turn applies the dark styling. Some of you may also notice I'm also toggling a value in local storage here but I'll go into more detail about why I did this a littler later on. Below you'll find an example of what your dark CSS class could look like:

<pre>
    <code>
    body.dark {
        background-color: #202020;
        color: #fff;
    }
    </code>
</pre>

You'll most likely need to add additional CSS than just the code above to make sure all of the elements on your web pages are suitable for dark mode but I have initially built this site with "vanilla" CSS and I would recommend using something like Sass for more complicated layouts. 

Now in regards to the local storage in the JQuery mentioned above, I did this for a couple of reasons:

<ol>
    <li>I wanted a way for the browser to remember a users preference for either dark or light mode (especially when viewing multiple pages of the site)</li>
    <li>I also wanted a way to do an automatic check on whether the user has dark mode enabled on their browser</li>
</ol>

Since my site doesn't have a database or any cool server side stuff going on I thought that local storage seemed the best way to get the result I was looking for. JQuery can do a check for this:

<pre>
    <code>
    //For new visitors check if they have dark mode enabled and set dark mode
    if (localStorage.toggled == undefined) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            $('body').addClass('dark');
            localStorage.toggled = "dark";
            $('#dark_mode').attr('checked', 'checked');
        }
    }

    //If the user has a dark mode preference then that's cool
    if (localStorage.toggled == 'dark') {
        $('body').addClass('dark');
        $('#dark_mode').attr('checked', 'checked');
    }
    </code>
</pre>


The first <i>if statement</i> assumes that this is a users first time viewing the site and that they have dark mode enabled. The dark mode check is done via the line:
<pre>
    <code>
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    </code>
</pre>

This basically takes advantage of the CSS media query discussed near the beginning of the article and if it detects that the user is indeed in dark mode then: add the dark class to the body, add the dark value to local storage, and then finally update the toggle switch to "enabled" to show that the user in dark mode. 

The next <i>if statement</i> checks to see if the dark value exists in local storage and if so, adds the dark class and enables the toggle. These two if statements together solve the issue of a users dark mode preference not being "remembered" when browsing between pages on the site but also "remembers" they're preference if they've viewed the site before (unless they use a different browser or clear their cache, preferences, disable javascript, blah, blah, blah). 

If you put all the above together then you'll have a fairly straightforward way of adding a dark mode feature to your site. There are a few downsides to using this technique but I'm fairly happy with the overall result. 

Other than the browser support issue mentioned above another issue I found was that even adding some subtle CSS transitions was troublesome. This headache was mainly due to flicking between viewing pages and animations resetting on a page refresh. Since a minimalistic approach was taken in the design and implementation of this website it was an easy decision to remove them all together.

All of the code and the frameworks I use are Open Source so feel free to have a look at this websites repository on <a href="https://github.com/rossthomson89/rossthomson89.github.io">Github</a> if you're into that sort of thing 😉 