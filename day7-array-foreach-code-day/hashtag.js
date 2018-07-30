var string;
function hashTagGenerator(string) { 
    var str = '#';
    var array = string.split(' ');
    if(str.length >= 140) {
        return `not possible for ${string.length}`;
    }
        for(var i = 0; i < array.length; i++) {
            str = str + array[i].charAt(0).toUpperCase()+array[i].slice(1); 
        }
        return str;
}

console.log(hashTagGenerator('hello there thanks for trying my kata'));
console.log(hashTagGenerator('hello world'));