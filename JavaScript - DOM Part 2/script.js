// Changing CSS Styles - Remember these queries have to be run indiviually in console

var title = document.getElementById("title")

title.setAttribute("style", "position: relative;");
title.setAttribute("styel", "left: 10px;");

title.setAttribute("style", "position: relative; left: 10px;"); // You can include both Attributes like this as well 


// Better way of accomplishing whats shown above
var title = document.getElementById("title")
title.style.left = "20px";
title.style.top = "10px";
title.style.color = "red";
title.style.backgroundColor = "blue";
