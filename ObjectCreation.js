// I)  Object constructor:
// The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.
var object = new Object();

// II) create()
var object = Object.create(null);

// Object litersl syntax
var object = {};

// III) function contstructor
function Emplpoyee(name) {
  var object = {}; // similar to literl syntax
  object.name = name;
  object.age = 24;

  return object;
}

// IV) function contstructor with prototype
function Employee() {}
Employee.prototype.name = "Ganesh Singh";
var object = new Employee();

// same like above
function func() {}

new func(x, y, z);

// OR

// just create new instance using create()  with function prototype
//see
var newInstance = Object.create(func.prototype);

// calling the function
var result = func.call(newInstance, x, y, z);

// if the result is not null then we can use it otherwise use new instance
console.log(result && typeof result === "object" ? result : newInstance);

// vii) new ES6 synstax for object creation
class Employee {
  constructor(name) {
    this.name = name;
  }
}

var object = new Employee("Ganesh Singh");

// VIII) using singleton pattern
var object = new (function () {
  this.name = "Ganesh Singh";
})();
