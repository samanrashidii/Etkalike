$(document).ready(function(){

// Banner Slider

var slider = new MasterSlider();
slider.setup('masterslider' , {
  width:1920,
  height:580,
  loop:true,
  autoplay:true,
  fullwidth:true,
  overPause:false,
  centerControls:false,
  speed:16,
  view:'fade'
});
slider.control('bullets' ,{autohide:false });

// Special Offer    
 
var offersCarousel = new MasterSlider();
offersCarousel.setup('offers-carousel' , {
    width:740,
    height:400,
    space:10,
    loop:true,
    autoplay:false,
    overPause:true,
    view:'prtialwave'
});
 
offersCarousel.control('arrows');  
offersCarousel.control('slideinfo',{insertTo:"#partial-view" , autohide:false,});
offersCarousel.control('circletimer' , {color:"#FFFFFF" , stroke:9});

// Proucts Carousel

$('.product-items').owlCarousel({
	autoWidth:true,
	autoplay:true,
	autoplayTimeout: 4000,
	autoplaySpeed: 700,
	autoplayHoverPause: true,
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
})

});