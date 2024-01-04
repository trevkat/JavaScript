// While Loop

/*
var age = 5;

while  (age < 10) {
        
    console.log("Your age is less than 10");
    age++;
    
}

document.write("you are now over 10");

*/

// For Loop - Same as while Loop above but written differently

/*

for (age = 5; age < 10; age++) {
        
    console.log("Your age is less than 10");
    
}

document.write("you are now over 10");

*/

// Using a For Loop to update link tags

/*

var links = document.getElementsByTagName("a");

for (i = 0; i <= links.length; i++) {
        
    console.log("This is link number:" + i);
    
}

document.write("All links are now looped");

*/

// For Loop - Break & Continue

for (i = 0; i < 10; i++) {
    
    if(i === 5 || i === 3){
        
        continue;
    }

    console.log(i);

    if (i === 7) {

        break;
    }

}

console.log("I have broken out of the loop");
