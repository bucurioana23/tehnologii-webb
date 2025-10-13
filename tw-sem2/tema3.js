function fibo(n){
    if(n<= 1){
        return n;
    }

    let a = 0;
    let b = 1;
    let temp;

    for(let i=2;i<=n;i++){
        temp= a+b;
        a=b;
        b=temp;
    }
    return temp;
}

console.log(`Elementul 0: ${fibo(0)}`);
console.log(`Elementul 7: ${fibo(7)}`);
console.log(`Elementul 5: ${fibo(5)}`);
console.log(`Elementul 3: ${fibo(3)}`);