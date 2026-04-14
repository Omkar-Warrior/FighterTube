let row = 4

for(let i=0;i<row;i++){
    for(let j=0;j<row;j++){
        if((i==j || i+j==row-1)){
            document.writeln('*')
        }
        else{
            document.writeln('&nbsp&nbsp')
        }
        
    }
    document.writeln('<br>')
}