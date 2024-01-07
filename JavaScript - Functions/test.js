function getAverage (a,b){
    
    var average = (a + b) / 2; // This is a Local Variable that can only be used within this Function. Average cannot be called outside of the Function.
    console.log(average);
    return average
    
}

var myResult = getAverage(7,12);  //pass in numbers for a,b  -This is also a Global Variable which can be called anywhere

console.log("the average is " + myResult);