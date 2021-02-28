// Syntax

const promise = new Promise((resolve, reject) => {
  // promise description
});

// How to use

const promise = new Promise(
  (reslove) => {
    setTimeout(() => {
      reslove("I'm a promise !");
    }, 5000);
  },
  (reject) => {
    console.log(" :( :( ");
  }
);

promise.then((value) => {
  console.log(value);
});
