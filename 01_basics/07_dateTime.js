// date and time 

let myDate = new Date()

console.log(myDate) // 2023-09-13T05:27:58.654Z
console.log(myDate.toDateString()) // Wed Sep 13 2023
console.log(myDate.toISOString()) // 2023-09-13T05:30:05.527Z
console.log(myDate.toJSON()) // 2023-09-13T05:30:05.527Z
console.log(myDate.toLocaleDateString()) // 9/13/2023

console.log(typeof myDate) // object 

let myCreatedDate = new Date(2023, 0, 20) // passing custom date 
// months in js start from 0
console.log(myCreatedDate.toDateString()) // Fri Jan 20 2023

let myCreatedDate1 = new Date(2023, 0, 20, 6, 9) // passing time arguments 
console.log(myCreatedDate1.toLocaleString()) // 1/20/2023, 6:09:00 AM

// passing custom date in MM-DD-YYYY
let myCreatedDate2 = new Date("12-09-2023")
console.log(myCreatedDate2.toDateString()) // Sat Dec 09 2023

let myTimeStamp = Date.now()

// console.log(myTimeStamp) // 1694583683240 -> milliseconds from 1970
// console.log(myCreatedDate.getTime()) // returns time in milliseconds 

console.log(Math.floor(Date.now()/1000)) // to get in seconds

let newDate = new Date()
console.log(newDate); 
console.log(newDate.getMonth()+1); // 9 // it originally returns 8 but september is 9th month for the user 
console.log(newDate.getDay()); // 3 // wed

// customising format 
console.log(newDate.toLocaleString('default', {
    weekday: "long", 
})
) // prints wednesday