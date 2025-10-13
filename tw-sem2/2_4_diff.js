//implementati o functie care returneaza nr de caractere diferite dintre 2 string-uri cu aceeasi lungime, primite ca si parametrii
//daca stringurile sunt de lungimi diferite, fc va intoarce -1

function numere(s1,s2){
    if(s1.length !== s2.length){
        return -1;
    } else if(s1 === s2){
        return 0;
    } else {
        let count=0;
        for(let i=0; i<s1.length;i++){
            if(s1[i] !== s2[i]){
                count++;
            }
        }
        return count;
    }
}

console.log(numere("abc","gd"));
console.log(numere("abc","abc"));
console.log(numere("abc","ghd"));