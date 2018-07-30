var customer = {
    accountNumber: 123456,
    name: 'Vijay',
    balance: 10000,

    display: function(title) {
        return `Welcome to XYZ Bank ${title} ${this.name} \n Your account no is ${this.accountNumber}`;
    },

    currentBalance: function() {
        return `Your current balance is ${this.balance}`;
    },

    transaction: function(amount,code) {
        if(code === 1) {
            this.balance = this.balance + amount;
            return `Your updated current balance is ${this.balance}`;
        }
        else if (code === 0 && amount > this.balance ) {
            return `The amount is insufficient for the specified withdrawal`;
        }
        else if(code === 0 && amount <= this.balance) {
            this.balance = this.balance - amount;
            return `Your new account balance is ${this.balance}`;
        }
    }
}

console.log(customer.display('Mr'));
console.log(customer.currentBalance());
console.log(customer.transaction(10000,0));
console.log(customer.transaction(10000,1));
console.log(customer.transaction(1000,0));
console.log(customer.transaction(100000,0));

