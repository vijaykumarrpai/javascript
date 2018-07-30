var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products/301.json';

axios.get(url)
.then(function(response){
    var product = response.data;
    console.log(`${product.name} INR ${product.price} ${product.category}`);
   
})
.catch(function(err){
    console.log(error.code);
});