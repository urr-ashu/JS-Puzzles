var name = "Roy";
function fn(age1, age2) {
  console.log(`Hi I am ${this.name}`);
  console.log(`My age is ${age1} ${age2}`);
}

fn.apply({ name: "Jason" }, [20, 10]);
