// Q2) Write a program where:
// Initialize two variables
// Apply += and *= operators
// Use post increment on one variable
// Compare both variables and display result


let a=10
let b=2

document.writeln(`Original value of a is ${a} and value of b is ${b}`)
a+=b
b*=a

document.writeln(`<br> Used Assignment Operators :- value of a is ${a} and value of b is ${b}`)

a=b++

document.writeln(`<br> Post Increment :- value of a is ${a}`)

document.writeln(`<br><br>${a}, ${b} value check Equal :- ${a==b}`)

document.writeln(`<br> ${a}, d is string ${b} value check Equal :- ${a===b}`)

document.writeln(`<br> ${a}is string ${b} value check Not Equal :- ${a!=b}`)

document.writeln(`<br> ${a} is Greater Than ${b}  :- ${a>b}`)

document.writeln(`<br> ${a} is Less Than ${b}  :- ${a<b}`)

document.writeln(`<br> ${a} is Greater Than Equal ${b}  :- ${a>=b}`)

document.writeln(`<br> ${a} is Less Than ${b}  :- ${a<=b}`)