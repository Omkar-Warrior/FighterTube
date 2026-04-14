// let n = 5;

// switch(n) {
//     case 1:
//         document.writeln('One');
//         break;

//     case 2:
//         document.writeln('Two');
//         break;

//     case 3:
//         document.writeln('Three');
//         break;

//     case 4:
//         document.writeln('Four');
//         break;

//     case 5:
//         document.writeln('Five');
//         break;

//     default:
//         document.writeln('Invalid number');
// }



let a = 8;
let b=7;
let ans=prompt("Enter Arithmatic Operations")

switch(ans) {
    case "+":
        document.writeln('Addition of a and b is '+(a+b));
        break;

   case "-":
        document.writeln('Substraction of a and b is '+(a-b));
        break;

    case "*":
        document.writeln('Multiplication of a and b is '+(a*b));
        break;

    case "/":
        document.writeln('Division of a and b is '+(a/b));
        break;

    case "%":
        document.writeln('Mod of a and b is '+(a%b));
        break;

    default:
        document.writeln('Invalid Operator');
}