// singleton - an object that is made through constructor
// Object.create can be used to create an object, a singleton is formed

// object literals
// defining objects

const mySym = Symbol("key1");
const JsUser = {
  name: "Mangalam",
  "full name": "Shree Mangalam Singh",
  age: 21,
  [mySym]: "mykey1",
  location: "Ranchi",
  email: "shreemangalam48@gmail.com",
  isLoggedIn: false,
  lastLoggedinDays: ["Monday", "Saturday"],
};

// accessing objects
// console.log(JsUser.email)
// console.log(JsUser["email"])

// using square notation is a better option
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); // symbol printing

JsUser.email = "shreemangalam29@gmail.com";
console.log(JsUser["email"]);

Object.freeze(JsUser); // values cannot be changed once freeze method is applied
console.log(JsUser);
