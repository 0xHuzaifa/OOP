class BankAccount {
    private accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
}

// Creating an object of BankAccount class
let account = new BankAccount("123456", 1000);

// Trying to access balance directly (which is private)
// console.log(account.balance); // This would result in an error in TypeScript

// Accessing balance using a method (getBalance)
console.log(account.getBalance()); // Output: 1000

// Depositing and withdrawing funds
account.deposit(500);
console.log(account.getBalance()); // Output: 1500

account.withdraw(200);
console.log(account.getBalance()); // Output: 1300