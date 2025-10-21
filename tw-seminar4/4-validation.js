const orderCoffee = (type)=> {
    const types = {
        SPECIAL: "SPECIAL",
        REGULAR: "REGULAR"
    };

    if(Object.values(types).indexOf(type) === -1) {
        throw new Error(`Invalid coffee type: ${type}`);
    } else {
        console.log(`Order received for a ${type} coffee.`);
    }
}

try {
    orderCoffee("SPECIAL");
    orderCoffee("EXPRESSIVE");
} catch (error) {
    console.error(error.message);
}