//1. functie clasica definita cu cuvantul cheie function
function hello1(){
    console.log("Salut");
}

hello1();

function hello2(name){
    console.log("Hello "+name); //sau console.log(`Hello ${name}`); --interpolare stringuri (cred)
}
hello2("Rebecca");

//2. functie anonima stocata intr-o variabila (functie expresie)
const great = function(name){
    console.log(`Hello ${name}`);
}
//apela, functia cu argumentul Alice
great("Alice");

//3. functie definita folosind sintaxa "arrow function"
const arrowfc = (name) => {
    console.log(name);
}

arrowfc("Ionel");
