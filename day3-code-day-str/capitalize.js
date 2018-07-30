function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(capitalizeWords('js string exercises'));
console.log(capitalizeWords('vijaykumar r pai'));
