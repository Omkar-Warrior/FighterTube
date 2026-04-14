let row=5

for(let i=0;i<row;i++){
    for(let j=0;j<row;j++){
        if(i==j || i<j){
            document.writeln('*')
        }
        else{
            document.writeln('&nbsp&nbsp')
        }
    }
    document.writeln('<br>')
}