$(document).ready(function(){
// ** Document Ready Started **

// Test Function //

var Testing = function(testText){
  console.log(testText);
}

// Get the Current Year //

var thisYear = new Date().getFullYear();
$('.current-year').html(thisYear);

// Textarea Character Left //

var charLeft;

$('.textarea-word-tracker textarea').on('keyup load', function () {
  charLeft = 300 - $(this).val().length;
  if (charLeft < 0) {
    charLeft = 0;
  }
  $(this).siblings('span').text(charLeft);
});

$(window).load( function() {
  $('.textarea-word-tracker textarea').each( function () {
    charLeft = 300 - $(this).val().length;
    $(this).siblings('span').text(charLeft);    
  });
});

// Static Content ol li number //

$(window).load(function(){
  var StaticliNumber = $('.static-content ol li').length;
  for(var i = 1; i <= StaticliNumber; i++){
    $('.static-content ol li:nth-child('+i+')').attr('list-number', i+' -');
  }
});

// Number Bullet //

$(window).load(function(){
  var liNumber = $('.number-bullet li').length;
  for(var i = 1; i <= liNumber; i++){
    $('.number-bullet li:nth-child('+i+')').attr('list-number', i+' -');
  }
});

// Switch Button //

$('.switch').on('click', function(){
  $(this).toggleClass('active');
});

// Nav Toggle //

$('.nav-toggle').on('click', function(){
  $(this).toggleClass('active');
});

// Close Button //

$('a.close:not(.overlay-close):not(.message-close)').on('click', function(){
  $(this).parent().hide();
});

// Overlay //

$('.overlay-bttn').on('click', function(){
  var bttnID = $(this).attr('href');
  $(bttnID).toggleClass('active');
  $('body').addClass('hidden-overflow');
});

$('.overlay-close').on('click', function(){
  $(this).parents('.overlay').removeClass('active');
  $('body').removeClass('hidden-overflow');
});

$('.overlay').on('click', function(){
  $(this).removeClass('active');
  $('body').removeClass('hidden-overflow');
});

$('.inner-overlay-box').on('click', function(e){
  e.stopPropagation();
});

// Responsive Table //

$(window).load(function(){
  $('.table.responsive').each(function(){  
    for (var i = 1; i <= $(this).find('th').length ; i++) {
      var thVal = $(this).find('th:nth-child('+i+')').html();
      $(this).find('td:nth-child('+i+')').attr('th-data', thVal);
    };
  });
});

// Message //

$('.message-close').on('click', function(){
  $(this).parents('.message-box').removeClass('active');
});

$('.message-box').on('click', function(){
  $(this).removeClass('active');
});

$('.message').on('click', function(e){
  e.stopPropagation();
});

// Select Menu //

if($(window).width() > 980){
  $(function() {
    $( ".ui-selectmenu" ).selectmenu();
  });
}

// Accordion //

$(function() {
  $( ".accordion" ).accordion();
});

// Form Validate //

$('.number-field').numeric();

// Upload Photo(s) //

// Inline Upload Button Show Text

$('#profile_picture').on('change', function ()
{
    for (var i = 0; i < this.files.length; i++)
    {
        var fileName = this.files[i].name;
        $('span.file-name').text(fileName);
    }
});

// ** Document Ready Finished **
});