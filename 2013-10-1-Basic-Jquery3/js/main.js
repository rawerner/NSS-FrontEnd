function add(num1, num2)
{
 return num1 + num2
}

$(document).ready(initialize);

function initialize()
{
 $('#add').click(compute_sum);
}

function compute_sum(num1, num2)
{
  debugger;
  var num1 = parseInt($('#num1').val());
  var num2 = parseInt($('#num2').val());
  $('#result').text(add(num1, num2)).css('background-color', 'green')
}