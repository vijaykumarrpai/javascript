// Objects are created in javaScript are instanciated based on functions.
// Object Prototype Function = Object constructor function - without arguments
// function declaration
// function name in Pascal Case

function Song() {
    this.name;
    this.artist;
    this.duration;
    this.description = function() {
        return `${this.name} by ${this.artist} duration is ${this.duration} long.`;
    };
    this.play = function() {
        return `${this.name} by ${this.artist} duration is ${this.duration} PLAYING`;
    };
    this.stop = function() {
        return `${this.name} by ${this.artist} STOPPED.`
    }
}


// var obj = new Object() {}
// var arr = new Array(); []

var song = new Song();
song.name = 'Numb';
song.artist = 'Linkin Park';
song.duration = '3 minutes 30 seconds';
console.log(song.description());
console.log(song.play());
console.log(song.stop());

var song1 = new Song();
song1.name = 'Temperature';
song1.artist = 'Sean';
song1.duration = '3 minutes 40 seconds';
console.log(song1.description());
console.log(song1.play());
console.log(song1.stop());

var song2 = new Song();
song2.name = 'Dil Diyaan';
song2.artist = 'Atif Aslam';
song2.duration = '3 minutes 50 seconds';
console.log(song2.description());
console.log(song2.play());
console.log(song2.stop());