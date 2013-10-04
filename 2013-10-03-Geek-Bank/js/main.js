'use strict';

//global variable
var accountBalance = 0;

$(document).ready(initialize);

//initializing all the click events
function initialize()
{
  $('#setLogoBtn').click(addLogo);
  $('#setBalanceBtn').click(setBalance);
  $('#depositFundBtn').click(depositFunds);
  $('#withdrawFundBtn').click(withdrawFunds);
  $('#depositDetail').on('click', 'li', rmTransAndSubtractBal);
  $('#withdrawDetail').on('click', 'li', rmTransAndAddToBal);
}

//add a logo to the page
function addLogo()
{
  var logoUrl = $('#logoUrl').val();
  $('#logo').attr('src', logoUrl);
  $('#logoUrl').hide();
  $('#setLogoBtn').hide();
  $('#startingBalance').focus();
}

//taking in a beginning balance
function setBalance()
{
  var balance = $('#startingBalance').val();
  accountBalance = parseInt(balance, 10);
  $('#balanceWindow').val(makeCurrency(accountBalance));
  $('#setBalanceBtn').hide();
  $('#startingBalance').hide();
  $('#amount').focus();
}

//updates the account balance after deposit
function depositFunds()
{
  var amount = $('#amount').val();
  amount = parseInt(amount, 10);
  accountBalance += amount;
  updateDisplay();
  addToDeposits(amount);
}

//updates the account balance after withdraw
function withdrawFunds()
{
  var amount = $('#amount').val();
  amount = parseInt(amount, 10);
  accountBalance -= amount;
  updateDisplay();
  addToWithdraws(amount);
}

//converts number to have $ and .00
function makeCurrency(number)
{
  return '$' + number + '.00';
}

//updates the account balance number
function updateDisplay()
{
  $('#balanceWindow').val(makeCurrency(accountBalance));
}

//creates a deposit list item
function addToDeposits(number)
{
  var $li = $('<li>');
  $li.addClass('deposit');
  $('#depositDetail').prepend($li);
  $li.text(makeCurrency(number));
}

//creates a withdraw list item
function addToWithdraws(number)
{
  var $li = $('<li>');
  $li.addClass('withdraw');
  $('#withdrawDetail').prepend($li);
  $li.text(makeCurrency(number));
}


//removing deposit from list
function rmTransAndSubtractBal()
{
  var $trans = $(this);
  var amount = $trans.text().slice(1);
  amount = parseInt(amount, 10);
  accountBalance -= amount;
  updateDisplay();
  $trans.remove();
}

//removing withdraw from list
function rmTransAndAddToBal()
{
  var $trans = $(this);
  var amount = $trans.text().slice(1);
  amount = parseInt(amount, 10);
  accountBalance += amount;
  updateDisplay();
  $trans.remove();
}
