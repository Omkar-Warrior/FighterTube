let row = Number(prompt("Enter The Number of rows"));
let col = Number(prompt("Enter The Number of rows"));

for(let i = 0; i < row; i++){
    for(let j = 0; j <col; j++){
        if(i>=j){
            document.write('* ');
        }

        else{
            document.writeln('!')
        }
        
    }
    document.write('<br>');
}