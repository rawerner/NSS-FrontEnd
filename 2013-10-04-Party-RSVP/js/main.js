$(document).ready(initialize);

'use strick';

function initialize()
{
  $('#add').click(addRow);
  $('table').on('click', '.rsvp', rsvp);
  $('table').on('click', '.nukebtn', nuke);
  $('table').on('click', '.arrowup', arrowUp);
  $('table').on('click', '.arrowdown', arrowDown);
}

function arrowUp()
{
  var $button = $(this);
  var $rsvp = $button.parent().parent();
  var $newlocation = $rsvp.prev();
  $newlocation.before($rsvp);
}


function arrowDown()
{
  var $button = $(this);
  var $rsvp = $button.parent().parent();
  var $newlocation = $rsvp.next();
  $newlocation.after($rsvp);
}

function rsvp()
{
  var $button = $(this);
  var $textbox =$button.prev();
  var text = $textbox.val();
  var items = text.split(', ');
  var name = items[0];
  var food = items[1];
  var $nameTD = $button.parent().prev().prev();
  var $foodTD = $button.parent().siblings('.food');
  $nameTD.text(name);
  $foodTD.text(food);
}


function nuke()
{
  var $button = $(this);
  var $rsvprow = $button.parent().parent();
  $rsvprow.remove();
}

function addRow()
{
  var $tr = $('<tr>');
  var $name = $('<td>');
  $name.addClass('name');
  var $food = $('<td>');
  $food.addClass('food');
  var $ctrl = $('<td>');
  $ctrl.addClass('ctrl');
  var $nuke = $('<td>');
  $nuke.addClass('nuke');
  var $arrows = $('<td>');
  $arrows.addClass('arrows');

  var $input = $('<input>');
  $input.attr('type', 'text');

  var $button = $('<input>');
  $button.attr('type', 'button');
  $button.attr('value', 'RSVP!');
  $button.addClass('rsvp');

  var $nukebtn = $('<input>');
  $nukebtn.attr('type', 'button');
  $nukebtn.attr('value', 'Nuke!');
  $nukebtn.addClass('nukebtn');

  var $arrowup = $('<img>');
  $arrowup.attr('src', 'images/uparrow.png');
  $arrowup.addClass('arrowup');

  var $arrowdown = $('<img>');
  $arrowdown.attr('src', 'images/downarrow.png');
  $arrowdown.addClass('arrowdown');


  $ctrl.append($input, $button);
  $nuke.append($nukebtn);
  $arrows.append($arrowup, $arrowdown);
  $tr.append($name, $food, $ctrl, $nuke, $arrows);
  $('table').append($tr);
}