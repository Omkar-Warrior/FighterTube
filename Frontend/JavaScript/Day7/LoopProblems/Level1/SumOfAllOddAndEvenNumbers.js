let n=10
let evenSum=0,oddSum=0

for(let i=0;i<n;i++){
    if(i%2==0){
        evenSum+=i
    }
    else{
        oddSum+=i
    }
}

document.writeln("Sum of Even Numbers is :- "+evenSum)
document.writeln("<br>Sum of Even Numbers is :- "+oddSum)