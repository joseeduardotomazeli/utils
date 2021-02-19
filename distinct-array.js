const array = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 9];

const distinctArray = [...new Set(array)];

console.log(distinctArray); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
