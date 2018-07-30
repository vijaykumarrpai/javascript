function doubleCola(names,r) {
    var n = 2;
    for(var i = 0; i < r; i++) {
        var person = names.shift();
        //names.push(person,person);
        for (var j = 1; j <= n; j++) {
            names.push(person);
        }
    }
    return names[0];
}

var names = ['Sheldon','Leonard','Penny','Rajesh','Howard']
var r = 2;
console.log(doubleCola(names,r));