class Bank {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    // guard clause
    if (this.balance - amount <= 0) {
      console.log("Balance low, transaction declined");
      return;
    }
    this.balance -= amount;
    console.log("withdrawn", amount);
    console.log({ Balance: this.balance });
  }

  deposit(amount) {
    this.balance += amount;
    console.log("deposited", amount);
    console.log({ Balance: this.balance });
  }
}

const ncAccount = new Bank(100);
// ncAccount.withdraw(101);
// // ncAccount.withdraw(100);
// // ncAccount.deposit(100);
// // ncAccount.withdraw(101);

const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const amountInput = document.getElementById("amount");
const balanceDiv = document.getElementById('balance')

console.log(amountInput.value);

depositButton.onclick = () => {

  const amount = Number(amountInput.value);
  ncAccount.deposit(Number(amountInput.value));
  console.log(amountInput.value);
  balanceDiv.innerText = `Balance: ${ncAccount.balance}`
};

withdrawButton.onclick = () => {

  const amount = Number(amountInput.value);
  ncAccount.withdraw(amount);
  console.log(amountInput.value);
  balanceDiv.innerText = `Balance: ${ncAccount.balance}`

};
