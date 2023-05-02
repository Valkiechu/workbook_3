let globalVariable = `global`;

function myFirstFunction(params) {
  console.log(`Global ${globalVariable}`);
}

function mySecondFunction(params) {
  console.log(`Global ${globalVariable}`);
}

myFirstFunction();
mySecondFunction();

console.log(globalVariable);

// all code will work due to it being global

function myFirstFunction(params) {
  let functionVariable = `funcation var`;
  console.log(`Global ${globalVariable}`);
  console.log(`Function ${functionVariable}`);
  // console/log(`Function ${secondFunctionVariable}`); // not defined

  if(true){
    let blockVariable = `block var`;
    console.log(`Block ${blockVariable}`)
  }
  //     console.log(`Block ${blockVariable}`) // not defined

}




function mySecondFunction(params) {
  let secondFunctionVariable = `second funcation var`;
  console.log(`Global ${globalVariable}`);
  // console.log(`Function ${functionVariable}`); // not defined
  console.log(`Function ${secondFunctionVariable}`);
}
console.log(globalVariable);
