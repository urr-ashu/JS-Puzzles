//6
fn();
function fn() {
  console.log("Function is hoisted first");
}
var fn = function () {
  console.log("Variable is hoisted first");
};
