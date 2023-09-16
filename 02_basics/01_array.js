// array 
const myArr = [0, 1, 2, 3, 4, 5, true, "Mangalam"] // valid

const numArr = [0, 1, 2, 3, 4, 5]

console.log(numArr[0]) // printing the element at 0th index 

// arrays in js are resizable, they can be mixed or can contain elements of the same type

// array copy operations create shallow copies - properties share the same reference 

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2.length) // 4

// array methods 
myArr2.push(5) // push to array - append operation 
myArr2.push(6)
myArr2.pop()
// unshift operation - push at start of the array  
myArr2.unshift(9)
// to delete 9, myArr2.shift()

console.log(myArr2)

console.log(myArr2.includes(9)) // boolean type return 
console.log(myArr2.indexOf(9)) // return -1 

const arr1 = [2, 4, 6, 8]
const newArr = arr1.join() // join adds all elements of an array into a string 

console.log(arr1)
console.log(newArr)
console.log(typeof newArr)

// slice, splice 

console.log("A", arr1)

// const myarr1 = arr1.slice(1, 3)
// console.log(myarr1) // prints 4, 6

const myarr1 = arr1.splice(1, 3)
console.log(myarr1) // prints 4, 6, 8 // original array is manipulated and the elements are deleted 
console.log(arr1) // 2 is printed and 4,6,8 are deleted from original array 
