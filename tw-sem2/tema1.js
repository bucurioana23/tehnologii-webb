//implementati o functie care verifica daca un numar este prim (numarul va fi transmis din linia de comanda)
function prim(n){
    if(n===1 || n===2){
        return true;
    }
    for(let i=2;i<=n/2;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

if(prim(process.argv[2]) === true){
    console.log("Numarul este prim!");
} else {
    console.log("Numarul nu este prim!");
}