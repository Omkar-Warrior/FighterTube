let num = 12345;
let large=0

while(num > 0){
    let rem=num%10

    if(rem>large){
        large=rem
    }

    num=Math.floor(num/10)
    
}

document.writeln("Largest of digit =", large);