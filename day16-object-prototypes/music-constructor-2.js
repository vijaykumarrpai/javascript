// Object constructor function with arguments

function Song(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
    this.description = function () {
        return `${this.name} by ${this.artist} duration is ${this.duration} long.`;
    };
    this.play = function() {
        return `${this.name} by ${this.artist} duration is ${this.duration} PLAYING`;
    };
    this.stop = function() {
        return `${this.name} by ${this.artist} STOPPED.`;
    }
}

var song = new Song('Numb', 'Linkin Park', '3 minutes 30 seconds');
console.log(song);

var song1 = new Song('Sacrifice', 'Creed', '4 minutes');
console.log(song1);