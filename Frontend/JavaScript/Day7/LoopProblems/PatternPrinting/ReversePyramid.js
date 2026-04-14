let row = 6;
let col = 2*row-1;

for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){

        if(i+j<=col-1 && j-i>=0 ){
            document.writeln('*');
        }
        else{
            document.writeln('&nbsp&nbsp');
        }

    }
    document.writeln('<br>');
}