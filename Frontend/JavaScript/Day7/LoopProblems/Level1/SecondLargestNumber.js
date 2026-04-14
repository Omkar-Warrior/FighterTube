let num = 375;

let large = -1;
let slarge = -1;

while(num > 0){
    let rem = num % 10;

    if(rem > large){
        slarge=large
        large = rem;
    }
    else{
        if(rem > slarge && rem!=large){
                slarge = rem;
        }
    }

    num = Math.floor(num / 10);
}

document.writeln("Largest Digit = " + large);
document.writeln("<br>Second Largest Digit = " + slarge);