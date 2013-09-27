function avg(sum_of_items)
{
 return sum_of_items / menu.length;
}

var menu = [];

var name = prompt('Please enter dish name (or blank to continue:');
while(name)
{
  var dish = {}
  dish.name = name;
  dish.type = prompt('Type of dish(i.e. Appetizer, Salad, Lunch, Dinner, Dessert):');
  dish.price = parseFloat(prompt("price?"));
  dish.calories = parseInt(prompt('Calories?'));
  dish.ingredients = prompt('Ingredients?').split(',');
  menu.push(dish);
  name = prompt('Please enter another dish name (or blank to continue:');
}

for(i=0; i < menu.length; i++)
{
  console.log(menu[i].type + ':');
  for(j=0; j < menu.length; j++)
  {
    console.log(menu[j].name + ' (' + menu[j].ingredients + ')  $' + menu[j].price);
  }
}
debugger;
var total_dishes = menu.length;
var total_sections = 0;
var total_calories = 0;
var total_cost_of_dishes = 0;
var total_types = 0;
for(k = 0; k < menu.length; k++)
{
  total_calories += menu[k].calories;
}

for(l = 0; l < menu.length; l++)
{
  total_cost_of_dishes += menu[l].price;
}

for(m = 0; m < menu.length; m++)
{
  total_types += dish[m].type.length
}

console.log('Number of dishes on menu: ' + total_dishes);
console.log('Total calories for all dishes: ' + total_calories);
console.log('Total ingredients in all dishes: ' + total_ingredients);
console.log('Total cost all dishes on menu: ' + total_cost_of_dishes);
console.log('Average cost of a dish: ' + avg(total_cost_of_dishes));
console.log('Average calorie count of a dish: ' + avg(total_calories));