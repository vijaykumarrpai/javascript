var axios = require('axios');
var url = 'https://jsonplaceholder.typicode.com/users';

axios.get(url)
.then(function(response){
    var user = response.data;
    user.forEach(function(user){
        console.log(`name: ${user.name}\n username : ${user.username}\n email: ${user.email}\n address: ${user.address.street} ${user.address.suite}\n city: ${user.address.city}\n zipcode: ${user.address.zipcode}\n geo: ${user.address.geo.lat} ${user.address.geo.lng}\n phone: ${user.phone}\n website: ${user.website}\n company: ${user.company.name}\n`);
    })
})
.catch(function(err){
    console.log(err);
});