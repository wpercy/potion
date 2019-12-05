chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "notion_page") {
      chrome.tabs.create({"url": request.url.replace(/http(s)?/,"notion")});
    }
  }
);
