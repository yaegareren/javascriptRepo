/* 
let score = "33"
console.log(typeof score)

let valueNumber = Number(score)
console.log(typeof valueNumber)

// for null it is 0
// for undefined is Nan
// for string that cannot be converted into a number, we get Nan 
// "33abc" -> Nan, however typeof Nan is number 
// true -> 1 and false -> 0

let isLoggedIn = 1

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn)

// conversion from 1 to true 
// for empty string it is false 

let randomNumber = 33
 
let stringNum = String(randomNumber)

console.log(typeof stringNum)
// conversion from number to string 

*/

// --------------- OPERATIONS ----------------

let value = 3 
let negValue = -value
console.log(negValue) // -3

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%3)
console.log(2**2)

let str1 = "Shree"
let str2 = " Mangalam"

let str3 = str1 + str2
console.log(str3)

console.log("1"  + 2) // 12
console.log(1  + "2") // 12
console.log("1"+2+2) // 122
console.log(1+2+"2") // 132
console.log(+true) // 1

let counter = 100
++counter; // 101
counter++ // 102
