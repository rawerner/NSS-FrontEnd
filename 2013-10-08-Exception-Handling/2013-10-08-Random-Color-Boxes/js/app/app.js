'use strict';

var timer = 0;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();

  $('#start').click(start);
  $('#stop').click(stop);
}

function start()
{
  var delay = $('#delay').val();
  delay = parseInt(delay, 10) * 1000;
  timer = setInterval(createColor, delay);
}

function createColor(){
  var dimensions = $('#dimensions').val();
  dimensions = dimensions.split(', ');
  var height = dimensions[0];
  var width = dimensions[1];

  var $box = $('<div>');
  $box.addClass('box');
  $box.css('width', width).css('height', height);
  $('#colors').prepend($box);

  var rd = Math.random() * 256;
  rd = Math.floor(rd);
  var bl = Math.random() * 256;
  bl = Math.floor(bl);
  var gr = Math.random() * 256;
  gr = Math.floor(gr);
  $box.css('background-color', 'rgb(' + rd + ',' + bl + ',' + gr + ')');


}

function stop(){
  clearInterval(timer);
}
