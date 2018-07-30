var axios = require('axios');
function Product(data) {
    this.name = data.name;
    this.price = data.price;
    this.category = data.category;
    this.cod = data.cod;
    this.stock = data.stock;

    this.submit = function() {
        var dataToSend = {
            name: this.name,
            price: this.price,
            category: this.category,
            cod: this.cod,
            stock: this.stock
        };
        axios.post('http://dct-api-data.herokuapp.com/products.json',dataToSend)
        .then(function(response){
            console.log('Data coming from the server this time');
            console.log(response.data);
        })
        .catch(function(err){
            console.log('These errors prohibited the form from being saved : ')
            var errors = err.response.data;
            for(var key in errors) {
                console.log(key, errors[key].join(', '));
            }
        })
    }
}

var p1 = new Product({name: 'PS4 Pro', price: '40000', category: 'Gaming', cod: true, stock: '10'});
p1.submit();