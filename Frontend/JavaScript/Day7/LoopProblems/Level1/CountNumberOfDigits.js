let n=2345568
let rem,count=0
while(n>0){
    rem=n%10
    count++
    n=Math.floor(n/10)
}

document.writeln(`Digits are Present in the Given Number is ${count}`)