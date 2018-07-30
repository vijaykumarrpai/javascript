var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/users/16.json';

axios.get(url)
.then(function(response){
    var user = response.data;
    var total = 0;
    console.log(user.orders.order_total);
    console.log('Order total : ');
    user.orders.forEach(function(order){
        console.log(`${order.order_number} ${order.order_date} ${order.order_total}`);
        total += order.order_total;
    })
    console.log('The amount spent on the site is : ' + total);
    if (total > 15000) {
        console.log('Prime customer');
    } else {
        console.log('Not a Prime customer');
        }
})

.catch(function(err){
    console.log(err);
});