//4
let flag = true;

setTimeout(() => {
  flag = false;
}, 1);

while (flag) {
  console.log("Hi");
}
