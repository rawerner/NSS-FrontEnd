'use strict';

//Firebase Schema
var Δdb;
var Δbalance;
var Δstocks;

//Local Schema
var db = {};


$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://stock-market-rw.firebaseio.com/');
  $('#addFunds').click(addFunds);
  $('#buy').click(buy);
  Δbalance = Δdb.child('balance');
  Δstocks = Δdb.child('stocks');
}

function addFunds(){
  var balance = parseInt($('#funds').val(), 10);
  $('#balance').text('Account Balance: $' + balance + '.00');
  Δbalance.update(balance);
}

function buy(){
  var symbol = $('#symbol').val();
  var quantity = parseInt($('#quantity').val(), 10);

  getStockQuote(symbol, function(data, textStatus, jqXHR){
debugger;
    var quote = data.Data;

    var total = quote.LastPrice * quantity;

    Δbalance.set(total);

    var stock = {};
    stock.symbol = symbol;
    stock.purchasePrice = quote.LastPrice;
    stock.quantity = quantity;
    Δstocks.push(stock);


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
