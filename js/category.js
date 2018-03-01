$(document).ready(function(){

// Banner Slider

var slider = new MasterSlider();
slider.setup('masterslider' , {
  width:750,
  height:320,
  loop:true,
  autoplay:true,
  fullwidth:true,
  overPause:true,
  centerControls:false,
  speed:16,
  view:'fade'
});
slider.control('bullets' ,{autohide:false });

// Proucts Carousel

$('.product-items').owlCarousel({
	autoWidth:true,
	autoplay:true,
	autoplayTimeout: 5000,
	autoplaySpeed: 700,
    loop:false,
    margin:23,
    rewind : true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// Brands Carousel

$('.brand-items').owlCarousel({
	autoWidth:true,
	autoplay:true,
	autoplayTimeout: 4000,
	autoplaySpeed: 500,
	center:true,
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:7
        }
    }
});

});