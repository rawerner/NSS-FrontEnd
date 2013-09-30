function add_three(x)
{
  return x + 3;
}

function square(x)
{
  return x * x;
}

function area(l, w)
{
  return l * w;
}

function volume(l, w, h)
{
  return area(l, w) * h;
}

function power(base, exp)
{
  var temp = 1;
  for(var x = 0; x < exp; x++)
    temp = temp * base;
  return temp;
}

function greeting(salutation, name)
{
  return salutation + ', ' + name + '!';
}

function pig_latin(string)
{
  return string.slice(1) + string[0] + 'a';
}

function pig_greeting(salutation, name)
{
  return pig_latin(salutation) + ', ' + pig_latin(name) + '!';
}

function pig_sentence(sentence)
{
  var words = sentence.split(' ');
  var pig_words = [];
  for(var x = 0; x < words.length; x++)
    pig_words.push(pig_latin(words[x]));
  return pig_words.join(' ');
}