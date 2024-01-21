// DOM - Document Object Model. The document(HTML) is just the web page.
// Every element in an HTML document is an object: <head> <body> <p> etc.

var myBody = document.getElementsByTagName("body");
console.log(myBody);

myBody[0].innerHTML;

// Changing HTML Tags
myBody[0].innerHTML = "<p>I am a paragraph tag</p>" //adding this to the console in the browser will remove content of body which are links to this <p> tag/content

// Changing Text Content - Add each line to the console in browser to see changes
var myTitle = document.getElementById("title");
myTitle.textContent;

myTitle.textContent = "Updated via JavaScript";

// Accessing and changing attributes ** Remember to add these to the console

var link = document.getElementById("test")
link.getAttribute("href"); // used to get the attribute 

link.setAttribute("class", "pie") // used to update the attribute. Second parameter is what its updated to. 

link.setAttribute("alt", "hello") // Can also add an attribute

link.className;

link.className("ninja") // updates from pie back to ninja

link.style
