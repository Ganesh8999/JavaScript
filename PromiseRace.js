var promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

var promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // both will resolve but 2nd one is fast.
});
