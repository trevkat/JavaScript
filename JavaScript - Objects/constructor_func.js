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

// Date Object - used to create dynamic dates or store previous/future dates

var myDate = new Date();
console.log(myDate); // Logs current date and time - refreshing keeps updating to current DATE.

// Jan is 0, Feb is 1, etc - year, month, day, hour, min, second
var myPastDate = new Date(1980, 1, 25, 10, 30, 15);
console.log(myPastDate);

var myFutureDate = new Date(2015, 0, 25);
console.log(myFutureDate);

var susieBirthday = new Date(1984, 8, 1);
var myBirthday = new Date(1980, 1, 25);
console.log(myBirthday);

console.log(myBirthday.getFullYear());

console.log(myBirthday.getDate());

console.log(myBirthday.getDay());

// if else comparing dates
if(myBirthday == susieBirthday){

    console.log("birthdays are no equal");
}else{

    console.log("birthdays are not equal");
}