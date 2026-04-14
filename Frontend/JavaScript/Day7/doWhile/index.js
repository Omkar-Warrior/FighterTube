let n1,n2,ans;
do{
let choise=Number(prompt(`1 : Addition
2 : Subtraction
3 : Multiplication
4 : Division
Enter Your Choise := `))
n1=Number(prompt('Enter First Number := '))
n2=Number(prompt('Enter Second Number := '))
switch(choise)
{
    case 1:ans=n1+n2
        break;
    case 2: ans=n1-n2
        break;
    case 3:ans=n1*n2
        break;
    case 4:ans=n1/n2
        break;
    default:alert("Invalid Option!!")
}
document.writeln(`n1 := ${n1} n2 := ${n2} res := ${ans} <br>`)
option=confirm("Do you want to Continue?")
}
while(option)

// let option;

// do{
// let choise=Number(prompt(`1 : Prime
// 2 : Factorial
// 3 : Fibbonacci
// 4 : Reverse
// Enter Your Choise := `))

// switch(choise)
// {
//     case 1:
//         let n=Number(prompt('Enter Number to check Prime '))
//         let i=2,isPrime=true
//         for(;i<=Math.sqrt(n);i++){
//             if(n%i==0){
//                 isPrime=false
//                 break;
//             }
//         }
//         document.writeln("<br>")
//         if(isPrime)
//             document.writeln(n+" is Prime")
//         else
//             document.writeln(n+" is Not Prime")
//         break;
//     case 2:
//         let num=Number(prompt('Enter number for factorial '))
//         let f=1;
//         for(;num>=1;num--){
//             f*=num
//         }
//         document.writeln("<br>")

//         document.writeln("Factorial := "+f)
//         break;
//     case 3:
//         let f0=0,f1=1,cnt=3,f2;
//         document.writeln("<br>")

//         document.writeln(f0+" , "+f1+" , ")
//         for(;cnt<=10;cnt++){
//             f2=f0+f1
//             document.writeln(f2+" , ")
//             f0=f1;
//             f1=f2
//         }
//         break;
//     case 4:
//         let no=Number(prompt('Enter no for reverse'))
//         let rem,rev=0;
//         for(;no>0;){
//             rem=no%10
//             rev=rev*10+rem
//             no=Math.floor(no/10)
//         }
//         document.writeln("<br>")

//         document.writeln("Reverse := "+rev)
//         break;
//     default:alert("Invalid Option!!")
// }

// option=confirm("Do you want to Continue?")
// }
// while(option)
