let row = 10

for(let i = 0; i < row; i++){
    for(let j = 0; j <row; j++){
        if(i+j<row){
            document.write('*');
        }

        else{
            document.writeln('!')
        }
        
    }
    document.write('<br>');
}