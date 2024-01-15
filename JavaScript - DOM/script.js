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


