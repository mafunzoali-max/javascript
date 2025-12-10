class BankAccount {
    #balance; // Private field

    constructor(initialBalance) {
        if (initialBalance >= 0) {
            this.#balance = initialBalance;
        } else {
            console.log("Initial balance must be non-negative");
            this.#balance = 0;
        }
    }

    // Getter for balance
    getBalance() {
        return this.#balance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}`);
        } else {
            console.log("Invalid or insufficient funds for withdrawal");
        }
    }
}

// Creating an object
const account = new BankAccount(1000);

// Access balance (getter)
console.log(`Balance: ${account.getBalance()}`); // 1000

// Deposit money
account.deposit(500);
console.log(`Balance: ${account.getBalance()}`); // 1500

// Withdraw money
account.withdraw(200);
console.log(`Balance: ${account.getBalance()}`); // 1300

// Avoid direct access to private field
console.log("Private field cannot be accessed directly. Use getter methods.");
