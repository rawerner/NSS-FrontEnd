'use strict';

//Firebase Schema
var Δdb;
var Δbalance;

//Local Schema
var db = {};

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://stock-market-rw.firebaseio.com/');
  $('#addFunds').click(addFunds);
  $('#buy').click(buy);
  Δbalance = Δdb.child('items');
  Δstocks = Δdb.child('stocks');
}

function addFunds(){

}

function buy(){
  var symbol = $('#symbol').val();
  var quantity = parseInt($('#quantity').val(), 10);

  var quote = data.Data;

  getStockQuote(symbol, function(data, textStatus, jqXHR){

    if(quote.LastPrice * quantity <= db.balance.cash){
      db.balance.cash -= quote.LasPrice * quantity;
      db.balance.stock += quote.LastPrice * quantity;
      db.balance.total = db.balance.cash + db.balance.stock;
      Δbalance.set(db.balance);

      var stock = {};
      stock.symbol = symbol;
      stock.purchasePrice = quote.LastPrice;
      stock.quantity = quantity;
      Δstocks.push(stock);
  }

    $('#symbol').val('');
    $('#quantity').val('');
  });
}


function getStockQuote(symbol, fn){
  var data = {symbol: symbol};

  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, fn);
}

function balanceChanged(){

}
