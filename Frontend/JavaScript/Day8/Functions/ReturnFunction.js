function reverse(num){
    let rem,rev=0,t=num;
    for(;num>0;){
        rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10)
    }
    return rev
}
let revValue;


let n=12241
revValue=reverse(n)
if(n==revValue)
    document.writeln("Palindrom")
else
    document.writeln("Not Palindrom ")