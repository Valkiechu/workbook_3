"use strict";

//let name = "Brenda Kaye";
//let positionOfSpace = name.indexOf(" ");

//let firstName = name.substring(0, positionOfSpace);
//console.log("First Name: " + firstName);
//let lastName = name.substring(positionOfSpace + 1);
//console.log("Last Name: " + lastName);

function parseAndDisplayName(name) {
  let positionOfSpace = name.indexOf(" ");
  console.log(positionOfSpace);

  let firstName = name.substring(0, positionOfSpace);
  console.log("First Name: " + firstName);
  let lastName = name.substring(positionOfSpace + 1);
  console.log("Last Name: " + lastName);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
