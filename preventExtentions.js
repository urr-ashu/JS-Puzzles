const obj = { a: 1, b: 2 };
Object.preventExtensions(obj);
obj.c = 3;
delete obj.a;
obj.b = 55;
console.log(obj);
