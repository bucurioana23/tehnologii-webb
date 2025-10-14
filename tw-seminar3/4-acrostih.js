const sampleArray = ["the", "quick", "brown", "fox"];

const sampleText = `
best
read
on
windy
nights
`;//brown

const checkAcrostih = (array, text) => {
    const word = text
    .split("\n")
    .filter((e)=>e)
    .map((e)=>e.trim())
    .map((e)=>e[0]) //e.charAt(0)
    .join("");

    return array.indexOf(word) !== -1;
}

console.log(checkAcrostih(sampleArray,sampleText)); //true

