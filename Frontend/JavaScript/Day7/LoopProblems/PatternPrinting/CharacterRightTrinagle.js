let row=9

for(let i=0;i<row;i++){
    for(let j=0;j<row;j++){
        if(i>=j){
            document.writeln(String.fromCharCode(65+j))
        }
        else{
            document.writeln('&nbsp&nbsp')
        }
    }
    document.writeln('<br>')
    
}