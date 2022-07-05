# Proactive Dynamics 365/Omnichannel Chat
This is a script that allows websites to have proactive chatbots though Dynamics 365/Omnichannel. 

**NOTE:** This script will only work if the Omnichannel workstream has the proactive chat feature enabled. This can be toggled in the Omnichannel Admin Center under "Workstreams".

# Usage with Test webpage
If you want a quick example of how this script works, use the [Github Pages link for this repo](https://collin-murphy.github.io/proactive_chat/).

# Usage on the Transfer Credit website
If you want to see how this would run on the BYU Pathway Website:
1. Download and install the [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. Download the [Transfer Evaluation Tampermonkey Script](https://raw.githubusercontent.com/collin-murphy/proactive_chat/transfer/tampermonkey.js)
3. Go to "Utilities" in the Tampermonkey extension webpage and use "Import from file" to import the script from step 2
4. Navigate to the [Transfer Credits Webpage](https://www.byupathway.org/admissions/transfer-credits)
5. Click on the Tampermonkey extension and make sure the script is enabled
6. Refresh the page and you should see an alert that says "Tampermonkey Script Loaded."
7. Wait 5 seconds for the proactive chat to show up in the bottom right hand corner
