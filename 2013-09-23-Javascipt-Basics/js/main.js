/* this is a multi-line
   javascript
   comment
*/

var first_name = prompt('What is your first name?');
var last_name = prompt('What is your last name?');
var gender = prompt('What is your gender');
var age = prompt("What's your age?")
age = parseInt(age)
var bday_month = prompt("What month were you born in?")
var current_month = prompt("what month is it right now")
var full_name = first_name + ' ' + last_name

//debugger;

var test1 = prompt('Score for Test 1?');
test1 = parseFloat(test1);

var test2 = prompt('Score for Test 2?');
test2 = parseFloat(test2);

var test3 = prompt('Score for Test 3?');
test3 = parseFloat(test3);

var sum = 0;
sum += test1;
sum += test2;
sum += test3;

var average = sum / 3;

if(average < 70)
  console.log('failed');
else if((average >= 70) && (average < 80))
  console.log('you made a C');
else if ((average >=80) && (average < 90))
  console.log('You made a B');
else
  console.log('you made an A');

var average= (test1 + test2 + test3) / 3;

console.log("Your full name is: " + full_name )
console.log("The average of your test scores is : " + average)

var null_variable = null, undefined_variable;

if((first_name == 'Rachel') && (last_name = 'Werner'))
 console.log('hey, I recognize you!');

if((gender == 'female') && (age >= 21))
  console.log('free drinks, ladies night! woot!');
else if ((gender == 'male') && (age >=21))
  console.log('looks like you are buying!');
else
  console.log('not old enough to drink');

var can_have_cake = (current_month == bday_month);
var cake = can_have_cake ? "Chocolate" : "Vanilla";
console.log("Marie Antoinette says that you are eating " + cake);

switch(bday_month)
{
  case "January":
    console.log('you are a capricorn');
    break;
  case "Frebruary":
    console.log('you are a pieces');
    break;
  default:
    console.log('you are not of this world, god speed!');
}