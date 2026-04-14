r=Number(prompt('Entere radius Value'))
pi=3.14

document.writeln(`Area Of Circle = ${pi*r*r}`)

if(r%2===0){
    document.writeln("Even Number")
}
else{
    document.writeln("Odd Number")
}