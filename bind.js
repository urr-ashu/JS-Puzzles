function fn(a, b) {
  console.log(`I am ${this.name}`);
  console.log(a, b);
}

const bindedFn = fn.bind({ name: "Sam" }, 20, 30);

bindedFn(100, 200);
