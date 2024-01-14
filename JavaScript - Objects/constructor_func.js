// Created one Constructor Function so multiple Car objects can be created. Note the use of the THIS keyword.

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;            // same as using myCar2.maxspeed 
    this.driver = driver;                // same as using myCar2.driver
    this.drive = function(speed, time){ 
        console.log(speed * time); 
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Ninja");
var myCar2 = new Car(80, "Zach");
var myCar3 = new Car(90, "Matt");
var myCar4 = new Car(100, "Fred");
var myCar5 = new Car(125, "James");

myCar.drive(30, 5); // Calls the method on the myCar object by inputting speed and time
myCar3.logDriver(); // Calls the logDriver method on the myCar3 object and console logs driver name is Matt

console.log(myCar);
console.log(myCar2);
console.log(myCar3);
console.log(myCar4);
console.log(myCar5);