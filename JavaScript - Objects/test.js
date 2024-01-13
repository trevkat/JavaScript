// Objects

// var myCar = new Car() ** Creates a new instance of the car object

// myCar.drive() ** Example of a function of the myCar object. Paramters can be passed in via ()

myString = "hello"
myString.length
myString.toLowerCase()

// Creating a new object
var myCar = new Object();

// Assigning properties to the myCar object
myCar.maxSpeed = 50; 
myCar.driver = "Shawn"; 

console.log(myCar.driver);

// This is the same as above. Length is a property as well
myString.length 

// Methods on the myCar object
myCar.drive = function(){ console.log("Now driving");};

// Calling the myCar drive method
myCar.drive();

// Creating a new object of myCar while assigning each property of that object
var myCar2 = {
    
    maxSpeed: 50, 
    driver: "Trevor", 
    drive: function(){ console.log("Now driving again");}
};

console.log(myCar2.maxSpeed);
myCar2.drive()
console.log(myCar2)

var myCar3 = {
    
    maxSpeed: 75, 
    driver: "Dude", 
    drive: function(speed, time){  // Create a function with parameters for speed and time to calculate distance traveled
        console.log(speed * time); // Console log speed * time
    }
};

myCar3.drive(75, 3) // Add the parameter for speed and time when calling the myCar3 object
