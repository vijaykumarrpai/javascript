var name = 'Vijay';
var key = 'pRPLCejozFwCHFbVCR';

var axios = require('axios');

//var url = 'https://gender-api.com/get?name=Vijay&key=pRPLCejozFwCHFbVCR';

var uri = 'https://gender-api.com/get';

axios.get(uri, {
    // es6 feature - concis properties (when property name and thr variable name used to assign to the property is the same then we can inside the obj just mention the property name) we can use this
    params : {
        name,
        key
    }
    // instead of using 
    /* params : {
            name: name,
            key: key
    }
    */
})
// axios.get(url)
.then(function(response){
    var sex = response.data.gender;
    //console.log(response.data.gender);
    console.log('Determining gender...');
    console.log('The gender of ' + name + ' is ' + sex);
})

.catch(function(err){
    console.log(err);
});