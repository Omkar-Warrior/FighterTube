let row = 4

for(let i=0;i<row;i++){
    for(let j=0;j<row;j++){
        if((i==1 || i==2) && (j==1 || j==2)){
            document.writeln('&nbsp&nbsp')
        }
        else{
            document.writeln('*')
        }
    }
    document.writeln('<br>')
}