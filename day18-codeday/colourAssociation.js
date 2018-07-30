function colorAssociation(a) {
    var array = [];
    a.forEach(function(element){
        var obj = {};
        obj[element[0]] = element[1];
        array.push(obj);
    });
    return array;
}

console.log(colorAssociation([["white", "goodness"], ["blue", "tranquility"]]));