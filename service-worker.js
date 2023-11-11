const handleClick = (info, tab) => {
  if (info.menuItemId == "create_event") {
    chrome.tabs.sendMessage(tab.id, {text: 'create_event', selectionText: info.selectionText});
  }
}

// Create's a context menu item to create an event from a selected text
chrome.contextMenus.onClicked.addListener(
  handleClick
);

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: "Create Event",
    contexts: ["selection"],
    id: "create_event"
  });
});
