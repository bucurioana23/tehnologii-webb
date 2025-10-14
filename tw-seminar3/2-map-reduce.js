const sides = [10,9,5,12,4,3];

const getTotalAreas = (array)=>{
    return(
        array
        .map((side)=>side*side)
        .reduce((prevValue, currentValue) => prevValue + currentValue)
    )
}

const getTotalAreas2 = (array)=>{
    return(
        array
        .map((side)=>Math.pow(side,2))
        .reduce((prevValue, currentValue) => prevValue + currentValue)
    )
}

console.log(getTotalAreas2(sides));