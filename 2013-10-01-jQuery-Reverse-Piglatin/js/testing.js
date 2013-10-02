
test( "piglatin", function() {
deepEqual(piglatin("hello"), 'elloha' , "convert to piglatin" );
});

test( "make array and reverse it", function() {
  var words = "hello, hola, gutentag"
deepEqual(make_array_and_reverse(words), "utentagga; olaha; elloha" , "converts strings to array and reverses order" );
});