//implementati o functie care intercaleaza doua array-uri intr-un alt array
function intercalare(a,b){
    let result = "";
    let i=0;
    let j=0;
    while(i<a.length && j<b.length){
        result += a[i] +b[j];
        i=i+1;
        j=j+1;
    }
    result += a.substring(i) + b.substring(j);
    return result;
    
}

console.log(intercalare("acegh77","bdf"));