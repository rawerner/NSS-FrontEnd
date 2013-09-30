/*test( "name of function", function() {
deepEqual( actual_value, expected_value, "What this is test is doing" );
deepEqual( actual_value, expected_value, "testing this function with different arguments" );
});*/

test( "1 + 1", function() {
deepEqual(1 + 1, 2, "adding 1 and 1");
});

test( "nashville[0]", function() {
deepEqual("nashville"[0], "n", "finding first letter in string");
});

test( "add_three", function() {
deepEqual(add_three(5), 8, "adding 3 to 5");
deepEqual(add_three(7), 10, "adding 3 to 7");
});

test( "square", function() {
deepEqual(square(3), 9, "square 3");
});

test( "area", function() {
deepEqual(area(3, 5), 15, "area of 2 and 5");
deepEqual(area(7, 5), 35, "area of 7 and 5");
});

test( "volume", function() {
deepEqual(volume(3, 5, 2), 30, "volume of 2 and 5 and 2");
deepEqual(volume(7, 5, 2), 70, "volume of 7 and 5 and 2");
});

test( "power", function() {
deepEqual(power(2, 0), 1, "2 to the 0");
deepEqual(power(2, 1), 2, "2 to the 1");
deepEqual(power(2, 2), 4, "2 to the 2");
deepEqual(power(2, 3), 8, "2 to the 3");
});

test( "greeting", function() {
deepEqual(greeting("hello", "janet"), "hello, janet!", "saying hello to janet");
deepEqual(greeting("hola", "Pablo"), "hola, Pablo!", "saying hola to Pablo");
});

test( "pig_latin", function() {
deepEqual(pig_latin("hello"), "elloha", "hello in pig lating");
});

test( "pig_greeting", function() {
deepEqual(pig_greeting("hello", "janet"), "elloha, anetja!", "saying hello to janet in pig latin");
});

test( "pig_sentence", function() {
  var sentence = "four score and seven years ago";
  var expected = "ourfa coresa ndaa evensa earsya goaa";
deepEqual(pig_sentence(sentence), expected, "converting to piglatin");
});
