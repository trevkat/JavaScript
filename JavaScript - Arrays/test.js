// Arrays

var myArray = []
myArray[0] = 25 // [0] is the position in the array
myArray[1] = 35
myArray[2] = true
myArray[3] = "hello"

// Updating values

myArray[2] = false // Updates from true to false

console.log(myArray)

var myArray2 = [1, 34, "hi", true]
console.log(myArray2)

// Additional way to create a new instance of the Array object. 
var myArray3 = new Array()
var myArray4 = new Array(5) // 5 adds 5 slots in the array

console.log(myArray4)

myArray2.length // returns 4 because there are 4 items in the array
console.log(myArray2.length)

myArray2.sort() // Sorts the array alphabetically or numerically 
console.log(myArray2.sort())

myArray2.reverse() // Revereses the array
console.log(myArray2.reverse())

// There are many different methods that can be used in an Array