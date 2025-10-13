//aparitie caracter intr-un text
function count(str, caracter){
    let c = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]===caracter){
            c++;
        }
    }
    return c;
}

console.log(count("abcaa",'a')); // 3