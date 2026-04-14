let row=5

for(let i=0;i<row;i++){
    for(let j=0;j<row;j++){
        if(i%2==0 || (i==3 && j==0) || (i==1 && j==4)){
            document.writeln('*')
        }
        else{
            document.writeln('&nbsp&nbsp')
        }
    }
    document.writeln('<br>')
}