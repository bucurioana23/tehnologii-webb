const obj = {
    name: "mere",
    price: 10
}

//iteram prin toate cheile obiectului cu `for in`
for(const key in obj) {
    console.log(key)
}

//iterare prin elementele unui array folosind sintaxa 'for of'
const array = [1,2,3]

for(const iterator of array){
    console.log(iterator);
}