// const tinderUser = {} ; // non-singleton object
const tinderUser = new Object(); // singleton object

tinderUser.id = "abc123";
tinderUser.name = "Phalak";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    firstname: "Phalak",
    lastname: "Taneja",
  },
};

// console.log(regularUser.fullname.lastname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {obj1, obj2} // object inside object
const obj3 = Object.assign({}, obj1, obj2); // = {...obj1, ...obj2}
console.log(obj3);

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

// output in form of an array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

const course = {
  coursename: "js-classes",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

console.log(instructor);
