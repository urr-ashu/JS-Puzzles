//VARIABLE SHADOWING ???
let a = 1;

const fn = () => {
  let a = "Hello world!";
  console.log(a);
};

fn();
