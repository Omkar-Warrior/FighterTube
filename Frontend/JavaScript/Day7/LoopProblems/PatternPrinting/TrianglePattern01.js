let row=5
for(let i = 0; i < row; i++){
    for(let j = 0; j <row; j++){
        if(i>=j){
            if((i+j)%2==0){
                document.write('1 ');
            }
            else{
                document.write('0 ');
            }
            
        }

        else{
            document.writeln('&nbsp&nbsp')
        }
        
    }
    document.write('<br>');
}