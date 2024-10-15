const obj = { name: "Roy", age: 20 };

// console.log(Object.getOwnPropertyDescriptors(obj));

//enumerable - loop
Object.defineProperty(obj, "name", {
  enumerable: false,
});

for (const key in obj) {
  console.log(key);
}
console.log(Object.keys(obj));

// //writable
// Object.defineProperty(obj, "name", {
//   enumerable: true,
//   writable: false,
// });
// obj.name = "Jack";
// console.log(obj.name); //Roy
// for (const key in obj) {
//   console.log(key);
// }
// //configurable
// Object.defineProperty(obj, "name", {
//   enumerable: true,
//   writable: false,
//   configurable: false,
// });

// delete obj.name;
// obj.age = 30;
// obj.gender = "Female";
// console.log(obj); //Roy

// Object.defineProperty(obj, "name", {
//   enumerable: false,
// });
