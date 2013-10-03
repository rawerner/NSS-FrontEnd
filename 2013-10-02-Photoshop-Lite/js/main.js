'use strict';

$(document).ready(initialize);

function initialize()
{
  $('#add_color').click(addColor);
  $('#brush').click(brushClicked);
  //$('.box').click(boxClicked);
  // Making an event happen before the object gets created.
  //$('parent_selector').on('name of event', 'child selector', nameOfFuntion)
  $('#colors').on('click', '.box', boxClicked);
  $('#add_box').click(addLittleBoxClicked);
  $('#boxes').on('mouseover', '.littlebox', boxHover);
}

function boxHover()
{
  var $littlebox = $(this);
  var brushColor = $('#brush').css('background-color');
  $littlebox.css('background-color', brushColor);

}

function addLittleBoxClicked()
{
  var amount = $('#amount').val();
  amount = parseInt(amount, 10);
  for(var i = 0; i < amount; i++)
  {
    var $div = $('<div>');
    $div.addClass('littlebox');

    $('#boxes').append($div);
  }
}

function brushClicked()
{
  alert('the brush was clicked');
}

function boxClicked()
{
  var $box = $(this); //converts a div into a jquery obeject
  var color = $box.css('background-color'); //what is the background color of the box you clicked
  $('#brush').css('background-color', color);
}


function addColor()
{
  var color = $('#color').val();
  var $div = $('<div>');
  $div.addClass('box');
  $div.css('background-color', color);

  $('#colors').prepend($div);
  clearInputAndFocus();
}

function clearInputAndFocus()
{
  $('#color').val('');
  $('#color').focus();
}