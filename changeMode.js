function changeMode() {
  chrome.storage.sync.get(['dark'], function(result) {
    const bodyElement = document.querySelector("body")
    
    if(result.dark === "ON"){
      const darkClass = document.querySelector(".dark")
      if(darkClass === null){
        bodyElement.classList.add("dark")
      }
    }else{
      bodyElement.classList.remove("dark")
    }
  });
}

chrome.runtime.sendMessage({
  action: "changeMode",
  source: changeMode()
});