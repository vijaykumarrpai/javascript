class Customer {
    constructor(name, accountNum, balance) {
        this.name = name;
        this.accountNum = accountNum;
        this.balance = balance;
    }

    transaction(code, amount) {
        if(code === 1) {
            this.balance = this.balance + amount;
            return `You deposited : ${this.balance}`;
        }
        else if(code === 0 && amount > this.balance) {
            return `The amount is insufficient for the specified withdrawal`;
        }
        else if(code === 0 && amount <= this.balance) {
            this.balance = this.balance - amount;
            return `Your current account balance is : ${this.balance}`;
        }
    };

    checkBalance() {
        return `Your current balance is : ${this.balance}`;
    };
}

module.exports = {
    Customer
}