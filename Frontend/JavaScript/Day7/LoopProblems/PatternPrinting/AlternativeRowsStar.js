let row = 4

for(let i=1;i<=row;i++){
    for(let j=0;j<=row;j++){
        if((i%2!=0)){
            document.writeln('*')
        }
        else{
            document.writeln('&nbsp&nbsp')
        }
        
    }
    document.writeln('<br>')
}