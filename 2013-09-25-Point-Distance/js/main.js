debugger;
var points = [];

for(i = 0; i < 2; i++)
{
  var point = {}
  point.x = parseInt(prompt('Please give an X-Coordinate:'));
  point.y = parseInt(prompt('Please give an Y-Coordinate:'));
  points.push(point)
}

  var a = points[1].x - points[0].x;
  var b = points[1].y - points[0].y;

var distance = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

console.log('the distance between the two points is: ' + distance)





var total_rooms = rooms.length;

for(i=0; i < rooms.length; i++)
  {
   var total_windows += rooms[i].window;
   var total_sqft += area(rooms[i].width, rooms[i].length);
  }

var window_cost = total_windows * 250;
var rooms_cost =  total_sqft * 200;
var total_cost = total_sqft + total_windows

Console.log('Total Rooms: ' + total_rooms);
Console.log('Total windows: ' + total_windows);
Console.log('Total sqft: ' + total_sqft);
Console.log('Window Cost: ' + window_cost);
Console.log('Rooms Cost: ' + rooms_cost);
Console.log('Total Cost: ' + total_cost);