console.log("Javascript Bank loaded!");

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

const bank = {

  accounts: [
    {
      name: "John",
      balance: 20000
    },
    {
      name: "Manda",
      balance: 100000
    },
    {
      name: "David",
      balance: 50000
    }
  ], //accounts
}; // bank

  //Sum all balances function

  const totalSumAccounts = function(){
    let totalBankBalance = 0;
    for( let i = 0; i < bank.accounts.length; i++){
      totalBankBalance = totalBankBalance + bank.accounts[i].balance;
    }
    console.log(`Total balance in all accounts is ${totalBankBalance}`)
  },
  totalSumAccounts();

//Add new account function

const addAccount = function(newName, newBalance){
  newAccount = {name: newName, balance: newBalance};
  bank.accounts.push(newAccount);
  console.log(newAccount)
}
addAccount();

//bank.account.push( { name: 'Terry', balance: 10000 } );


  //bank.accounts.push("something") ;


  // //
  // // addAcount: function( name ){
  // //
  // // }, // addAcount()
  // //
  // // deposit: function( name, amount ){
  //
  // }, // deposit()
  //
  // etc...