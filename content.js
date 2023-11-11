import Sherlock from 'sherlockjs';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.text === 'create_event') {
    var event = Sherlock.parse(request.selectionText);
    var start = event.startDate.toISOString();
    var end = event.endDate.toISOString();
    var title = event.eventTitle;
    var url = 'https://www.google.com/calendar/render?action=TEMPLATE&text=' +
      encodeURIComponent(title) + '&dates=' + start + '/' + end;
    window.open(url, '_blank');
  }
});
