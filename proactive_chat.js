//https://docs.microsoft.com/en-us/dynamics365/customer-service/start-proactive-chat

// Wait for Chat widget to load completely
window.addEventListener("lcw:ready", function handleLivechatReadyEvent() {
    var timeToWaitBeforeOfferingProactiveChatInMilliseconds = 5000;//time to wait before Offering proactive chat to webpage visitor
    // Setting context variables
    Microsoft.Omnichannel.LiveChatWidget.SDK.setContextProvider(function contextProvider() {
        return {
            'Proactive Chat': { 'value': 'True', 'isDisplayable': true },
            'Time On Page': { 'value': timeToWaitBeforeOfferingProactiveChatInMilliseconds, 'isDisplayable': true },
            'Page URL': { 'value': window.location.href, 'isDisplayable': true },
        };
    });

    //Display proactive chat invite after 'timeToWaitBeforeOfferingProactiveChatInMilliseconds' milliseconds
    setTimeout(function () {
        Microsoft.Omnichannel.LiveChatWidget.SDK.startProactiveChat({ message: "Join this chat and type \"Unofficial Transcript Evaluation\" to see how many of your credits will transfer!" }, false)
    }, timeToWaitBeforeOfferingProactiveChatInMilliseconds);
});
