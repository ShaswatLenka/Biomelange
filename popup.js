
//creating the button 
var button = document.createElement("button");
button.innerHTML = "MIT News";

//fetching the id
var news = document.getElementById("news");
news.appendChild("button");

//adding event handler
button.addEventListener("click", function(){
   /*var iframe = document.createElement("iframe");
    iframe.setAttribute("src","news.mit.edu/department/biological-engineering");
    iframe.setAttribute("height", 100);
    iframe.setAttribute("width", 100);
    
    var element = document.getElementById("news");
    element.parentNode.insertBefore(iframe,element); */
    
    alert("button is working");
});

