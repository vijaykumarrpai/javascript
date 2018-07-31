var appHandle = document.getElementById('app');
var olHandle = document.createElement('ol');
var h2 = document.createElement('h2');
var h2Text = document.createTextNode('Listing Products');
h2.appendChild(h2Text);
appHandle.appendChild(h2);

axios.get('http://dct-api-data.herokuapp.com/products.json')
.then(function(response){
    var products = response.data;
    products.forEach(function(product){
        var li = document.createElement('li');
        var text = document.createTextNode(product.name);
        li.appendChild(text);
        olHandle.appendChild(li);
    });
    appHandle.appendChild(olHandle);
})
.catch(function(err){
    console.log(err);
});