var myString = "I am a string";
var newString = 'I\'m a "new" ninja string with escape characters';

console.log(myString)
console.log(newString)
console.log(myString.length) // how many characters
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("I")); // index of specific character in string

if (newString.indexOf("ninja") === -1 ) {

    console.log("the word ninja is not in the string")

} else {

console.log("the word ninja starts at position " + newString.indexOf("ninja"))

}

// Comparing strings 

var string1 = "abc"
var string2 = "bcd"
var string3 = "abc"

console.log(string1 === string2)
console.log(string1 === string3)

// Splicing strings

var str = "hello, world";
console.log(str);

var str2 = str.slice(2, 9); //logs: llo, wo
console.log(str2);

var str3 = str.slice(2); //logs llo, world
console.log(str3);

// Splitting Strings

var tags = "meat, ham, salami, pork, beef, chicken";
console.log(tags)

var tagsArray = tags.split(",")
console.log(tagsArray)