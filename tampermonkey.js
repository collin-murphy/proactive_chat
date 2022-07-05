// ==UserScript==
// @name         Transfer Evaluation Proactive Chat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Proactive chat that shows up on the BYU-Pathway transfer credit website
// @author       You
// @match        https://www.byupathway.org/admissions/transfer-credits
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    alert("Tampermonkey Script loaded.")
    const proactiveScript = document.createElement("script")
    proactiveScript.src = "https://collin-murphy.github.io/proactive_chat/proactive_chat.js"

    const chatBotScript = document.createElement("script")
    chatBotScript.setAttribute("id","Microsoft_Omnichannel_LCWidget")
    chatBotScript.setAttribute("src","https://oc-cdn-ocprod.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js")
    chatBotScript.setAttribute("data-app-id","81ee3835-bcf7-4c4b-aa55-b55caed43d0e")
    chatBotScript.setAttribute("data-lcw-version","prod")
    chatBotScript.setAttribute("data-org-id","5e6eb5b2-fe57-4b0c-a55d-392d0141c62e")
    chatBotScript.setAttribute("data-org-url","https://byupathway-crm.omnichannelengagementhub.com")

    //newScript.setAttribute("id", "Proactivechattrigger")


    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("fb_root")
    document.body.insertBefore(proactiveScript, currentDiv)
    document.body.insertBefore(chatBotScript, currentDiv)

})();
