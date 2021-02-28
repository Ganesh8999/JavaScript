// call()

var employee1 = { firstName: "Ganesh", lastName: "Singh" };
var employee2 = { firstName: "Divya", lastName: "Gupta" };

function invite(greeting1, gretting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + " " + gretting2
  );
}

// call() for comma separated list
invite.call(employee1, "Hello", "How are you ?");
invite.call(employee2, "Hello", "How are you ?");

// apply() takes [] for list of arguments
invite.apply(employee1, ["Hello", "Where are you ?"]);
invite.apply(employee1, ["Hello", "Where are you ?"]);

// bind() creates a new function
var inviteEmp1 = invite.bind(employee1);
var inviteEmp2 = invite.bind(employee2);

inviteEmp1("Hi", "Whatsup ?");
inviteEmp2("Hi", "Whatsup ?");
