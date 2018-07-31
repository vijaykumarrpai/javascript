function clearArray(a) {
    if(a.length == 0) {
        return "invalid input";
    }
    let result = [];
    a.forEach(function(value){
        if(value) {
            return result.push(value);
        }
    });
    return result;
}

console.log(clearArray([NaN, 0, 15, false, -22, '',undefined, 47, null]));