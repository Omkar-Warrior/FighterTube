// Q1) Create a program that takes two numbers and performs:
// Addition, subtraction, multiplication, division
// Then update values using assignment operators
// Finally compare both numbers


document.writeln(`Question Number 1`)
let a = Number(prompt("Enter The First Number"))
let b = Number(prompt("Enter The Second Number"))


document.writeln("<br>Addition of the a and b is "+(a+b))
document.writeln("<br>Subtraction of the a and b is "+(a-b))
document.writeln("<br>Multiplication of the a and b is "+(a*b))
document.writeln("<br>Division of the a and b is "+(a/b))

a = a+b
document.writeln(`<br><br>Value of a is ${a}`)
a+=b
document.writeln(`<br>Value of a is ${a}`)
a-=b
document.writeln(`<br>Value of a is ${a}`)
a*=b
document.writeln(`<br>Value of a is ${a}`)
a/=b
document.writeln(`<br>Value of a is ${a}`)


document.writeln(`<br><br>${a}, ${b} value check Equal :- ${a==b}`)

document.writeln(`<br> ${a}, d is string ${b} value check Equal :- ${a===b}`)

document.writeln(`<br> ${a}is string ${b} value check Not Equal :- ${a!=b}`)

document.writeln(`<br> ${a} is Greater Than ${b}  :- ${a>b}`)

document.writeln(`<br> ${a} is Less Than ${b}  :- ${a<b}`)

document.writeln(`<br> ${a} is Greater Than Equal ${b}  :- ${a>=b}`)

document.writeln(`<br> ${a} is Less Than ${b}  :- ${a<=b}`)
