// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;

// this.name = "Shivraj";
// const obj = {
//   name: "John",
//   getName: function () {
//     return this.name;
//   },
//   getArrowName: () => {
//     return this.name;
//   },
// };

// const obj = {
//   name: "Alice",
//   printName: function () {
//     //   printName() {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   },
// };

// obj.printName();

// const obj = {
//   name: "Alice",
//   printName: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   },
// };

// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;

// Output:
// undefined
// ReferenceError: Cannot access 'b' before initialization

// this.name = "Shivraj";
// const obj = {
//   name: "John",
//   getName: function () {
//     return this.name;
//   },
//   getArrowName: () => {
//     return this.name;
//   },
// };

// console.log(obj.getName());
// console.log(obj.getArrowName());

// this.name = "sau";
// const obj = {
//   name: "saurabh",
//   getName: function () {
//     return this.name;
//   },
//   getArrorName: () => {
//     return this.name;
//   },
// };
// console.log(obj.getName());
// console.log(obj.getArrorName());

// const obj = {
//   name: "Alice",
//   printName: function () {
//     //   printName() {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   },
// };

// obj.printName();

// const obj = {
//   name: "saurabh",
//   printName: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   },
// };
// obj.printName();

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// console.log(foo());

// function foo() {
//   return "Hello";
// }

// console.log(bar());

// var bar = function () {
//   return "Hi";
// };

// console.log(dam());

// function dam() {
//   console.log("damn bro");
// }

// console.log(boom());

// boom = function () {
//   return boom;
// };

// console.log(typeof notDeclared);
// console.log(typeof declaredVar);

// var declaredVar = "Hello";

// console.log(typeof notDeclared); // ✅ still safe
// console.log(typeof declaredVar); // ❌ ReferenceError

// let declaredVar = "Hello";

// const obj = {
//   value: 10,
//   print: function () {
//     const arrowFunc = () => {
//       console.log(this.value);
//     };
//     arrowFunc();
//   },
// };

// obj.print();

// const obj = {
//   value: 10,
//   print: function () {
//     for (let i = 0; i < 3; i++) {
//       setTimeout(
//         function () {
//           console.log(this.value); // What is `this` inside this setTimeout?
//         }.bind(this),
//         1000
//       );
//     }
//   },
// };

// obj.print(); // ❌ What happens?

// "use strict";

// const obj = {
//   message: "Hello",
//   regularFunc: function () {
//     console.log(this.message);
//   },
//   arrowFunc: () => {
//     console.log(this.message);
//   },
// };

// obj.regularFunc();
// obj.arrowFunc();

// "use strict"; // Enabling strict mode

// const obj = {
//   message: "Hello",
//   regularFunc: function () {
//     console.log(this.message); // What happens to `this` in strict mode?
//   },
//   arrowFunc: () => {
//     console.log(this.message); // `this` should still be lexical, right?
//   },
// };

// obj.regularFunc(); // ❌ `undefined` in strict mode
// obj.arrowFunc(); // ❌ `undefined`

// class MyClass {
//   constructor(message) {
//     this.message = message;
//   }

//   printMessage() {
//     console.log(this.message); // `this` refers to the class instance
//   }

//   static staticPrint() {
//     console.log(this.message); // `this` refers to the class itself (not an instance)
//   }
// }

// const myObj = new MyClass("Hello, Class!");

// // Instance method
// myObj.printMessage(); // ✅ "Hello, Class!"

// // Static method
// MyClass.staticPrint(); // ❌ undefined (static method doesn't have an instance's `this`)

// for (var i = 0; i < 3; i++) {
//   (function (j) {
//     setTimeout(() => console.log(j), 1000);
//   })(i);
// }

// const person = { name: "John" };
// const anotherPerson = person;
// anotherPerson.name = "Doe";

// console.log(person.name);

// const original = {
//   name: "John",
//   address: {
//     city: "Delhi",
//     pin: 110001,
//   },
// };

// const shallowCopy = { ...original };

// // Change city in shallowCopy
// shallowCopy.address.city = "Mumbai";

// console.log(original.address.city); // Output: "Mumbai"
//
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }

//   static getStaticName() {
//     return this.name;
//   }
// }
// const user = new User("saurabh");
// console.log(user.getName());
// console.log(uer.getStaticName);

// sayHi();

// var sayHi = function () {
//   console.log("Hi");
// };

// let sayHi = function () {
//   console.log("hello");
// };
// sayHi();

// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log({} + {});

// function foo() {
//   console.log(1);
// }

// var foo = function () {
//   console.log(2);
// };

// foo();

// function regularFunction() {
//   console.log(arguments);
//   console.log(arguments[0]);
// }

// const arrowFunction = () => {
//   // console.log(arguments);
// };

// regularFunction(1, 2, 3);
// arrowFunction(4, 5, 6);

//that method
// const obj = {
//   name: "Alice",
//   print: function () {
//     const that = this;
//     function inner() {
//       console.log(that.name);
//     }
//     inner();
//   },
// };

//arrow function
// obj.print();
// const obj = {
//   name: "Alice",
//   print: function () {
//     const inner = () => {
//       console.log(that.name);
//     };
//     inner();
//   },
// };

// obj.print();

// ...

// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");

// setTimeout(() => console.log("timeout"), 2000);
// Promise.resolve().then(() => console.log("promise"));

// console.log(typeof null);
// // console.log(null instanceof Object);

// console.log(null instanceof Object);

// const { a, b } = { b: 2, a: 1 };
// console.log(a, b);

// function getNumber() {
//   return {
//     value: 5,
//   };
// }

// console.log(getNumber());
// function getNumber() {
//   return;
//   {
//     value: 5;
//   }
// }

// console.log(getNumber());

// const Person = (name) => {
//   this.name = name;
// };

// const p = new Person("John");
// console.log(p);

// function person(name) {
//   this.name = name;
// }

// const p = new person("saurabh");
// console.log(p);

// class person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// const p = new person("shgubham");
// console.log(p);

// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }
// // greet();
// // greet(undefined);
// greet(null);

// const a = 5;
// const b = 10;
// console.log(`The sum is ${a + b}` + 2);
// console.log(`The sum is ${a + b + 2}`);

// async function demo() {
//   console.log("Start");
//   setTimeout(() => console.log("Timeout"), 0);
//   await Promise.resolve();
//   console.log("End");
// }

// demo();
// console.log("Outside");

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// Promise.resolve(1)
//   .then((x) => x + 1)
//   .then((x) => {
//     throw new Error("Oops!");
//   })
//   .catch((err) => console.log(err.message))
//   .then((x) => console.log(x));

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   return `${this.name} makes a noise`;
// };

// const dog = new Animal("Dog");

// dog.speak = function () {
//   return `${this.name} barks`;
// };

// console.log(dog.speak());
// console.log(Animal.prototype.speak.call(dog));

// function Car(brand) {
//   this.brand = brand;
// }

// const myCar = new Car("Toyota");

// Car.prototype.getBrand = function () {
//   return this.brand;
// };

// console.log(myCar.getBrand());

// Car.prototype.getBrand = function () {
//   return "Unknown Brand";
// };

// console.log(myCar.getBrand());

// ============

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   setTimeout(() => console.log("C"), 0);
// }, 0);

// console.log("D");

// setTimeout(() => console.log("Timeout 1"), 0);
// Promise.resolve().then(() => console.log("Promise 1"));

// setTimeout(() => console.log("Timeout 2"), 0);
// Promise.resolve().then(() => console.log("Promise 2"));

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const increment = counter();
// increment();
// increment();
// increment();

// function createFunctions() {
//   let functions = [];

//   for (var i = 0; i < 3; i++) {
//     functions.push(() => console.log(i));
//   }

//   return functions;
// }

// const funcs = createFunctions();
// funcs[0]();
// funcs[1]();
// funcs[2]();

// function secret() {
//   let data = "hidden";

//   return {
//     getSecret: function () {
//       return data;
//     },
//     setSecret: function (newData) {
//       data = newData;
//     },
//   };
// }

// const obj = secret();
// console.log(obj.getSecret());
// obj.setSecret("exposed");
// console.log(obj.getSecret());

// let a = 1,
//   b = 2;
// [a, b] = [b, a];

// console.log(a, b);

// const person = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     zip: 12345,
//   },
// };

// const {
//   address: { city },
// } = person;
// console.log(city);

// const user = { name: "Bob" };

// const { name, age = 30 } = user;

// console.log(name, age);

// const obj = { x: 10, y: 20 };

// const { x: a, y: b } = obj;

// console.log(a, b);

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   return `${this.name} makes a noise`;
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// const dog = new Dog("Max", "Bulldog");

// console.log(dog.speak());
// console.log(dog instanceof Dog);
// console.log(dog instanceof Animal);

// Array.prototype.first = function () {
//   return this[0];
// };

// const arr = [10, 20, 30];
// console.log(arr.first());

// async function fetchData() {
//   throw new Error("Failed to fetch");
// }

// fetchData()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// async function run() {
//   const p1 = Promise.resolve("A");
//   const p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 1000));

//   console.log(await p1);
//   console.log(await p2);
// }

// run();

// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// async function asyncFunc() {
//   console.log(await "Async");
// }

// asyncFunc();

// console.log("End");

async function fetchUsers() {
  return new Promise((resolve) => setTimeout(() => resolve("Users"), 1000));
}

async function fetchPosts() {
  return new Promise((resolve) => setTimeout(() => resolve("Posts"), 2000));
}

async function fetchData() {
  const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
  console.log(users, posts);
}

fetchData();
