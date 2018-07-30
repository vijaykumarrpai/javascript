// Passing object as parameter to function
function ContactForm(data) {
    this.name = data.name;
    this.email = data.email;
    this.mobile = data.mobile;
    this.message = data.message;

    // private method
    var obj = {};
    var flag = 1;
    this.validate = function(dataToSend){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(dataToSend.name.length > 0) {
            obj['name'] = 'correct';
        }
        else {
            obj['name'] = 'name cant be blank';
            flag=0;
        }
        if(dataToSend.mobile.length == 10) {
            obj['mobile'] = 'correct';
        }
        else {
            obj['mobile'] = 'mobile should be length 10';
            flag = 0;
        }

        if(flag == 1) {
            return true;
        } else {
            return false;
        }
    };

    this.submit = function() {
        var dataToSend = {
            name: this.name,
            email: this.email,
            mobile: this.mobile,
            message: this.message
        };

        if(this.validate(dataToSend)) {
        var axios = require('axios');
        axios.post('http://dct-api-data.herokuapp.com/contact_forms.json',dataToSend)
        .then(function(response){
            console.log('Data coming from the server this time');
            console.log(response.data);
        })
        .catch(function(err){
          console.log(obj);
        })
        }
        else {
            console.log("ERROR IN OBJECT");
            console.log(obj);
        }
    }
}

var cf1 = new ContactForm({name: 'Vijay', email: 'vijay@gmail.com', mobile: '8861372156', message: 'call me back'});
cf1.submit();
// var cf2 = new ContactForm({name: 'Vijay', email: 'vijay@gmail.com', mobile: '12345678901', message: 'Call me back'});
// cf2.submit();