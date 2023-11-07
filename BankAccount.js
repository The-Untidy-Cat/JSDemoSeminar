class BankAccount {
  constructor(...props) {
    this.number = props[0] || 0;
    this.name = props[1] || "";
    this.balance = props[2] || 0;
  }
  getInformation() {
    return `Account number: ${this.number}
    Account holder: ${this.name}
    Balance: ${this.balance}`;
  }
  getName() {
    return this.name;
  }
  getNumber() {
    return this.number;
  }
  getBalance() {
    return this.balance;
  }
  setBalance(balance) {
    if (balance < 0) {
      throw new Error("Balance cannot be negative.");
    }
    this.balance = balance;
    return true;
  }
  deposit(amount = 0) {
    if (amount < 0) {
      throw new Error("Amount cannot be negative.");
    }
    this.balance += amount;
    return true;
  }
  withdraw(amount = 0) {
    if (amount > this.balance) {
      throw new Error("Amount cannot be greater than balance.");
    }
    this.balance -= amount;
    return true;
  }
}

export default BankAccount;
