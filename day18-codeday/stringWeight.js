function strWeight(name1,name2){
    var alphabets = {
            'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 
    }
    
    var name1Letters = name1.split('');
    var name1Weight = 0;
        name1Letters.forEach(function(letter){
                name1Weight += alphabets[letter];
        });

  var name2Letters = name2.split('');
    var name2Weight = 0;
        name2Letters.forEach(function(letter){
                name2Weight += alphabets[letter];
        });

    if(name1Weight > name2Weight) {
        return 1;
    } else if(name1Weight < name2Weight) {
        return 2;
    } else {
        return 'equal';
         }
    }
console.log(strWeight('batman','superman'));
console.log(strWeight('manbat','batman'));