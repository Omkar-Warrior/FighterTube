
let a=10

document.writeln(` Original Value of a =${a}`)
b=++a
document.writeln(`<br> PreIncrement a=${a}, b=${b}`)
a++
document.writeln(`<br> PostIncrement a=${a}, b=${b}`)
--a
document.writeln(`<br> PreDecrement a=${a}, b=${b}`)
a--
document.writeln(`<br> PostDecement a=${a}, b=${b}`)



let c=0
d=++c + c++ + --c + c--

document.writeln(`<br> value of d = ++c + c++ + --c + c-- a=${c}, b=${d}`)

x=9
v=4
res=x*v + x++ +x -v + v++

document.writeln(`<br> res=x*v + x++ +x -v + v++ =    a=${x}, b=${v} res=${res}`)

