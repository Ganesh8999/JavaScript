function welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + "  " + name);
  };

  return greetingInfo;
}

var myFunction = welcome("Ganesh Singh");
myFunction("Hello");
