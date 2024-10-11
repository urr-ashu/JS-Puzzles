//NEW keyword in JS

function myFn(name, rollNo) {
  //   this.name = name;
  //   this.rollNo = rollNo;
  return { name, rollNo };
}

const obj = new myFn("Roy", 12);

console.log(obj);
