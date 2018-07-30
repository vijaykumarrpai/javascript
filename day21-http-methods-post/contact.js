var axios = require('axios');
// Passing object as parameter to function
function ContactForm(data) {
    this.name = data.name;
    this.email = data.email;
    this.mobile = data.mobile;
    this.message = data.message;

    this.submit = function() {
        var dataToSend = {
            name: this.name,
            email: this.email,
            mobile: this.mobile,
            message: this.message
        };
        axios.post('http://dct-api-data.herokuapp.com/contact_forms.json',dataToSend)
        .then(function(response){
            console.log('Data coming from the server this time');
            console.log(response.data);
        })
        .catch(function(err){
            // server side errors being displayed in the UI
            console.log('These errors prohibited the form from being saved : ')
            var errors = err.response.data;
            for(var key in errors) {
                console.log(key, errors[key].join(', '));
            }
        })
    }
}

var cf1 = new ContactForm({name: 'Vijay', email: 'vijay@gmail.com', mobile: '8861372156', message: 'call me back'});
cf1.submit();

// var cf2 = new ContactForm({name: 'Vijay', email: 'vijay@gmail.com', mobile: '12345678901', message: 'Call me back'});
// cf2.submit();