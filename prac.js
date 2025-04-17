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

const obj = {
  name: "Alice",
  printName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};
