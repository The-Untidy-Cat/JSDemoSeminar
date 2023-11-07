import {
  fakeBankAccounts,
  topUpBankAccounts,
  topUpBankAccountsWithPromise,
  getAccountsByName,
  getNumberAccounts,
  viewBankAccounts,
} from "./services.js";

let branch1Accounts = fakeBankAccounts(5);
let branch2Accounts = fakeBankAccounts(5);

let bankAccounts = [...branch1Accounts, ...branch2Accounts];

bankAccounts[0].name = "A";
// console.log(bankAccounts[0]);

// viewBankAccounts(bankAccounts);

// getNumberAccounts(bankAccounts);

// console.log(getAccountsByName(bankAccounts, "Smith"));

// // without promise
// console.log("\nWithout Promise: \n");
// console.log(
//   "Top up 1000000 to the first account: \n" +
//     bankAccounts[0].getInformation() +
//     " ..."
// );
// topUpBankAccounts(bankAccounts[0], 1000000);
// console.log("Done! \n" + bankAccounts[0].getInformation() + "\n");

// with promise
// console.log("\nWith Promise: \n");
// console.log(
//   "Top up 1000000 to the second account: \n" +
//     bankAccounts[1].getInformation() +
//     " ..."
// );
// topUpBankAccountsWithPromise(bankAccounts[1], 1000000).then((result) => {
//   if (result) {
//     console.log("Done! \n" + bankAccounts[1].getInformation() + "\n");
//   }
// });
