let n = 12233444555551;

for(let i = 0; i <= 9; i++){
    let count = 0;
    let temp = n;

    while(temp > 0){
        let digit = temp % 10;

        if(digit === i){
            count++;
        }

        temp = Math.floor(temp / 10);
    }

    if(count > 0){
        document.write(i + " -> " + count + "<br>");
    }
}