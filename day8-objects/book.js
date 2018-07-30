var book1Obj = {
    name: 'The Veteran',
    price: 215,
    author: 'Frederick Forsyth',
    type: 'Paperback',
    prime: true,
    rating: 4
}

var book2Obj = {
    name: 'Avenger',
    price: 230,
    author: 'Frederick Forsyth',
    type: 'Hardbound',
    prime: true,
    rating: 5
}

var book3Obj = {
    name: 'The Monk who sold his Ferrari',
    price: 500,
    author: 'Robin Sharma',
    type: 'Paperback',
    prime: false,
    rating: 4
}

var books = [];

books.push(book1Obj);
books.push(book2Obj);
books.push(book3Obj);

books.forEach(function(book,i) {
    var i = i + 1;
    console.log(`${i} | ${book.name} | ${book.price} | ${book.author} | ${book.type} | ${book.prime} | ${book.rating}`)
})