const getObjectFromUrl = (url) => {
    return new Promise((resolve) => {
        fetch(url)
            .then(response => response.json())
            .then(response => resolve(response));
    });
};


const countryBoundaries = (country) => 
        new Promise((resolve) => 
            getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
        .then((object) => resolve ({
            minLatitude: object[0].boundingbox[0],
            minLongitude: object[0].boundingbox[2],
            maxLatitude: object[0].boundingbox[1],
            maxLongitude: object[0].boundingbox[3]
        }))
    ).then((boundaries) => console.log(boundaries));


function main() {
    countryBoundaries('Romania');
}

main();