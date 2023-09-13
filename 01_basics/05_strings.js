// can be denoted with either single or double quotes

// adding two strings
console.log("hello"+" world") 

const name = "Shree Mangalam"
const lastName = "Singh"
// outdated
// console.log(name+lastName)

// modern syntax // also known as string interpolation
console.log(`Hello, my name is ${name} ${lastName}`)

const gameName = new String("Spiderman") // key value pair

console.log(gameName[0])
console.log(gameName.__proto__) // return an empty object 

console.log(gameName.length) 
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5)) // prints r 
console.log(gameName.indexOf('r')) // prints 5 

const heroName = "Iron-Man"
console.log(heroName.substring(0, 5)) // Iron-

console.log(heroName.split('-')) // [ 'Iron', 'Man' ]

const heroName1 = heroName.slice(-8, 4)
console.log(heroName1) // Iron

const newStringOne = "   Shree     "
// to remove unnecessary spaces
console.log(newStringOne.trim()); 

// using replace 
const url = "https://mangalam.com"
console.log(url.replace('mangalam', 'phalak'))

console.log(url.includes('phalak')) // returns true