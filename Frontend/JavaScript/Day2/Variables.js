// let-> Globally allowed and not store more variables, var-> store multiple values ,const -> we cant chage after declaration

let a,b,c

a=19
b=90
c=a+b

// document.writeln("<br>Addition of a+b = "+c) 
// document.writeln("<br>Subtraction of a-b = "+(a-b))
// document.writeln("<br>Multipication of a*b = "+(a*b))
// document.writeln("<br>Division of a/b = "+(a/b))
// document.writeln("<br>Mod of a%b = "+(a%b))



// Template Literal -> Back Ticks Operator (` `)

document.writeln(`Addition of a+b = ${a+b},<br>Substraction of a-b = ${a-b}, <br>Multiplication of a*b = ${a*b}, <br>Division of a+b = ${a/b}, <br>Modulus of a%b = ${a%b},  `)