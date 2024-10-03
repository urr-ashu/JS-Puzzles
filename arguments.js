function fn() {
  //without recieving arguments
  //Print all the values passed to fn - 1,2,3
  console.log(...arguments);
}

fn(1, 2, 3);
