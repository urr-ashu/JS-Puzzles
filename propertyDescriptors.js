const obj = { name: "Roy", age: 20 };
// console.log(Object.getOwnPropertyDescriptors(obj));
//configurable
Object.defineProperty(obj, "name", {
  configurable: false,
});
obj.name = "Jack";
delete obj.name;
obj.age = 30;
obj.gender = "Female";
console.log(obj); //Jack

Object.defineProperty(obj, "name", {
  enumerable: false,
});
