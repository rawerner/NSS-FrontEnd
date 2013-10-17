'use strict';

// Firebase Schema
var Δdb;
var Δexercises;

// Local Schema
var db = {};
db.exercises = [];

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://exercise-rw.firebaseio.com/');
  Δexercises = Δdb.child('exercises');
  Δexercises.on('child_added', dbAddedExercise);
  $('#add').click(clickAddExercise);

}

function clickAddExercise(){
  var name = $('#exercise').val();
  var reps = parseInt($('#reps').val());

  var exercise = {};
  exercise.name = name;
  exercise.reps = reps;
  Δexercises.push(exercise);

  $('#exercise').val('');
  $('#reps').val('');
}

function dbAddedExercise(snapshot){
 var exercise = snapshot.val()
 console.log(exercise);
 db.exercises.push(exercise);
 htmlcreateList(exercise);
}

function htmlcreateList(exercise){
  var ul = "<ul class ='list'><li class='name'></li><li class ='reps'></li></ul>";
  var $ul = $(ul);

  $('#listing').append($ul);

  var name = exercise.name;
  var reps = exercise.reps;

  $ul.children('.name').text(name);
  $ul.children('.reps').text(reps);





}