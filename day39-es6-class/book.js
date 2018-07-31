class Book {
    constructor(bookName, isbn, author, publisher) {
        this.bookName = bookName;
        this.isbn = isbn;
        this.author = author;
        this.publisher = publisher;
    }
    getBookinfo() {
        return `BookName : ${this.bookName} 
ISBN : ${this.isbn} 
Author : ${this.author} 
Publisher : ${this.publisher}

`;
    }
}

let b1 = new Book('The monk who sold his ferrari', 12345, 'Robin Sharma', 'Penguin');
console.log(b1.getBookinfo());

let b2 = new Book('Immortals of Meluha', 67890, 'Amish Tripati', 'Rainbow');
console.log(b2.getBookinfo());