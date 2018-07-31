console.log('script is loaded');

var messageHandle = document.getElementById('message');
var wordCountHandle = document.getElementById('wordCount');

// function counter() {
//     var value = messageHandle.value();


// if(value.length == 0) {
//     wordCountHandle.innerHTML = '';
//     charCountHandle.innerHTML = '';
//     return;
// }

// var regex = /\s+/gi;
// var wordCount = value.trim().replace(regex, ' ').split('').length;
// var charCount = value.trim().length;

// wordCountHandle.innerHTML = wordCount;
// charCountHandle.innerHTML = charCount;
// }


messageHandle.addEventListener('keyup', function(){
    if(messageHandle.value.length !== 0) {
        var array = messageHandle.value.split(' ').length;
    } else {
        var array = 0;
    }
    var count = messageHandle.value.length;
    wordCountHandle.innerHTML = `You have written ${array} words and ${count} characters`;
}, false);

