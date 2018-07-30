var song = {
    name: "Numb",
    artist: "Linkin Park",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function() {
            this.playing = true;
            return `Playing ${this.name} by ${this.artist}`;
    },
    pause: function() {
            this.playing = false;
            return `Song ${this.name} by ${this.artist} stopped playing`;
        }
    };

    console.log(song.play());
    console.log(song.pause());