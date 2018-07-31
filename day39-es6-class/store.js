class Invoice {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    generateBill() {
        return `
        ${this.name.toUpperCase()} INR ${this.price} QTY ${this.quantity} Total Bill ${this.price * this.quantity}
        `
    }
}

let i1 = new Invoice('marker', 15, 3)
console.log(i1.generateBill());

let i2 = new Invoice('bench', 1500, 2)
console.log(i2.generateBill());