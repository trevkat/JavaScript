// Adding new elements to the DOM

// Create a new LI element
var newLi = document.createElement("li");

// Create a new A tag
var newA = document.createElement("a");

// Creating a new menu variable by getting the id for the element followed by the id of the tag. [0] sets the position of the new element.
var menu = document.getElementById("menu-nav").getElementsByTagName("ul")[0];

// Call the new menu variable and append the child element which is a new newLi
menu.appendChild("newli");

// insert the new A tag within the Li element
newLi.appendChild("newA")

// Update the title of the new Li element
newA.innerHTML = "Blog";

// inserting the newLi before
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);
