// Changes the color

var colorChanger = document.getElementById("color-changer");
// sets which color to change to
var colors = ["red", "blue", "green", "pink"];
// counts which position in Array. Ex, 0 = red, 1 = blue
var counter = 0;

function changeColor(){
// if statement to reset counter back to zero
    if (counter >= colors.length){
        counter = 0;
    }

    colorChanger.style.background = colors[counter];
    counter++;

};

// two parameters (function, time in milliseconds)
var myTimer = setInterval(changeColor, 1000);

// Click event to stop colors changing when clicked
colorChanger.onclick = function(){

    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer Stopped!";

};