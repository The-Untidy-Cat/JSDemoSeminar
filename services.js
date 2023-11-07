import BankAccount from "./BankAccount.js";
import { NAMES } from "./enum.js";

const generateBankAccount = (number, name, balance = 0) => {
  return new BankAccount(number, name, balance);
};

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRndName = () => {
  return NAMES[getRndInteger(0, NAMES.length - 1)];
};

const fakeBankAccounts = (count = 1) => {
  const bankAccounts = [];
  for (let i = 0; i < count; i++) {
    bankAccounts.push(
      generateBankAccount(
        getRndInteger(100000, 999999),
        getRndName() + " " + getRndName(),
        getRndInteger(100, 1000000)
      )
    );
  }
  return bankAccounts;
};

const viewBankAccounts = (bankAccounts = []) => {
  for (const bankAccount of bankAccounts) {
    console.log(bankAccount.getInformation());
  }
};

const topUpBankAccounts = (bankAccount, amount = 0) => {
  setTimeout(() => {
    try {
      bankAccount.deposit(amount);
      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  }, 1000);
};

const topUpBankAccountsWithPromise = (bankAccount, amount = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        bankAccount.deposit(amount);
        resolve(true);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    }, 1000);
  });
};

function getNumberAccounts(bankAccounts, withIndex = false) {
  if (withIndex) {
    var x = bankAccounts.map((bankAccount, index) => {
      return { index: index, number: bankAccount.getNumber() };
    });
    let y = bankAccounts.map((bankAccount, index) => {
      return { index: index, number: bankAccount.getNumber() };
    });
  } else {
    var x = bankAccounts.map((bankAccount) => {
      return bankAccount.getNumber();
    });
    let y = bankAccounts.map((bankAccount) => {
      return bankAccount.getNumber();
    });
  }
  console.log("x: ", x);
  console.log("y: ", y);
  return x;
}

function getAccountsByName(bankAccounts, name = "") {
  let result = [];
  for (const bankAccount of bankAccounts) {
    if (String(bankAccount.getName()).includes(name)) {
      result.push(bankAccount);
    }
  }
  return result;
}

export {
  fakeBankAccounts,
  viewBankAccounts,
  topUpBankAccounts,
  topUpBankAccountsWithPromise,
  getNumberAccounts,
  getAccountsByName,
};
