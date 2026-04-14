// Syntax
//      initialisation
//      while(condition){
//            statements
//            incement decrement or any other statements
//       }


// Program Number 1

// let i=1

// while(i<=10){
//     document.writeln("<br>Hello "+i)
//     i++
// }




// // WAP to print event numbers from 1 to 10

// let i=2
// while(i<=30){
//     document.writeln("<br>" +i)
//     i+=2
// }



// WAP to print numbers from 10 to 1

// let i=10
// while(i>=1){
//     document.writeln("<br>" +i)
//     i--
// }




// let i=1
// let sum=0

// while(i<=10){
//     sum+=i;
//         i++
// }

// document.writeln(sum)



// // 1 to 30 even numbers addtion

// let i=2,sum=0

// while(i<=30){
//     sum+=i
//     i+=2
// }
// document.writeln(sum)



// let i=1,table

// while(i<=10){
//     table=5*i
//     document.writeln(table)
//     i++
// }


// Power of a number

// let base = 3;
// let pow = 3;
// let result = 1;

// while (pow >= 1) {
//     result *= base;
//     pow--;
// }

// document.writeln(result);



// // Factors of numbers
// let num = 40;
// let i = 1;

// while (i <= num) {
//     if (num % i === 0) {
//         document.writeln(i + "<br>");
//     }
//     i++;
// }


let i=2,count=0
let no=Number(prompt('Enter any number := '))
while(i<=no/2){
    if(no%i==0)
        count++;
    i++
}
if(count==0)
    document.writeln(`${no} Prime`)
else
    document.writeln(`${no} Not Prime`)