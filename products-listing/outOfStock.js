var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json';

axios.get(url)
.then(function(response){
    //console.log(response.data);
    var product = response.data;
    console.log('Out of Stock');
    var outOfStock = product.filter(function(value){
        return value.stock === 0
    });
    console.log(outOfStock);
})
.catch(function(err){
    console.log(err);
});