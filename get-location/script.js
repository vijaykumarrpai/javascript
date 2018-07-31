var btnHandle = document.getElementById("getLocation");
var displayHandle = document.getElementById("displayGeo");
var messageHandle = document.getElementById('message');
var outputHandle = document.getElementById('output');
var msgHandle = document.getElementById('msg');
var mapHandle = document.getElementById('mapHolder');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        displayHandle.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    mapHandle.innerHTML = "<img src='"+img_url+"'>";

    messageHandle.innerHTML = "Your current location is :";
    displayHandle.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    msgHandle.innerHTML = "Your current temperature is : "
    outputHandle.innerHTML = temperature;

}

btnHandle.addEventListener('click', function(){
    getLocation();
var url = `https://api.darksky.net/forecast/2037118f973926db05d337bbe926a5cb/12.95,77.62?units=si`;

axios.get(url)
.then(function(response){
    temperature = `${response.data.currently.temperature}`;
})
}, false);

