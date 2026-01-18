// Utility functions

// Generate a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Delay execution for a specified amount of time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Format amount to a currency format
function formatAmount(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

// Manage wallet balance
class Wallet {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}