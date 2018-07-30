// immediately invoked function expression

// without arguments 
(function() {
    console.log('loading .html');
    console.log('loading .css');
    console.log('loading .js');
})();

//with arguments
(function(n1,n2) {
    console.log(n1 + n2);
    console.log('loading .html');
    console.log('loading .css');
    console.log('loading .js');
}) (10,20);