// This JS content has been pasted into the window.onload function below 
// which now works since the JS script was placed in the head of the HTML file.
// This can also be messy so its not recommended. 

/* 
var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){

    if(content.className == "open"){
        // shrink the box
        content.className = "";
        button.innerHTML = "Show More";
    } else {
        // expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
    }
};

*/

// Create a function for JS page content called setUpEvent
function setUpEvent(){

    var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    
    button.onclick = function(){
    
        if(content.className == "open"){
            // shrink the box
            content.className = "";
            button.innerHTML = "Show More";
        } else {
            // expand the box
            content.className = "open";
            button.innerHTML = "Show Less";
        }
    };
};

// This is calling the setUpEvent function above using the onload method which causes the JS to fire after the page is fully loaded.
window.onload = function(){

    setUpEvent();

};
