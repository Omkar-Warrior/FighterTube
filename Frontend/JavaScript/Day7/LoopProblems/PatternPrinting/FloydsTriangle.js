let row = 5
let k=1
for(let i = 0; i < row; i++){
    for(let j = 0; j <row; j++){
        
        if(i>=j){
            document.write(k+" ");
            k++
        }

        else{
            document.writeln('&nbsp&nbsp')
        }
        
    }
    document.write('<br>');
}