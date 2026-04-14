let n=23
let rem,product=1
while(n>0){
    rem=n%10
    product*=rem
    n=Math.floor(n/10)
}

document.writeln(`Product of All Digits is ${product}`)