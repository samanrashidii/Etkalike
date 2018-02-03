$(document).ready(function(){

// Search Overlay

$('.search input').on('focus', function(){
	$('.search-overlay').addClass('active');
}).on('blur', function(){
	$('.search-overlay').removeClass('active');
});

});