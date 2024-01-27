// Javascript occurring when an action takes place, for example: hovering over text, scrolling, clicking a button, loading a page

// alert("hey!")

// This element is now stored in a variable called title. Now title has access to various event properties that can be used. 
var title = document.getElementById("page-title");

title.onclick = function(){
    alert("You clicked me!");
};

title.onmouseover = function(){
    alert("You hovered your mouse over me!");
};
