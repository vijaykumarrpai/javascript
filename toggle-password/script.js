var CheckHandle = document.getElementById('check');
var PassHandle = document.getElementById("password");

CheckHandle.addEventListener('click', function(){
    if(CheckHandle.checked) {
        PassHandle.setAttribute('type', 'text');
    } else {
        PassHandle.setAttribute('type', 'password');
    }
}, false);