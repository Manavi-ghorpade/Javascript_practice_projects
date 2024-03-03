console.log('javascript');
var number = 10;
var string ='hello there';
var bool = true;

document.getElementById('box').innerHTML+=string;

//document.getElementById('box').style.fontSize="35px";

//hide HTML element using JS
// document.getElementById('box').style.display='none';

//showing HTML element using JS
document.getElementById('box').style.display='block';

//turn light on when clicked on button
document.getElementById('turnonbutton').addEventListener('click', function(){
    document.getElementById('myimage').src='download (1).png'
})

//turn light off when clicked on button
document.getElementById('turnoffbutton').addEventListener('click', function(){
    document.getElementById('myimage').src='download.png'
})
//if - else statemnt - same as c++
var a = ['lol','man','cat'];
// for(var i=0;i<a.length;++i)
// {
//     console.log(a[i]);
// }

function list(){
    for(var i=0;i<a.length;++i)
    {   
    console.log(a[i]);
    }
}

list();

//event listenser - whenevr user clicks something
document.getElementById('box').addEventListener('click',function(){
    alert('I got clicked');
})


//four types to display text in js
//1.console.log 2.alert 3.document.write(5+7) 4.innerHTML

//print page use
//window.print()
//<button onclick="window.print()">Print this page</button>

//create variables - let, var , const
//var - global scope, let - specific block, const - constant
//use var - to support old browers 
//can not re-declare variable with let and const in same block
//$ and _ is valid variable name in JS

//block - {}

//constant array - with const variable
//const cars = ["audi","ford"]
// You can change an element:
// cars[0] = "Toyota";
// You can add an element:
// cars.push("Audi");
// But you can NOT reassign the array:
// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR

//constant object
// You can create a const object:
// const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
// car.color = "red";
// You can add a property:
// car.owner = "Johnson";

//If you add a number and a string, the result will be a string!

//js 8 datatypes - number, string, bigint, boolean, null, symbol, UNDEFINED(VARIABLE without value), object
//object has - an object, array , date 
// Date object:
const date = new Date("2022-03-25");

// JavaScript has dynamic types. This means that the same variable can be used to hold different data types

// Javascript numbers are always one type:
// double (64-bit floating point).
//BigInt -  store integer values that are too big to be represented by a normal JavaScript Number.

//javascript events 
function date1(){
    document.getElementById("but1").innerHTML = Date();
}

//template strings 
let s = `  Hello I'am "Manavi"`; //allow double and single quote inside strings, allow multiline string
//find length of string
let length = s.length;
document.getElementById("box").innerHTML = length;

//get string char using
let char = s.charAt(0);
let char1 = s.at(0);
let char2 = s[2];

//string methods -------
// All string methods return a new string. They don't modify the original string.
//string slicing
//slice(start,end)
//substring(start,end)
//substr(start,length)
let part = s.slice(0,5);
//if negative count from back
let part1 = s.slice(-12);
//  substring is same as slice values less than 0 are treated as 0
// substr - same as slice , The difference is that the second parameter specifies the length of the extracted part.
//upper case
s.toUpperCase();
s.toLowerCase();
s.concat(" ", "abc");
//trim removes white spaces from both sides of string
s.trim();
s.trimStart(); //remove white space from start
s.trimEnd(); //remove white space from end
let result = s.repeat(2); //return string repeated 2 times as s
//replace - The replace() method replaces a specified value with another value in a string:
let text = document.getElementById("box").innerHTML;
document.getElementById("box").innerHTML = text.replace("21","W3Schools"); //replace first match only
//replace all replace all words  text.replaceAll("21","W3Schools")
//split- A string can be converted to an array 
s.split(",") //split on comma

//string searching -------
let text1 = "Please locate where 'locate' occurs!";
let index= text1.indexOf('locate') //return first occurance or return -1 
text1.search("locate");
//same match and matchall- return array of match
//includes - return true or false
//The startsWith() method returns true if a string begins with a specified value.
//The endsWith() method returns true if a string ends with a specified value.

//NaN is a JavaScript reserved word indicating that a number is not a legal number.
//You can use the global JavaScript function isNaN() to find out if a value is a not a number
//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
//you can use the toString() method to output numbers from base 2 to base 36.
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);


//js number methods
// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// ValueOf()	Returns a number as a number
Number("10"); //The Number() method can be used to convert JavaScript variables to numbers:
parseInt("10.33"); //parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
parseFloat("10 years"); //parseFloat() parses a string and returns a number Spaces are allowed. Only the first number is returned:
Number.isInteger(10); //method returns true if the argument is an integer.
//Number.parseFloat() parses a string and returns a number.
//Number.parseInt() parses a string and returns a whole number.
// /Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
let x = Number.MAX_VALUE; //These properties can only be accessed as Number.MAX_VALUE.
//let x = Number.MIN_VALUE;
//Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
let y = Number.NaN; //NaN is a JavaScript reserved word for a number that is not a legal number.


//array - you can have variables of different types in the same Array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); //toString() converts an array to a string of (comma separated) array values.
//cars.length   // Returns the number of elements
// cars.sort()   // Sorts the array
let len = fruits.length;
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits, Adding elements with high indexes can create undefined "holes" in an array:
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.
fruits.pop(); //The pop() method removes the last element from an array
fruits.push("Kiwi"); //The push() method adds a new element to an array (at the end)
fruits.shift(); //The shift() method removes the first array element and "shifts" all other elements to a lower index.
fruits.unshift("Lemon"); //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
delete fruits[0]; //Using delete() leaves undefined holes in the array.Use pop() or shift() instead.

const myGirls = ["Cecilie", "Lone"]; 
const myBoys = ["Emil", "Tobias", "Linus"];//the concat() method does not change the existing arrays. It always returns a new array.
const myChildren = myGirls.concat(myBoys); //The concat() method creates a new array by merging (concatenating) existing arrays

const myArr = [[1,2],[3,4],[5,6]]; //The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const newArr = myArr.flat();

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; //Slice out a part of an array starting from array element 3 ("Apple"):
const citrus = fruits.slice(3); //The slice() method does not remove any elements from the source array. //Apple,Mango

//Array Search
let position3 = fruits.indexOf("Apple") + 1; 
let position4 = fruits.lastIndexOf("Apple") + 1;
fruits.includes("Mango"); // true or false

//array sort
fruits.sort(); //The sort() method sorts an array alphabetically
fruits.reverse(); //The reverse() method reverses the elements in an array
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted(); //toSorted() method as a safe way to sort an array without altering the original array.
const rev = months.toReversed(); //toReversed() method as a safe way to reverse an array without altering the original array.
