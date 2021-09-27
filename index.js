// Q1: Comment Your JavaScript code.
//  this is single Line comment
/* 
    this is multi-line comment
*/

// Q2: Declare 3 JavaScript variables using all different keywords for declaring a variable, and store any values.
// var x = 1;
// let y = 10;
// const z = 5;

// Q3: Declare a function with:
function sum(x, y) {
  if (typeof x === "number" && typeof y === "number") return x + y;
  else console.log("Error: Invalid number please insert a number");
}

let today = new Date().getDay();
// sun, mon, tus, wed, thus, frid, sat
//switch
// switch (today) {
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thusday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//     default:
//         break;
// }
// if statement
// if (today == 0) {
//   console.log("sunday");
// } else if (today == 1) {
//     console.log("Monday")
// } else if (today == 2) {
//     console.log("Tuesday")
// } else if (today == 3) {
//     console.log("Wednesday")
// } else if (today == 4) {
//     console.log("Thusday")
// } else if (today == 5) {
//     console.log("Friday")
// } else if (today == 6) {
//     console.log("Saturday")
// }

//Q5: Using all ‘for loop’ and ‘while loop’ and ‘do while loop’, print from 0 to 10.
// this is For loop
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }
// this is while loop
// let x = 0;

// while (x < 10) {
//   console.log(x);
//   x++;
// }

// do {
//   console.log(x);
//   x++;
// } while (x < 10);

//Q6: Create array with at least 5 values

// const arr = ["Ahmed", "Cabdi", "Mohamed", "xassan", "Farah", "Aniso", "Najmo"];

// for (item of arr) {
//   console.log(item);
// }

// Q7: Create an object with at least 5 key/value pairs

// const person = {
//   name: "Ali Abdi",
//   age: 18,
// };

// for (item in person) {
//   console.log(item, person[item]);
// }

// Q8: Create an array with at least 5 values

const arr = ["Ahmed", "Cabdi", "Farah"];

// let arry = arr.toString()
// let arry = arr.join(" ")
// let arry = arr.shift()
// console.log("this was removed form the array: ", arry ,"\n", arr)
// let arry = arr.reverse()
// let arry = arr.pop()  //it removes the last element in array
// let arry = arr.push("Amino") // push makes appending
// let arry = arr.unshift("Abdirahman") // unshift insert element in first index of array
// console.log(arry)

// Q9: Create a ‘car’ object with ‘drive’ & ‘stop’ methods
const car = {
  name: "BMW",
  start: function () {
    console.log("car started");
  },
  drive: function () {
    console.log("car drived");
  },
  stop: function () {
    console.log("car stoped");
  },
};

car.start();
car.drive();
car.drive();

function throwError() {
  throw Error("Kaboom");
}

try {
  throwError();
} catch (error) {
  console.error(error);
}
