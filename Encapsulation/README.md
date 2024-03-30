**Encapsulation in Object-Oriented Programming:**

Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP), emphasizing the bundling of data (attributes) and methods (functions) that operate on the data within a single unit, typically a class. It promotes data hiding by restricting access to certain components, thus protecting the integrity of the data and preventing unintended modifications. 

**Key Aspects of Encapsulation:**

1. **Data Hiding:** Encapsulation hides the internal state of an object from the outside world, allowing access to the data only through well-defined interfaces (methods).

2. **Access Control:** By controlling access to the internal data, encapsulation ensures that it can be modified or viewed only in ways that are intended and safe.

3. **Modularity:** Encapsulation fosters modularity by organizing data and methods into self-contained units, facilitating code maintenance, reuse, and readability.

**Example:**

Consider a class representing a bank account:

```typescript
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
```

In TypeScript, the private access modifier is used to encapsulate data. This ensures that the `accountNumber` and `balance` properties can only be accessed within the `BankAccount` class. The methods `getBalance()`, `deposit()`, and `withdraw()` provide controlled access to the `balance` property, enforcing encapsulation principles.


#OOP #Encapsulation #Python #Programming #ObjectOrientedProgramming #SoftwareDevelopment #CodeSnippet

