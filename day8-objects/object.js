// An object is an unordered, key index, collection of values.

var productArr = ['Marker', 25, 5, 'Camel'];
var product = {
    name: 'Marker',
    price: 25,
    unit: 5,
    maker: 'Camel'
}

console.log(product['name']);
console.log(product.name);

var player = {name: 'Virat', captain: true, battingAvg: 50.75, country: 'India', age: 30}

console.log('Name :', player['name']);
console.log('Captain :', player['captain']);
console.log('Batting Average :', player['battingAvg']);
console.log('Country :', player['country']);
console.log('Age :', player['age']);

console.log(typeof productArr);
console.log(Array.isArray(productArr));
console.log(typeof player);
console.log(Array.isArray(player));