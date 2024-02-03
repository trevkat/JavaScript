// JS Library is a chunk of JS code that we can utilize to help with our code
// jquery.com

// This gets the fifth p tag element that says grab me
var myPara = document.getElementById("content").getElementsByTagName("p")[5];

// jquery allows us to grab the above much easier with a different query
var myPara2 = $("#content p:last-child");

// add the above and below to console
myPara2.addClass("test");
// Output: <p class="test">grab me</p>

// removes the class
myPara2.removeClass("test");

// this will fade out one of the paragraphs
myPara2.fadeOut();

// will fade in the paragraph
myPara2.fadeIn();

// control the CSS
myPara2.css({position: "relative", color: "red"})

myPara2.animate({left: "50px"})