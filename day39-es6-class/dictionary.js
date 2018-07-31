class Dictionary {
    constructor() {
        this.data = [];
    }

    newEntry(word, entries) {
        this.data.push({word,entries});
    }

    look(search) {
        let result = this.data.find(ele => {
            return ele.word == search;
        });

        if(result == undefined) {
            return `Cant find entry for ${search}`;
        } else {
            return result.entries;
        }
    }
}

let d = new Dictionary();

d.newEntry("Apple", "A fruit that grows on trees");

d.newEntry("Mango", "King of fruits");

console.log(d.look("Apple"));

console.log(d.look("Banana"));

console.log(d.look("Mango"));