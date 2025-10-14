const sampleArray = [1,2,3,4,5]

const map = (sampleArray, transformation) => {
    const result = [];
    for(const element of sampleArray){
        result.push(transformation(element));
    }
    return result;
};

console.log(map(sampleArray,(x)=>x*x))