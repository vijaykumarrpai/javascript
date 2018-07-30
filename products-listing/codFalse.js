var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json';

axios.get(url)
.then(function(response){
    //console.log(response.data);
    var product = response.data;
    console.log('Count of products whose cod eligible is false');
    var cod = product.filter(function(value){
        return value.cod === false
    });
    console.log(cod.length);
})
.catch(function(err){
    console.log(err);
});