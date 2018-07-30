function difference(a,b) {
    var array = [];
    for(var i = 0; i < a.length; i++) {
		array.push(a[i]);
    }
    
    for(var j = 0; j < b.length; j++) {
		array.push(b[j]);
    }
    
    var unique = [];

    for(var k = 0; k < array.length; k++) {
		if((unique.indexOf(array[k]) == -1)) {
            unique.push(array[k]);
        }
    }

if(a.length === 0 && b.length === 0) {
    return "empty array"; 
}
else {
    return unique;
}
}
console.log(difference([1,2,3], [100,2,1,10]));