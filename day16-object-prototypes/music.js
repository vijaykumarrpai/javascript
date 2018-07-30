// Object prototype - Sometimes we need a blueprint for creating many objects of the same type. Object prototype functions or object constructor function allows us to create an object type.
// Objects of the same type is created by calling the constructor function with the new keyword.
// The keyword (this) inside an object refers to the object itself.
var song1 = {
    name: "Numb",
    artist: "Linkin Park",
    duration: "3 minutes 10 seconds",    
    play: function() {
        return `${this.name} by ${this.artist} duration is ${this.duration}`;
    },
    stop: function() {
        return `${this.name} by ${this.artist} STOPPED`;
    }
};

console.log(song1.play());
console.log(song1.stop());

var song2 = {
    name: "Temperature",
    artist: "Sean",
    duration: "4 minutes 15 seconds",
    play: function() {
        return `${this.name} by ${this.artist} duration is ${this.duration}`;
    },
    stop: function() {
        return `${this.name} by ${this.artist} STOPPED`;
    }
};

console.log(song2.play());
console.log(song2.stop()); 

var song3 = {
    name: "Dil diyaan",
    artist: "Atif Aslam",
    duration: "5 minutes 05 seconds",
    play: function() {
        return `${this.name} by ${this.artist} duration is ${this.duration}`;
    },
    stop: function() {
        return `${this.name} by ${this.artist} STOPPED`;
    }
};

console.log(song3.play());
console.log(song3.stop());