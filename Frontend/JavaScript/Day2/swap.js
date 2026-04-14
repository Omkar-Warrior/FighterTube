// a=Number(prompt('Entere First Value'))
// b=Number(prompt('Entere Second Value'))

// document.writeln(`a = ${a}, b = ${b}`)

// temp=a
// a=b
// b=temp

// document.writeln(`<br> Swapped Values a = ${a}, b = ${b}`)


a=Number(prompt('Entere First Value'))
b=Number(prompt('Entere Second Value'))

document.writeln(`a = ${a}, b = ${b}`)

a=a+b
b=a-b
a=a-b

document.writeln(`<br> Swapped Values a = ${a}, b = ${b}`)