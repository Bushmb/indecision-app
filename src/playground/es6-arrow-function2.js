// arguments object - no longer bound with arrow functions

// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// } 

// console.log(add(55, 1, 1001));

// const addArrow = (a , b) => {
//     // console.log(arguments);
//     return a + b;
// }

// console.log(addArrow(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Mike',
    cities: ['Honolulu', 'San Diego', 'Colorado Springs'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 8, 10],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());