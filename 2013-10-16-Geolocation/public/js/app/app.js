'use strict';

// Firebase Schema
var Δdb;
var Δpositions;
var Δfavorites;

// Local Schema (defined in keys.js)
db.positions = [];
db.path = [];
db.favorites = [];

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase(db.keys.firebase);
  Δpositions = Δdb.child('positions');
  Δfavorites = Δdb.child('favorites');
  Δpositions.on('child_added', dbPositionAdded);
  Δfavorites.on('child_added', dbFavoriteAdded);
  $('#start').click(clickStart);
  $('#addFav').click(clickAddFav);
  $('#erase').click(clickErase);
  $('#stop').click(clickStop);
  initMap(36, -86, 5);
  Δpositions.remove();
  Δfavorites.remove();



}


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //


function dbPositionAdded(snapshot){
  var position = snapshot.val();
  var latLng = new google.maps.LatLng(position.latitude, position.longitude);

  db.positions.push(position);

  if(db.positions.length === 1){
    htmlAddStartIcon(latLng);
    htmlInitializePolyline();
  }

  db.path.push(latLng);
  db.marker.setPosition(latLng);
  htmlSetCenterZoom(latLng);

}

function dbFavoriteAdded(snapshot){
  var favorite = snapshot.val();
  htmlAddFavIcon(favorite);
}


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //


function htmlAddStartIcon(latLng){
  var start = '/img/start.png';
  db.marker = new google.maps.Marker({map: db.map, Position: latLng, icon: start, title: 'Start'});
}

function htmlAddFavIcon(favorite){
  var fav = '/img/fav.png';
  var name = favorite.name;
  var latLng = new google.maps.LatLng(favorite.latitude, favorite.longitude);
  db.marker = new google.maps.Marker({map: db.map, Position: latLng, icon: fav, title: name});
}

function htmlInitializePolyline(){
  var polyline = new google.maps.Polyline({
    map: db.map,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  db.path = polyline.getPath();
}

function htmlSetCenterZoom(latLng){
  db.map.setCenter(latLng);
  db.map.setZoom(19);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function clickStart(){
  var geoOptions = {enableHighAccuracy: true, maximumAge: 10000, timeout: 60000};
  db.watchID = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);

}

function clickAddFav(){
  var name = getValue('#favorite');

  var favorite = {};
  favorite.latitude = db.recentposition.latitude;
  favorite.longitude = db.recentposition.longitude;
  favorite.name = name;

  Δfavorites.push(favorite);
}

function clickErase(){
  Δpositions.remove();
  db.positions = [];
  db.path = [];
}

function clickStop(){
  navigator.geolocation.clearwatch(db.watchID);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function initMap(lat, lng, zoom){
  var mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.SATELLITE};
  db.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function geoSuccess(location) {
  var position = {};
  position.latitude = location.coords.latitude;
  position.longitude = location.coords.longitude;
  position.altitude = location.coords.altitude || 0;
  position.time = moment().format();

  db.recentposition = position;
  Δpositions.push(position);
}

function geoError() {
  console.log('Sorry, no position available.');
}





// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //



function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

function parseUpperCase(string){
  return string.toUpperCase();
}

function parseLowerCase(string){
  return string.toLowerCase();
}

function formatCurrency(number){
  return '$' + number.toFixed(2);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
