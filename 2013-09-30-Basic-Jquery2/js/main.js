$(document).ready(initialize);

function initialize()
{
  $('#button1').click(change_green);
  //$('#add').click(add_numbers);
  $('#colorbtn').click(color_dip);
  $('#makedivs_btn').click(make_divs);
}

function make_divs()
{
  var num = $('#quantity').val();
  for(var i =0; i < num; i++)
    $('#container').append('<div class="box">this is a div</div>');
}

function change_green()
{
 $('#green').css('background-color', 'green');
}

// function count_chars()
// {
//   var name = $('#name_txt').val();
//   var length = name.length;
//   $('#name_div').text(name + 'is ' + length + ' chars long');
// }

// function add_numbers()
// {
//   debugger;
//   var number1 = parseInt($('#num1').val());
//   var number2 = parseInt($('#num2').val());
//   var sum = number1 + number2;
//   $('#calculator').text('Your total is ' + sum);
// }

function color_dip()
{
debugger;
var colors = $('#colors').val().split(', ');
$('#one').css('background-color', colors[0])
$('#two').css('background-color', colors[1])
$('#three').css('background-color', colors[2])

}