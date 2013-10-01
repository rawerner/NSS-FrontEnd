function piglatin(string)
{
  return string.slice(1) + string[0] + "a";
}

$(document).ready(initialize);

function initialize(){
  $('#pig').click(convert_to_piglatin);
}


function convert_to_piglatin()
{
  var original = $('#original').val();
  var piglatinit = $('#piglatin').text(piglatin(original));
}

