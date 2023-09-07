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

