var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json';

axios.get(url)
.then(function(response){
    //console.log(response.data);
    var product = response.data;
    console.log('Listing Products in  grocery category');
    var category = product.filter(function(value){
        return (value.category === 'Books') || (value.category === 'Games')
    });
    console.log(category);
    console.log(category.length);
})
.catch(function(err){
    console.log(err);
});