chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, {
		file: 'static/js/main.js'
	});
	chrome.tabs.insertCSS(tab.ib, {
		file: 'app.css'
	});
});