document.addEventListener('DOMContentLoaded', function(){

  let stateText = document.querySelector("#stateText")

  chrome.storage.sync.get(['dark'], function(result) {
    stateText.innerHTML = "Dark Mode is " + result.dark;
  });

  document.querySelector("#button-on").addEventListener('click', function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        if(url === "https://web.whatsapp.com/"){
          chrome.storage.sync.set({'dark': 'ON'}, function() {
            stateText.innerHTML = "Dark Mode is ON";
            chrome.tabs.executeScript({
              file: "changeMode.js"
            });
          })          
        }
    });

  })

  document.querySelector("#button-off").addEventListener('click', function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let url = tabs[0].url;
      if(url === "https://web.whatsapp.com/"){
        chrome.storage.sync.set({'dark': 'OFF'}, function() {
          stateText.innerHTML = "Dark Mode is OFF";
          chrome.tabs.executeScript({
            file: "changeMode.js"
          });
        })
        
      }
    });
  })
});