//Collecting inital account info
var name = prompt("What's your name?");
var balance = prompt("What's Your initial balance?");
balance = parseFloat(balance);

debugger;
//collecting the 3 deposit transactions
var deposit1 = prompt("Please give the amount of your 1st deposit.");
var deposit2 = prompt("Please give the amount of your 2nd deposit.");
var deposit3 = prompt("Please give the amount of your 3rd deposit.");
// Converting input to decimal
deposit1 = parseInt(deposit1);
deposit2 = parseInt(deposit2);
deposit3 = parseInt(deposit3);

//Totaling the deposits
var total_deposits = 0;
total_deposits += deposit1
total_deposits += deposit2
total_deposits += deposit3

//collecting the withdrawls transactions
var withdrawl1 = prompt("Please give the amount of your 1st withdrawl");
var withdrawl2 = prompt("Please give the amount of your 2nd withdrawl");
var withdrawl3 = prompt("Please give the amount of your 3rd withdrawl");
//Converting input to decimal
withdrawl1 = parseInt(withdrawl1);
withdrawl2 = parseInt(withdrawl2);
withdrawl3 = parseInt(withdrawl3);
//Totaling withdrawls
var total_withdrawls = 0;
total_withdrawls += withdrawl1
total_withdrawls += withdrawl2
total_withdrawls += withdrawl2

/* Finding the difference between total
deposits and total withdrawls and then adding the
initial balance*/
balance += (total_deposits - total_withdrawls);

//if balance is less than 0 then add $50 to current balance
balance -= (balance < 0) ? 50 : 0;
balance = balance + (total_deposits - total_withdrawls)
console.log(name + ' ' + "your balance is $" + balance);