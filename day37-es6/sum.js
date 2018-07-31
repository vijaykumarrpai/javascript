const products = require('./data-products.js');

// console.log(products.data);

var items = products.data;

items.forEach((item) => {
    console.log(`The products are : ${item.name}`);
});