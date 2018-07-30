var product = {
    name: 'Marker',
    price: 'INR 15',
    description: 'White board marker',


details: function() {
    return `${this.name} - ${this.price} - ${this.description} `;
    }
}

console.log(product.details());