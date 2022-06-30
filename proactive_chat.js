<!-- Source: https://docs.microsoft.com/en-us/dynamics365/customer-service/start-proactive-chat -->
<!-- Code to show proactive chat invite after visitor has spend given time on the webpage -->
<script id="Proactivechattrigger">
	// Wait for Chat widget to load completely
    window.addEventListener("lcw:ready", function handleLivechatReadyEvent(){
		var timeToWaitBeforeOfferingProactiveChatInMilliseconds = 20000;//time to wait before Offering proactive chat to webpage visitor
		// Setting context variables
        Microsoft.Omnichannel.LiveChatWidget.SDK.setContextProvider(function contextProvider(){
            return {
                'Proactive Chat':{'value':'True','isDisplayable':true},
                'Time On Page':{'value': timeToWaitBeforeOfferingProactiveChatInMilliseconds ,'isDisplayable':true},
                'Page URL':{'value': window.location.href,'isDisplayable':true},
            };
        });
		
		//Display proactive chat invite after 'timeToWaitBeforeOfferingProactiveChatInMilliseconds' milliseconds
        setTimeout(function(){
            Microsoft.Omnichannel.LiveChatWidget.SDK.startProactiveChat({message: "Hi! Just checking in to see if I can help answer any questions you may have."}, false)
        },timeToWaitBeforeOfferingProactiveChatInMilliseconds);
    });
</script>
