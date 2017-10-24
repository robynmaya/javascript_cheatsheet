/*    |	Scope 		|   Reassignable     | Mutable     | Temporal Dead Zone
------------------------------------------------------------------------
const | Block 		|	No           |	Yes	   |	Yes
var   |	Function 	|	Yes	     |	Yes	   |	No
let   |	Block		|	Yes	     |	Yes	   |	Yes

*/

/* VAR 

var is functioned scoped and variables defined in the function
CAN NOT be accessed from its outer function. 
But variables can be accessed from its inner function. 

Children scoped variables can USE its parents variables. 
Parents can not use its children variables - because children like to keep secrets :D


>> Var and Hoisting 

Hoisting is when a variable declaration set upfront at the beginning of function execution 
while its assignment or value initialization will be done later, 
when the execution reaches the statement

>> Example for Hoisting : */

console.log(myDog) // undefined -- but no error raised
var myDog = 2; // although the assignment happens after the variable gets called

// basically it is the same like :

var myDog;
console.log(myDog); // undefined
myDog = 2;


// Var is Function-Scoped

function myFunction(){
	var myVar = "Noodles";
	console.log(myVar) // works! Same scope
}

console.log(myVar) // ReferenceError, the child is too shy! Variables can not be accessed outside the function

// More subtle example

function myFunction() {
  var myVar = "Noodles";
  if (true) {
    var myVar = "Woof!";
    console.log(myVar); // "Woof!"
    // actually, myVar being function scoped, we just erased the previous myVar value "Noodls" for "Woof!"
  }
  console.log(myVar); // "Woof!" - see how the instructions in the if block affected this value
}
console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function.

// Var can be redeclared

var myVar = 2;
var myVar = 3;

console.log(myVar) // 3

/* LET

Let declared variable are block scoped, can not be redclared in the same scope

*/

function myFunction() {
  let myVar = "Noodles";
  if (true) {
    let myVar = "Woof!";
    console.log(myVar); // "Woof!"
    // with let myVar being block scoped, we just created a new variable called myVar
  }
  console.log(myVar); // "Noodles", it then access the same scoped variable where console log is invoked
}
console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function.


// Let is not hoisted 

console.log(myDog); // a ReferenceError!
let myDog = "Noodles"; // because the assignment happens after the variable gets called

// Let can not be redeclared 
let myVar = 2;
let myVar = 3;

console.log(myVar) // SyntaxError: Duplicate declaration

/* CONST 

const variables can not be reassigned and redeclared 

*/

const dog = "Noodles";
dog = "Meow" // error - reassignment is not allowed

const dog = "Noodles";
const god = "Meow"; // error - redeclaration is not allowed

// BUT! const object and array are mutable! 

// For objects:

const dog = {
  name: 'Noodles'
};

dog.name = 'Meow' // this will work ! dog variable is not completely reassigned, but mutated
console.log(dog.name) // "Woof"

dog = "Noodles" // raises an error, because reassignment is not allowed with const declared variables

// For arrays:

const dogs = [];
dogs.push('Pillow'); // this will work ! dogs array is not completely reassigned, but mutated
console.log(dog[0]) // "Pillow"
dogs = ["Noodles"] // raises an error, because reassignment is not allowed with const declared variables

