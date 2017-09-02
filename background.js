chrome.runtime.onMessage.addListener(function(response, tabId, sendMessage){
     for(var i = 0; i<response.length; i++){
         var para = document.createElement("p");
         var text = document.createTextNode(response[i]);
         para.appendChild(text);
         document.body.appendChild(para);
     }
})

    
    
// addListener accepts a function that accepts three parameters: 
//first paramenter  -> receives the message from content script.
//second parameter  -> receives the tab information of the at page
//third parameter   -> stores the value to be sent back to the content script

