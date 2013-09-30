test( "Filter Even Numbers", function() {
  var numbers = _.range(10);
  var expected = [0, 2, 4, 6, 8]
deepEqual(filter_evens(numbers), expected, " Testing the Filter_evens Function" );
});

test( "Filter Odd Numbers", function() {
  var numbers = _.range(10);
  var expected = [1, 3, 5, 7, 9]
deepEqual(filter_odds(numbers), expected, " Testing the Filter_odds Function" );
});

test( "Filter short strings", function() {
  var strings = ['hello', 'there', 'a', 'the', 'cat', 'elephant', 'encyclopedia'];
  var expected = ['a', 'the', 'cat'];
deepEqual(filter_shortstrings(strings), expected, " Testing short strigns under 4 chars." );
});

test( "Filter 'A' Strings", function() {
  var astrings = ['hello', 'there', 'a', 'the', 'cat', 'elephant', 'encyclopedia', 'apple', 'Aardvark'];
  var expected = ['a', 'apple', 'Aardvark'];
deepEqual(filter_a(astrings), expected, "Testing strings should begin with letter 'a'" );
});

test( "Find a String", function() {
  var strings = ['hello', 'there', 'a', 'the', 'cat', 'elephant', 'encyclopedia', 'apple', 'Aardvark'];
deepEqual(find_string(strings, "elephant"), 'elephant', "should find the elephant" );
deepEqual(find_string(strings, "Aardvark"), 'Aardvark', "should find the Aardvark" );
deepEqual(find_string(strings, "cat"), 'cat', "should find the cat" );

});

test( "Find a String ending in a particular letter", function() {
  var strings = ['dog', 'cats', 'lion', 'tigers'];
deepEqual(find_string_ending_letter(strings, 's'), 'cats', "find strings ending letter" );
});

test( "Simple Adding", function() {
deepEqual(1 + 1, 2, " Adding 1+1" );
});

test( "First letter", function() {
deepEqual("Parthenon"[0], "P", " Getting first letter form string" );
});

test( "Add 5", function() {
deepEqual(add_five(3), 8, " Adding 5 to a number" );
deepEqual(add_five(5), 10, " Adding 5 to a number" );
deepEqual(add_five(-4), 1, " Adding 5 to a number" );
});

test( "Square", function() {
deepEqual(square(5), 25, "Squaring a number" );
});

test( "Length x Width", function() {
deepEqual(area(3,5), 15, "finding area" );
});

test( "Area x Height", function() {
deepEqual(volume(3,3,3), 27, "finding Volume" );
});

test( "Power", function() {
deepEqual(power(2,0), 1, "finding Power" );
deepEqual(power(2,4), 16, "finding Power" );
deepEqual(power(2,1), 2, "finding Power" );
});