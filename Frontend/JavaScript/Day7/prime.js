// let i=2,prime=true
// let no=Number(prompt('Enter any Number'))
// while(i<=no/2){
//     if(no%i==0){
//         prime=false
//         break
//     }
//     i++
// }

// if(prime){
//     document.writeln(`${no} prime`)
// }
// else{
//     document.writeln(`${no} Not prime`)
// }


let i=2,prime=true
let no=Number(prompt('Enter any Number'))
while(i<=Math.sqrt(no)){
    if(no%i==0){
        prime=false
        break
    }
    i++
}

if(prime){
    document.writeln(`${no} prime`)
}
else{
    document.writeln(`${no} Not prime`)
}