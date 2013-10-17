'use strict';
//datbase
var Δdb;
var Δpeople;

//local
var db = {};
db.people = [];

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://addressbook-rw.firebaseio.com/');
  Δpeople = Δdb.child('people');
  $('#addPersonBtn').click(addPerson);
  Δpeople.on('child_added', boxAdded);
}

function boxAdded(snapshot){
  var data = snapshot.val();
  db.people.push(data);
  createBox(data);
}

function addPerson(){

  var name = $('#name').val();
  var address = $('#address').val();
  var website = $('#website').val();
  var email = $('#email').val();
  var photourl = $('#photoUrl').val();

  var person = {};
  person.name = name;
  person.address = address;
  person.website = website;
  person.email = email;
  person.photoUrl = photourl;

  Δpeople.push(person);
}

function createBox(person){
  var box = '<ul class="box"><li class="photoUrl"><img id="photo"></li><li class="name"></li><li class="address"></li><li class="website"><a class="website"></a></li><li class="email"><a class="email"></a></li></ul>';
  var $box = $(box);

  $('#listing').prepend($box);
  $box.children.children('img').attr('src', person.photoUrl);
  $box.children('.name').text(person.name);
  $box.children('.address').text(person.address);
  $box.children.children('.website').text(person.website).attr('href', 'http://' + person.website);
  $box.children.children('.email').text(person.email).attr('href', 'mailto:' + person.email);

  $('#listing').css('height', 'auto');
}



