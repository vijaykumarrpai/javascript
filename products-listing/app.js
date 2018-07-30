var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json';

axios.get(url)
.then(function(response){
    //console.log(response.data);
    var products = response.data;
    console.log('Listing Products', products.length);
    products.forEach(function(product){
        console.log(product.name, product.price, product.category);
    });
})
.catch(function(err){
    console.log(err);
});