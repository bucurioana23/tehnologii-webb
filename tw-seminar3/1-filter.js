let arr = [1, 2, 3, 4]

const result = arr.filter((item)=>item>2);
console.log(result);

const animalList = [
    "girafa",
    "hipopotam",
    "elefant",
    "urs",
    "girafa",
    "tigru"
];

const filterFunction = (list, forbiddenWord, minWordLength)=>{
    return list.filter((animal)=>{
        if(animal != forbiddenWord && animal.length >= minWordLength){
            return true;
        } else {
            return false;
        }
    })
}

const filterFunctionSimplified = (list, forbiddenWord, minWordLength)=>{
    return list.filter(
        (animal)=>animal != forbiddenWord && animal.length>=4
    );
};


console.log(filterFunction(animalList,"girafa",4));
console.log(filterFunctionSimplified(animalList,"girafa",4));