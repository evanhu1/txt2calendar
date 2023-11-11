import { parse } from 'sherlockjs';
console.log("content.js loaded")

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.text === 'create_event') {
    var event = parse(request.selectionText);
    console.log(event)
    if (event.isAllDay) {
      end.setDate(start.getDate() + 1);
    }
    var start = event.startDate.toISOString().replace(/[^a-zA-Z0-9]/g,'');
    var end = event.endDate ? event.endDate.toISOString().replace(/[^a-zA-Z0-9]/g,'') : start;
    var title = event.eventTitle;
    var url = 'https://www.google.com/calendar/render?action=TEMPLATE&text=' +
      encodeURIComponent(title) + '&dates=' + start + '/' + end;
    window.open(url, '_blank');
  }
});
