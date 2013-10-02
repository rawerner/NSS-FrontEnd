var balance = 1000;

function add_deposit(balance, deposit_amount)
{
  return balance + deposit_amount;

}

function add_withdrawl(balance, withdrawl_amount)
{
  return balance - withdrawl_amount;
}

$(document).ready(initialize);

function initialize()
{
 $('#deposit_btn').click(deposit_funds);
 $('#withdrawl_btn').click(withdrawl_funds);
}

function deposit_funds()
{
  var entered_amount = $('#amount').val();
  entered_amount = parseInt(entered_amount);
  var balanceup = add_deposit(balance, entered_amount);
  $('#balance').text("$" + balanceup + '.00');

  if(balanceup >= 0)
    $('#balance').removeClass('.inthered');

}


function withdrawl_funds()
{
  var entered_amount = $('#amount').val();
  entered_amount = parseInt(entered_amount);
  var balanceit = add_withdrawl(balance, entered_amount);
  $('#balance').text("$" + balanceit + '.00');

  if(balanceit < 0)
    $('#balance').addClass('.inthered');

}
