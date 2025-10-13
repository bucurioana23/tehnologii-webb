function addToArray(...args){
    //initializam un array gol
    let array = [];

    //parcurgem argumentele primite si le si adaugam
    for(let i=0;i<args.length;i++){
        array.push(args[i]);
    }

    //returnam arrayul
    return array;
}

console.log(addToArray(10,20,30));

function sum(x,y,z){
    return x+y+z;
}

const arr = [1,2,3,7];

console.log(sum(...arr));