function piglatin(string)
{
  return string.slice(1) + string[0] + "a";
}

function make_array_and_reverse(string_words)
{
 var words = string_words.split(', ')
 var reversed_words = words.reverse();
 for(i = 0; i < reversed_words.length; i++)
   reversed_words[i] = piglatin(reversed_words[i]);
 var new_sentence = reversed_words.join('; ');
 return new_sentence;

}

$(document).ready(initialize);

function initialize(){
  $('#btn').click(convertit);
}

function convertit()
{
  var original = $('#original').val();
  var modified = make_array_and_reverse(original);
  $('#convert').val(modified);

}