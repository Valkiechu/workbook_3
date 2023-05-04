function parseAndDisplayName(name) {
  let positionOfSpace = name.indexOf(" ");


  let firstName = name.substring(0, positionOfSpace);
  console.log("First Name: " + firstName);
  let lastName = name.substring(positionOfSpace + 1);
  console.log("Last Name: " + lastName);
  
}

parseAndDisplayName("Cher ");
parseAndDisplayName("Brenda Kaye ");
parseAndDisplayName("Dana Lynn Wyatt ");
