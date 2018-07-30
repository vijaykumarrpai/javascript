var axios = require('axios');
var id = 3;
var url = `http://dct-api-data.herokuapp.com/users/${id}.json`;

axios.delete(url)
.then(function(response){
    console.log(response.data);
})

.catch(function(err){
    console.log('code', err.response.data.status);
    console.log('error', err.response.data.error);
})