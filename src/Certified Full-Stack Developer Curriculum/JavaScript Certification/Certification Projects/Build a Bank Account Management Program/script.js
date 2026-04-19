class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      return 'Deposit amount must be greater than zero.';
    }
    this.transactions.push({ type: 'deposit', amount });
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }
  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0 || amount > this.balance) {
      return 'Insufficient balance or invalid amount.';
    }
    this.transactions.push({ type: 'withdraw', amount });
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }
  listAllDeposits() {
    const deposits = this.transactions
      .filter((t) => t.type === 'deposit')
      .map((t) => t.amount)
      .join(',');
    return `Deposits: ${deposits}`;
  }
  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter((t) => t.type === 'withdraw')
      .map((t) => t.amount)
      .join(',');
    return `Withdrawals: ${withdrawals}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(120);
myAccount.deposit(80);
myAccount.withdraw(50);
myAccount.deposit(100);
myAccount.withdraw(10);
if (typeof window !== 'undefined') {
  window.BankAccount = BankAccount;
  window.myAccount = myAccount;
} else if (typeof global !== 'undefined') {
  global.BankAccount = BankAccount;
  global.myAccount = myAccount;
}
