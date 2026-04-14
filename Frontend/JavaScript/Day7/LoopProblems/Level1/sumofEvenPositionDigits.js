let num = 12345;
let pos = 1;
let sum = 0;

while(num > 0){
    let digit = num % 10;

    if(pos % 2 == 0){
        sum = sum + digit;
    }

    pos++;
    num = Math.floor(num / 10);
}

document.writeln("Sum of digits at even position =", sum);