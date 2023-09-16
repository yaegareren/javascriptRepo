const heroes = ["Thor", "Ironman", "Spiderman"]
const dcheroes = ["Batman", "Flash", "Superman"]

/*
heroes.push(dcheroes)
console.log(heroes)
// output : [ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'Flash', 'Superman' ] ]
console.log(heroes[3][1]) // flash 

*/

// const merge = heroes.concat(dcheroes)
// console.log(merge)
// // merges two arrays into a separate new array 

// SPREAD OPERATOR - BETTER OPTION 

const mergeHeroes = [...heroes, ...dcheroes]
console.log(mergeHeroes)

const mixNumArray = [1, 2, [3, 4], [5,6,7,8], 9]
const flatArray = mixNumArray.flat(3) // flattens the array 
console.log(flatArray)
// can also use infinity in place of 3 

console.log(Array.isArray("Mangalam")) // false 
console.log(Array.from("Mangalam"))
console.log(Array.from({name: "shree"})) // empty array - sending an object, we need to specify if we want an array of keys or values 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]

