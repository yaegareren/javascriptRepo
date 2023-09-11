// Javascript is a dynamically typed language. We do not define datatypes while declaring variables
/*
PRIMITIVE 
they are of 7 types
String 
Number 
Boolean 
Null
Undefined 
BigInt 
Symbol - used to make values unique

*/
const score = 100
const scoreValue = 100.3 // this is also categorized as number 

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined 

// DEFINING SYMBOL
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false because symbol makes them unique

const bigNumber = 123456785039345n // bigInt


/*
REFERENCE (NON PRIMITIVE)
Arrays
Objects
Functions 
*/

const heroes = ["ironMan", "batMan", "spiderMan"] // array

let myObject = {
    name: "ShreeMangalam", 
    age: 21, 
}

// function 

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof scoreValue) // Number 
console.log(typeof myFunction) // Function 

// Stack or Heap Memory 
/*
Stack - Primitive 
Heap - Non Primitive 

Primitive values are stored in stack and while accessing we receive a copy from stack but inside heap, we get referenced values. Changes made also affect the original value. 
*/