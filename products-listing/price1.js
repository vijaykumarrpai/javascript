var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json';

axios.get(url)
.then(function(response){
    //console.log(response.data);
    var product = response.data;
    console.log('Count of products whose cod eligible is false');
    var price = product.filter(function(value){
        return value.price > 2500;
    });
    console.log(price);
    console.log(price.length);
})
.catch(function(err){
    console.log(err);
});