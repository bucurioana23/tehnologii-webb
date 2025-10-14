const currentYear = new Date().getFullYear();
console.log(currentYear);

birth_years=[1980,1990,1997,2000,2001,2005,2007,2010,2015,2017];

const checkAdults = (year) => currentYear - year >= 18;

console.log(birth_years.filter(checkAdults));
