var details = function(name, city) {
    console.log(name);
    console.log(city);
    console.log(arguments);
}

//equal args and parameters
details('ani', 'bangalore');

// 1 extra arguments, being ignored in params list, but still available in arguments
details('ani', 'bangalore', '1234567890');

//1 less, parameters now holds undefined for the missing arguments
details('ani');
