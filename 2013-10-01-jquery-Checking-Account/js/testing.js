test( "deposit", function() {
  var balance = 1000;
  var entered_amount = 250;
deepEqual(add_deposit(balance, entered_amount), 1250, "adding to the balance" );
});

test( "withdrawl", function() {
  var balance = 1000;
  var entered_amount = 200;
deepEqual(add_withdrawl(balance, entered_amount), 800, "adding to the balance" );
});