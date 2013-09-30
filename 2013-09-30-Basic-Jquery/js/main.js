$(document).ready(initialize);


function alert_me()
{
  alert('you have alerted me');
}

function change_div_text()
{
  var name = $('#name').val();
  var color = $('#color').val();
  $('#b').text(name).css('background-color', color);
}

function age_verify()
{
  var age = $('#age').val();
  age = parseInt(age);

  if(age < 21)
    $('#age_div').text('No drink for you').css('background-color', 'red');
  else
    $('#age_div').text('Drink up').css('background-color', 'green');
    $('#age_div').text('Drink up').css('color', 'white');
}

function initialize() {
  $('#clicker').click(change_div_text);
  $('#age_check').click(age_verify);
  // $('div').css('background-color', 'red');
  // $('div').css('font-size', '25px');
  // $('div').css('color', 'yellow');

  // var color = prompt('What color do you want?');
  // $('div').css('background-color', color);
  //var size = prompt('What size?');
  //$('div').css('font-size', size);

  // var selector = prompt('which div?');
  // var cls = prompt('Class to add?');
  // var new_text = prompt('what would you like to say?')
  // $(selector).addClass(cls);
  // $(selector).text(new_text);

  // var selector_to_hide = prompt('Which node to you want to hide?');
  // $(selector_to_hide).hide();


}