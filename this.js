function fn() {
  console.log("name is " + this.name);
}
const obj1 = {
  name: "Max",
  fn: fn,
};
var name = "Roy";
obj1.fn();
fn();
