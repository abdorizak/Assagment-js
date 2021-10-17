/*  Q1 Create object 
    Create object using object literal syntax. Object should have at least 2 properties.
    Create another using the keyword “new”. Object should have at least 2 properties. - Use the “delete” keyword to remove a property.
    Convert the object to Array.
*/

const Food = {
    FoodName: "Bariis",
    quantity: 10,
    price: 20
};

// using delete keyword
delete Food.quantity
console.log(Food)

// or use keyword new

const SomaliFood = new Object();

SomaliFood.fName = "canjeero";
SomaliFood.rate = "⭐️⭐️⭐️⭐️"

console.log(SomaliFood);

// convertToArray
const convertToArray = Object.keys(Food) // also you can use Object.value it converts the as this ['bariis',10,20]
const convertToArray = Object.values(Food)
console.log(convertToArray)

/*
    Q2: Create object constructor
    Create an object constructor named “Person”.
    It should that take “firstName, lastName, yearBorn”.
    It should have a method called “age” that returns “2021- the yearBorn”. 
    Create instance of the object.
    Call the age method.
*/

function Person(firstName, lastName, yearBorn) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearBorn = yearBorn;
  this.age = function () {
    console.log("Your age is:", 2021 - yearBorn);
  };
}

let cali = new Person("cali", "axmed", 1998);
cali.age();
console.log(cali);

// Q3: Create a function expression and store it in a variable

const x = function (a,b) { return a + b }

console.log(x(1,2));

// Q4: Create a self-invoking function that prints out something

(function () {
  console.log("This is a self-invoking function");
})();

// Q5: Create an arrow function and store it in a variable

let sum = (x, y) => {
  return x + y;
};

// console.log(sum(1,2));

// Q6: Declare a function that takes (a,b)

function mult(a,b=5){
    return a*b
}
console.log(mult(3))

// Q7: Create a class called “Vehicle”

class Vehicle {
  constructor(name, type, year) {
    this.name = name;
    this.type = type;
    this.year = year;
  }
  move() {
    console.log("moving");
  }
  stop() {
    console.log("stopping");
  }
}

let myVehicle = new Vehicle("BMW", "Modal 3", 2009);
console.log(myVehicle);
myVehicle.move();
myVehicle.stop();

// Q8: Create a class called “Plane” and inherits “Vehicle”

class Plane extends Vehicle {
  constructor(name, type, year) {
    super(name, type, year);
  }

  fly() {
    console.log("flying");
  }
  land() {
    console.log("landing");
  }
}

// Q9 creating instance of Plane class
let myPlanne = new Plane("G3x", "Modal 7", 2011);
console.log(myPlanne);
myPlanne.fly();
myPlanne.land();
