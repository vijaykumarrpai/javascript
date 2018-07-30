var inr = 100000;
var key = 'compact=y';

var axios = require('axios');

var url = 'http://free.currencyconverterapi.com/api/v5/convert?q=INR_USD&compact=y';

axios.get(url)
.then(function(response){
    var value = response.data.INR_USD.val;
    //console.log(value);
    console.log('Converting INR to USD...'); 
    var result = value * inr;
    console.log(result.toFixed(2));
})

.catch(function(err){
    console.log(err);
});