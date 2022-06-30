// ==UserScript==
// @name         Proactive Chat in BYU-Pathway
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.byupathway.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=microsoft.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const newScript = document.createElement("script");
    //newScript.type = "text/javascript"
    newScript.src = "https://collin-murphy.github.io/proactive_chat/proactive_chat.js"
    //newScript.setAttribute("id", "Proactivechattrigger")
    //document.body.appendElement(newScript)

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("fb_root");
    document.body.insertBefore(newScript, currentDiv);
})();
