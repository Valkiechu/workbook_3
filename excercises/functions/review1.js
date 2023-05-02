"use strict";
function greeting(name) {
  //name = perameter.. greeting takes a name parameter
  return `Hello ${name}`;
  // when you return the function you catch the value
}

let firstName = "Ethan";
let lastName = "Qiu"
// calling/invoking greeting function and pass the fistName arguement
// catching and assigning the return value of the function into the message variable
let message = greeting(firstName, lastName);
console.log(message);
