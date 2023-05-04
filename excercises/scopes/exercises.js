"use sctrict";
function test1() {
  let a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log("a =" + a);
}

test1();

//answer a = 7

function test2A() {
  if (1 == 1) {
    var a = 5;
  }
  console.log("a = " + a);
}
test2A();
//answer a = 5
//function test2A() { ... } defines a function test2A.
//if (1 == 1) { var a = 5; } declares a variable a with a value of 5 inside an if statement.
//Note that var is used here to declare the variable, which has a function scope rather than a block scope
//(i.e. the variable is accessible from within the whole function).
//console.log("a = " + a); logs "a = 5" to the console, as it is
//referencing the a variable inside the function scope.
//Since the if statement is true, the variable a is assigned a value of 5 and then printed to the console,
//as it's accessible from within the function scope.

let a = 4;
function test3() {
  a = 3;
  console.log("a = " + a);
}
test3();
console.log("a = " + a);

// answer a = 3
//let a = 4; declares a variable a with a value of 4 in the global scope.
//function test3() { ... } defines a function test3.
//a = 3; changes the value of the global a variable to 3.
//console.log("a = " + a); logs "a = 3" to the console, as it is referencing
//the global a variable (which was changed to 3 in step 3).
//test3(); calls the test3 function.
//console.log("a = " + a); logs "a = 3" to the console, as it is referencing
//the global a variable (which was changed to 3 inside the test3 function).

let b = 4;
function test4() {
  let b = 7;
  console.log("b = " + b);
}
test4();
console.log("b = " + b);

// answer b = 7 b = 4
//let b = 4; declares a variable b with a value of 4 in the global scope.
//function test4() { ... } defines a function test4.
//let b = 7; declares a new variable b with a value of 7 in the local scope of the test4 function.
//console.log("b = " + b); logs "b = 7" to the console, as it is referencing
//the b variable in the local scope of the test4 function.
//test4(); calls the test4 function.
//console.log("b = " + b); logs "b = 4" to the console, as it is referencing the b variable
//in the global scope (which was not changed after the test4 function was called).

let c = 4;
function test5() {
  c = 7;
  function again() {
    let c = 8;
    console.log("c = " + c);
  }
  again();
  console.log("c = " + c);
}
test5();
console.log("c = " + c);

//answer c = 8 c = 7 c=7
// We start by setting c to 4.
//Then we define a function called test5.
//Inside test5, we change c to 7.
//We define another function called again,
//where we create a new variable called c and set it to 8.
//We print out the value of c, which is 8, because we're looking
//at the c variable inside the again function.
//We go back to the test5 function and print out the value of c again,
//which is 7 now, because we changed it earlier.
//We call the test5 function, which runs all the code inside it.
//Finally, we print out the value of c one more time,
//which is still 7 because we didn't change it again
// do to let the 8 goes 1st
// run the information in { } 1st then run the codes outside

let d = 4;
function test6() {
  let d = 7;
  function again() {
    let d = 8;
    console.log("d = " + d);
  }
  again();
  console.log("d = " + d);
}
test6();
console.log("d = " + d);

//answer d = 8, d =7 d = 4
// when `test6()` function is called, it sets the value of `d` to use 7 using `let d = 7;`
// the `again()` function is then called, to sets the value of `d` to 8 using `let d = 8;`
// 'console.log()` statement inside the `again()` function will then output `d = 8`
// the again() function is executed, control returns to the test6() function,
// which then outputs d = 7 using the console.log() statement.
// the console.log() statement outside of the test6() function will output d = 4,
// which is the original value of a before the function was called.
