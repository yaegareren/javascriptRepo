// numbers and math 

// const score = 400 // js automatically detects this as a number 

// const balance = new Number(100) // fixed number declaration
// console.log(balance)

// console.log(balance.toString().length); 

// const floatAmount = 100.34563
// console.log(floatAmount.toFixed(2)) // 100.35

// const floatNumber = 456.6441
// console.log(floatNumber.toPrecision(3)) // 457

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) //separates it by using comma according to Indian standards, by default it is US standard

// MATHS 

console.log(Math) // returns an object with multiple properties 

console.log(Math.abs(-4)) // returns 4 

console.log(Math.round(4.7567)) // returns 5

console.log(Math.ceil(4.2)) // returns 5

console.log(Math.floor(4.9)) // returns 4

console.log(Math.round(Math.sqrt(88))) // returns 9 after being rounded 

console.log(Math.min(4, 3, 6, 8, 2)) // 3
console.log(Math.max(4, 3, 6, 8, 2)) // 8

// generating a random number 
// Math.random() gives value between 0 and 1 

console.log(Math.floor(Math.random()*10) + 1) // generates  values between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min)