function square(x)
{
  return x * x;
}

function cube(x)
{
  return square(x) * x;
}

function area_rec(width, height)
{
  return width * height
}

function area_sqr(side)
{
  return square(side);
}

function area_triangle(width, height)
{
  return area_rec(width, height) / 2
}

function area_circle(radius)
{
  return Math.PI * radius * radius;
}

function cuft_to_gallons(cubic_feet)
{
 return (7.4802) * cubic_feet;
}

function volume_cyl(radius, depth)
{
  return area_circle(radius) * depth;
}
var diameter = 30;
var depth = 9;
var gallons = cuft_to_gallons(volume_cyl(diameter/2, depth));
console.log('You have ' + gallons + " gallons of water in your pool");


///

var total_rooms =
function total_rooms(total)
{
  return rooms.length;
}

function total_window(total)
{
  var i = 0;
  while(i < rooms.length)
   sum += rooms[i].window
  return sum;
}

function total_sq_footage(length, width)
{
  var j = 0;
  var area = 0
  while(i < rooms.length)
    area += rooms[j].length * rooms[j].width;
  return area;
}

function window_cost(total)
{
  return 250 * total_windows(total);
}

function room_cost(total)
{
  return total_rooms(total) * 200;
}

function total_cost(total)
{
  return window_cost + room_cost;
}

console.log('Total rooms: ' + total_rooms())