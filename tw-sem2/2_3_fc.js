const hello = (name) => {
    return `Hello ${name}`;
}

console.log(hello("Bob"));
//////////////////////////////////
const hello1 = (name) => `Hello ${name}`;

console.log(hello1("Alice"));
///////////////////////////////////

//preluare parametru de la tastatura
console.log(hello1(process.argv[2] ));

////////////////////////////// SUMA A DOUA NUMERE
const sum = (a,b) => {return a+b};

console.log(sum(2,3));

