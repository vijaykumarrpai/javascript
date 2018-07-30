var axios = require('axios');

var id = 302;
var url = `http://dct-api-data.herokuapp.com/products/${id}.json`;

axios.put(url, {
    price: 1200,
    stock: 110
})
.then(function(response){
    console.log(response.data);
})
.catch(function(err){
    console.log(err);
});