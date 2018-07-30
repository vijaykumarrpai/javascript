var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/products/302.json';

axios.get(url)
.then(function(response){
    var product = response.data;
    console.log(`${product.name} ${product.price} ${product.category}`);
    //console.log(product.reviews);
    console.log('Listing Reviews : ' + product.reviews.length);
    product.reviews.forEach(function(review){
        console.log(` Body - ${review.body} \n User - ${review.user}\n Rating - ${review.rating} \n\n`);
    })
})
.catch(function(err){
    console.log(err);
});