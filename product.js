var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json?category=Books';

axios.get(url)
.then(function(response){
    var book = response.data;
    //console.log(product.name);
    book.forEach(function(book){
    console.log(`#Product name - ${book.name}\t #Product category - ${book.category}\t #Product price - ${book.price} \t #Product review count - ${book.reviews.length}`);
    })
})