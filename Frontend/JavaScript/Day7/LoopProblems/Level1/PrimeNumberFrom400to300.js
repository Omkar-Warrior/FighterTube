for(let num = 300; num <= 400; num++){
    let isPrime = true;

    if(num < 2){
        isPrime = false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        document.write(num + " ");
    }
}