function first() {
  setTimeout(() => {
    console.log("first function called !!");
  }, 5000);
}

function second() {
  console.log("second function called");
}

first();
second();
