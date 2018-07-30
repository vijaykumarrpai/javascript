// The prototype property allows you to add properties and methods to any object (number, boolean, string, date, array, object and user defined objects).
String.prototype.toCapitalize = function() {
    return this[0].toUpperCase() + this.slice(1);
}

Array.prototype.unique = function() {
    var result = [];
    this.forEach(function(ele){
        if(result.indexOf(ele) < 0) {
            result.push(ele);
        }
    });
    return result;
}

var name = 'vijay';
var numbers = [10,20,30,10,20,30];
var names = ['Ramesh kumar', 'veeresh', 'ramesh', 'mahesh'];
var cities = ['bangalore', 'mysore', 'hubli', 'mangalore', 'tumkur'];
console.log(name.toCapitalize());
console.log(numbers.unique());
console.log(names.unique());

Array.prototype.first = function() {
    return this[0];
}

console.log(numbers.first());

Array.prototype.last = function() {
    return this[this.length - 1];
}

console.log(numbers.last());

Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
}

console.log(cities.sample());

String.prototype.camelCase = function() {
    var splitValues = this.split(' ');
    var result = splitValues[0].toLowerCase();
    for(var i = 1; i < splitValues.length; i++) {
    result += splitValues[i][0].toUpperCase() + splitValues[i].slice(1);
    }
    return result;
}

var fullName = 'rohit sharma';
console.log(fullName.camelCase());

var numbers = [10,20,30,40,50];

Array.prototype.deleteAt = function(a) {
    return this.splice(a,1);
}

console.log(numbers.deleteAt(2));
console.log(numbers);

Array.prototype.insertAt = function(a,b) {
    return this.splice(a,0,b);
}
console.log(numbers.insertAt(1,100));
console.log(numbers);

Array.prototype.delete = function(name) {
    this.forEach(element => {
        if(element === name) {
            this.splice(this.indexOf(element),1);
        }
    });
    return this;
}

var names = ['ramesh','veeresh','ramesh','mahesh'];
console.log(names.delete('ramesh'));