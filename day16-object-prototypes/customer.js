function Customer(name, accountNum, balance) {
    this.name = name;
    this.accountNum = accountNum;
    this.balance = balance;
    this.transaction = function(code,amount) {
        if(code === 1) {
            this.balance = this.balance + amount;
            return `You deposited : ${this.balance}`;
        }
        else if (code === 0 && amount > this.balance ) {
            return `The amount is insufficient for the specified withdrawal`;
        }
        else if(code === 0 && amount <= this.balance) {
            this.balance = this.balance - amount;
            return `Your current account balance is ${this.balance}`;
        }
    };
    this.checkBalance = function() {
        return `Your current balance is ${this.balance}`;
    };
}

var c1 = new Customer('rakesh', 'SBI123', 500);
//console.log(c1);
console.log(c1.checkBalance());
console.log(c1.transaction(1,500));
console.log(c1.checkBalance());
console.log(c1.transaction(0,5000));

var c2 = new Customer('Madhuri', 'SBI123', 1500);
//console.log(c2);
console.log(c2.checkBalance());
console.log(c2.transaction(1,1500));
console.log(c2.checkBalance());
console.log(c2.transaction(0,2500));
console.log(c2.checkBalance());