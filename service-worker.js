chrome.contextMenus.create({
  title: "Create Event",
  contexts: ["selection"],
  onclick: function(info, tab) {
    chrome.tabs.sendMessage(tab.id, {text: 'create_event', selectionText: info.selectionText});
  }
});
