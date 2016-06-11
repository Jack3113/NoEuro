var activated = false;

chrome.browserAction.onClicked.addListener(function(tab) {
    activated = !activated;
    if (activated) {
        chrome.browserAction.setIcon({
            path: "assets/noicon128.png"
        });
    } else {
        chrome.browserAction.setIcon({
            path: "assets/icon128.png"
        });
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (activated && changeInfo.hasOwnProperty("status") && changeInfo.status === "complete") {
        console.log(changeInfo);
        chrome.tabs.executeScript(tabId, {
            file: "noEuro.js"
        }, function() {
            console.log("DONE");
        });
    }
});