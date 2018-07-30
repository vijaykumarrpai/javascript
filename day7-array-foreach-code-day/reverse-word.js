var str = 'i.like.this.program.very.much';
// function reverseWord(str) {
//     var strArr = str.split('.');
//     strArr.reverse();
//     return strArr.join('.');
// }
// console.log(reverseWord(str))

//reversing an array without using the reverse method
function reverseWord(str) {
    var array = str.split('.');
    var str1 = [];
    for(var i = array.length-1; i >=0; i--) {
        str1.push(array[i]);    
    }
    array = str1.join('.');
    return array;
}

console.log(reverseWord(str))