function fn() {
  this.name = "Jack";
}
const obj = { name: "Roy" };
fn.call(obj);
console.log(obj);
