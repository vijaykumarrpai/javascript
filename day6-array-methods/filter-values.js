var values = ['dct', 560011, 'academy', 'bangalore', 430];
function filterStrValues(values) {
    var string = values.filter(function(n) {
        return typeof(n) === 'string';
    });    
    return string;
}
console.log(filterStrValues(values));

function filterNumValues(values) {
    var num = values.filter(function(n) {
        return typeof(n) === 'number';
    });
    return num;
}
console.log(filterNumValues(values));

function filterValues(values, type) {
    var result = values.filter(function(n) {
        return typeof(n) === type;
    });
    return result;
}
console.log(filterValues(values, 'string'));
console.log(filterValues(values, 'number'));