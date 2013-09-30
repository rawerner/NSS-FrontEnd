function filter_evens(numbers)
{
 return _.filter(numbers, function(num){return (num % 2) == 0});
}

function filter_odds(numbers)
{
 return _.filter(numbers, function(num){return (num % 2) !== 0});
}

function filter_shortstrings(strings)
{
 return _.filter(strings, function(string){return (string.length < 4)});
}

function filter_a(astrings)
{
 return _.filter(astrings, function(string){return (string[0].toLowerCase() == 'a')});
}

function find_string(strings, word)
{
 return _.find(strings, function(string){return string == word});
}

function find_string_ending_letter(strings, letter)
{
 return _.find(strings, function(string){return string[string.length - 1] == letter;});
}

function add_five(number)
{
 return number + 5;
};

function square(number)
{
 return number * number;
};

function area(l, w)
{
 return l * w;
};

function volume(l, w, h)
{
 return area(l , w) * h;
}

function power(base, exponent)
{
  var answer = 1;

  for(var x = 0; x < exponent; x++)
    answer *= base;

  return answer;
};


