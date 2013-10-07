'use strict';

$(document).ready(initialize);

function initialize()
{
  $('#submitTask').click(addTask);
  $('table').on('click', '.checkedbtn', checkedBtn);
  $('table').on('click', '.removebtn', removeBtn);
  $('table').on('click', '.arrowup', arrowUp);
  $('table').on('click', '.arrowdown', arrowDown);
}

function addTask()
{
  var $tr = $('<tr>');
  var $task = $('<td>');
  $task.addClass('task');
  var $date = $('<td>');
  $date.addClass('date');
  var $color = $('<td>');
  $color.addClass('color');
  var $checkbox = $('<td>');
  $checkbox.addClass('checkbox');
  var $remove = $('<td>');
  $remove.addClass('remove');
  var $arrows = $('<td>');
  $arrows.addClass('arrows');

  var $colorboxed = $('<div>');
  $colorboxed.addClass('colorboxed');

  var $checkDone = $('<input>');
  $checkDone.attr('type', 'checkbox');
  $checkDone.addClass('checkdone');

  var $removeBtn = $('<input>');
  $removeBtn.attr('type', 'button');
  $removeBtn.attr('value', 'remove');
  $removeBtn.addClass('removebtn');

  var $arrowup = $('<img>');
  $arrowup.attr('src', 'images/up.png');
  $arrowup.addClass('arrowup');

  var $arrowdown = $('<img>');
  $arrowdown.attr('src', 'images/down.png');
  $arrowdown.addClass('arrowdown');

  $('table').append($tr);
  $tr.append($date, $task, $color, $checkbox, $remove, $arrows);
  $checkbox.append($checkDone);
  $remove.append($removeBtn);
  $arrows.append($arrowup, $arrowdown);
  $color.append($colorboxed);
/*
  var $dateTD = $('table').children('tr').next('tr').children('.date');
  var $taskTD = $('table').children('tr').next('tr').children('.task');
*/
  date($date);
  task($task);
  color($colorboxed);


}

function date($date){
  var dueDate = $('#dueDate').val();
  $date.text(dueDate);
}

function task($task){
  var taskName = $('#taskName').val();
  $task.text(taskName);
}

function color($colorboxed){
  var colorbox = $('#colorBox').val();
  $colorboxed.css('background-color', colorbox);
}

function removeBtn()
{
  $(this).closest('tr').remove();
}

function checkedBtn()
{
  var $checkedbox = $(this);
  var $tr = $checkedbox.closest('tr');

  if($checkedbox.prop('checked'))
  {
    $tr.css('text-decoration', 'line-through').css('background-color', 'grey');
  } else {
    $tr.css('text-decoration', 'inherit').css('background-color', 'inherit');
  }

}

function arrowUp()
{
  var $button = $(this);
  var $taskRow = $button.parent().parent();
  var $newlocation = $taskRow.prev();
  $newlocation.before($taskRow);
}


function arrowDown()
{
  var $button = $(this);
  var $taskRow = $button.parent().parent();
  var $newlocation = $taskRow.next();
  $newlocation.after($taskRow);
}