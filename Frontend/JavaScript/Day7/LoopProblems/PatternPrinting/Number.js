let row=5

for(let i=1;i<=row;i++){
    for(let j=1;j<=row;j++){
         if(i==j || i==row || j==1){
            document.write('*');
        }

        else{
            document.writeln('&nbsp&nbsp')
        }
    }

    document.writeln('<br>')
}