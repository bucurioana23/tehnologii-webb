////////////////////////POWER
function pow(number){
    return number*number;
}

const pow2 = (n) => {
    return n*n;
}

if(process.argv.length < 3){
    console.log("Parametrii insuficienti!");
} else {
    console.log(pow2(parseInt(process.argv[2])));
}