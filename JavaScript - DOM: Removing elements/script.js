// Removing elements from the DOM

var parent = document.getElementById("menu-nav").getElementsByTagName("ul")[0];

var child = parent.getElementsByTagName("li")[0];

// This should remove the element stored in the parent variable above
var removed = parent.removeChild(child);

// To append it back at the bottom of the li tag - using the removed variable below
parent.appendChild(removed);