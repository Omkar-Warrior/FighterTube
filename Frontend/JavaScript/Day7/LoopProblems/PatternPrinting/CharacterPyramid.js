let row = 5;
let col = 2*row-1;

for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){

        if(i+j>=row-1 && j-i<=row-1){
            document.writeln(String.fromCharCode(65+(j-(row-i-1))));
        }
        else{
            document.writeln('&nbsp&nbsp');
        }

    }
    document.writeln('<br>');
}