let n500 = 0, n200 = 0, n100 = 0, amount;

amount = Number(prompt('Enter any amount :- '));

document.writeln('Amount :- ' + amount);

// 500 notes
if (amount >= 500) {
    n500 = Math.floor(amount / 500);
    amount = amount % 500;
}

// 200 notes
if (amount >= 200) {
    n200 = Math.floor(amount / 200);
    amount = amount % 200;
}

// 100 notes
if (amount >= 100) {
    n100 = Math.floor(amount / 100);
    amount = amount % 100;
}

// Output
if (n500 != 0) {
    document.writeln('<br>500 = ' + n500);
}

if (n200 != 0) {
    document.writeln('<br>200 = ' + n200);
}

if (n100 != 0) {
    document.writeln('<br>100 = ' + n100);
}