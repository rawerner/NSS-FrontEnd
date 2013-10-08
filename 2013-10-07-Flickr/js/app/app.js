'use strict';

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#search').click(searchFlickr);
  $('#photos').on('dblclick', '.photo', removeImage);
  $('#photos').on('click', '.photo', imageSelect);
  $('#clear').click(removeAllImages);
  $('#clearselected').click(clearSelected);
  $('#saved').click(savePhotos);
}

function savePhotos()
{
  var $saved = $('.selected');
  $saved.removeClass('selected');
  $('#saved-photos').prepend($saved);
}

function clearSelected(){
  $('.selected').remove();
}

function imageSelect(){
  $(this).toggleClass('selected');
}


function searchFlickr()
{
  var API_KEY = '305348f6d945cf16245ef4fb00c45cd6';
  var PER_PAGE = '20';
  var page = 1;
  var query = $('#query').val();
  var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+ API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
  $.getJSON(url, results);
}

function results(data){
  for(var i = 0; i < data.photos.photo.length; i++){
    createImage(data.photos.photo[i]);
  }
}

function createImage(photo){
  var url = 'url(http://farm'+ photo.farm +'.static.flickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_m.jpg)';
  var $div = $('<div>');
  $div.addClass('photo');
  $div.css('background-image', url);
  $('#photos').prepend($div);
}

function removeImage()
{
  $(this).remove();
}

function removeAllImages()
{
  $('#photos').remove();
}