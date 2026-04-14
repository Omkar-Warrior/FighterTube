// Three Types of Variables :->    Var(ES5), let(ES6), Const(ES6)

var a=6

// Old and risky
// Function Scoped
function Var() {

    if(a>0){
        var a=8 
    }

    // We can access Var=a here because var is function scoped and in Var() we can access it anywhere
}

// Can be redeclared and reassigned
var a=9   // No Error its allowed in js


// Hoisted to the top with undefined  value

// Hoisting = JavaScript prepares memory before running code.
// It moves all declarations to the top — this is called hoisting

console.log(a)  // Output -> Undefined

var a=10 // this will convert into var a=undefined and a=10








// let -> Modern and Safe
// block scope {}
// we can reassign it but not redeclared

console.log(age) // Cannot access 'age' before initialization  // Reference Error

// This area from console.log(age) to let age is called Temporal Dead Zone(TDZ)

let age =25;
age=30;  // its allowed
//let age =40; // its not allowed in same block (Error)











// Const -> Constant Values

const a=23
// block scoped
// cannot be reassigned or redeclared
// value must ve assigned at declaration
//TDZ applieds here too



const pi=3.14;
pi=4.56  // Error

// But if const holds an object/array , you can still change contents:
// const student ={name : "Riya"};
// student.name="priya"  // allowed
// student={};           // Not allowed




