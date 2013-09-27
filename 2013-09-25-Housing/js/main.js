function area(width, length)
{
  return width * length;
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



var rooms = [];

name = prompt('Please enter the name of your first room or blank to continue');
while(name)
{
  var room = {}
  room.name = name;
  room.window = parseInt(prompt('How may windows does you room have?'));
  room.length = parseInt(prompt('what is the length of the room?'));
  room.width = parseInt(prompt('what is the width of the room?'));
  rooms.push(room);
  name = prompt('Please enter the name of your next room');
}

var total_rooms = rooms.length;
var total_windows = 0;
total_sqft = 0;
for(i=0; i < rooms.length; i++)
  {
   total_windows += rooms[i].window;
   total_sqft += area(rooms[i].width, rooms[i].length);
  }

var window_cost = total_windows * 250;
var rooms_cost =  total_sqft * 200;


var pool = {}
  pool.diameter = parseInt(prompt('Please enter the diameter of your pool:'));
  pool.depth = parseInt(prompt('What is the depth of your pool?'));

var gallons = cuft_to_gallons(volume_cyl(pool.diameter/2, pool.depth));

var pool_cost = gallons * .25
var total_cost = rooms_cost + window_cost + pool_cost;

console.log('Total Rooms: ' + total_rooms);
console.log('Total windows: ' + total_windows);
console.log('Total sqft: ' + total_sqft);
console.log('Window Cost @ $250/window: ' + window_cost);
console.log('House Cost @ $200/sqft: ' + rooms_cost);
console.log('Pool Cost: ' + pool_cost);
console.log('Total Cost(including window and pool: ' + total_cost);