// Q2) Logical Operators
// Write a program:
// Take two numbers
// Check:
// Both are greater than 10 (AND)
// At least one is even (OR)
// Print result


let a=10,b=5
document.writeln(`<br>Original Value of a is ${a} and Original Value of b is ${b} `)
document.writeln(`<br>At least one is even = ${a%2==0 || b%2==0} <br> Both are greater than 10 = ${a>10 && b>10} `)