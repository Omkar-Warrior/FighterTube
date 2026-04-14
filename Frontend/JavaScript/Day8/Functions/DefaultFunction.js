// Default Function

// function fact(){
//     let n=Number(prompt('Enter any value := '))
//     let f=1;
//     for(let i=1;i<=n;i++){
//         f=f*i;
//     }
//     document.writeln('Factorial of '+n+" is "+f)
// }
// fact();





// function power(){
//     let base=Number(prompt('Base := '))
//     let index=Number(prompt('Index := '))
//     let pow=1;
//     for(;index>=1;index--){
//         pow=pow*base;
//     }
//     document.writeln("Power := "+pow)
// }
// power();





function reverse(){
    let n=Number(prompt('Enter any value := '))
    let rev=0,rem;
    for(;n>=1;){
        rem=n%10;
        rev=rev*10+rem
        n=Math.floor(n/10)
    }
    document.writeln('Reverse := '+rev)
}
reverse();






