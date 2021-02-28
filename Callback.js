// callback
function callback(name) {
  console.log("hello " + name);
}

// outer function

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callback);
