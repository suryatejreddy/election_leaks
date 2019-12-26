function is_leak(text, sendResponse){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://test.reddy.com:5000/?text=" + text, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        sendResponse({result : xhr.responseText});
    }
  }
  xhr.send();
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    is_leak(request.text, sendResponse);
    return true;
  });
