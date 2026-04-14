let row = 5;
let col = row * 2 - 1;




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

for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
        if(i + j >= row-1 && j - i <= row-1){
            document.write('* ');
        }
        else{
            document.write('&nbsp&nbsp&nbsp');
        }
    }
    document.write('<br>');
}


