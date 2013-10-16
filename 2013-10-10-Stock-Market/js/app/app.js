'use strict';

//Firebase Schema
var Δdb;
var Δbalance;
var Δstocks = [];

//Local Schema
var balance = 0;
var db;
var stocks = [];

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://stock-market-rw.firebaseio.com/');
  Δbalance = Δdb.child('balance');
  Δstocks = Δdb.child('stocks');
  $('#addDeposit').click(addDeposit);
  $('#buy').click(buy);
  $('#set').click(intervalSet);
  Δstocks.on('child_added', stockAdded);//If there is a child added
  Δbalance.on('value', updateBalance); //If the value on my Δbalance changes then run function updateBalance

}

function stockAdded(stock){
  stock = stock.val();
  stocks.push(stock);
  createRow(stock);
}

function updateBalance(snapshot){
  balance = snapshot.val();
  $('#cash').text('Cash Available: $' + balance + '.00');
  Δbalance.set(balance);
}

function addDeposit(){

  var deposit = parseInt($('#deposit').val(), 10);
  var total = balance + deposit;
  $('#cash').text('Cash Available: $' + total + '.00');
  Δbalance.set(total);
}

function requestQuote(symbol, fn){
  var data = {symbol: symbol};

  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, fn);
}


function intervalSet(){
  var interval = $('#interval').val();
  interval = parseInt(interval, 10) * 1000;
  setInterval(refreshPrices, interval);
}

function buy(){

  var symbol = $('#symbol').val();
  var quantity = parseInt($('#quantity').val(), 10);

  //this function is called with the quote comes back (fn)
  requestQuote(symbol, function(data, textStatus, jqXHR){
    var quote = data.Data;

    if(quote.LastPrice * quantity <= balance){
      balance -= quote.LastPrice * quantity;
      Δbalance.update(balance);


      var stock = {};
      stock.symbol = symbol.toUpperCase();
      stock.purchasePrice = quote.LastPrice;
      stock.quantity = quantity;
      Δstocks.push(stock);

    }
    $('#symbol').val('');
    $('#quantity').val('');
  });

}


function createRow(stock){
  var row = '<tr><td class="name"></td><td class="symbol"></td><td class="purchasePrice"></td><td class="share"></td><td class="currentPrice"></td><td class="net"></td></tr>';
  var $row = $(row);

  $row.children('.name').text(stock.name);
  $row.children('.symbol').text(stock.symbol);
  $row.children('.purchasePrice').text('$' + stock.purchasePrice + '.00');
  $row.children('.share').text(stock.quantity);
  $row.children('.currentPrice').text();
  $row.children('.net').text();

  $('#listing').append($row);

}


function refreshPrices(){
  $('body tr').each(function(){

    var $this = $(this);
    var symbol = $this.children('.symbol').text();
    var purchaseprice = parseFloat($this.children('.purchasePrice').text());

    requestQuote(symbol, function(data, textStatus, jqXHR){
      var quote = data.Data;
      var currentPrice = quote.LastPrice;

      $this.children('.currentPrice').text(currentPrice);
      var net = (currentPrice / purchaseprice) * 100;
      $this.children('.net').text(net.toFixed(2) + '%');
    });
  });
}