const array = [12,4,5,6]

const deviFun = (array,n)=>{
    return(
        array
        .filter((number) => number%n === 0)
        .reduce((sum,value) => sum + value)
    );
}

console.log(deviFun(array,3));