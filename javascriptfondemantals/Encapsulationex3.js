class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log("Deposit amount must be positive");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);
account.deposit(50); // Output: Deposited: 50
console.log(account.getBalance()); // Output: 150

account.deposit(-10); // Output: Deposit amount must be positive
console.log(account.getBalance()); // Output: 150
