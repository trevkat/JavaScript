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

// This keyword - refers to whatever object owns that space

console.log(this); // Will refer to the current window

var myCar4 = {
    
    maxSpeed: 80, 
    driver: "Susie", 
    drive: function(speed, time){  // Create a function with parameters for speed and time to calculate distance traveled
        console.log(speed * time); // Console log speed * time
    },
    test: function(){
        console.log(this);
    }
};

myCar4.test() // This in this fuction is owned by the myCar4 object which is why it logs the myCar4 object to the console.


var myCar5 = {
    
    maxSpeed: 100, 
    driver: "Steve", 
    drive: function(speed, time){  // Create a function with parameters for speed and time to calculate distance traveled
        console.log(speed * time); // Console log speed * time
    },
    test: function(){
        console.log(this); // myCar5 could be used as a parameter. However, This makes more sense if repeating this code and not having to correct the parameter each time. 
    }
};

myCar5.test() // Same as above. Logs both objects with This keyword.


var myCar6 = {
    
    maxSpeed: 20, 
    driver: "Joe", 
    drive: function(speed, time){  // Create a function with parameters for speed and time to calculate distance traveled
        console.log(speed * time); // Console log speed * time
    },
    logDriver: function(){
        console.log("driver name is " + this.driver) // this is owned by the myCar6 driver so myCar6.driver would also work here. this is better for reuseable code.
    }
};

myCar6.logDriver() // driver name is joe

// Constructor Function - What if you wanted to create several of the same objects
// The Constructor Function is just a function that creates an object

//Examples

var myArray = new Array(); //Creates a new blank array object. Array() calls the Array constructor function to create that object
var myString = new String(); //Same as above

// var myCar = new Car(); We can use the constructor function to create Car objects for us as many times as we want

// See this being tested in the constructor function html and js files






