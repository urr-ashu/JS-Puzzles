function wrp() {
  return () => {
    console.log(this.name);
  };
}

const obj = { name: "Roy" };

wrp.call(obj)();
