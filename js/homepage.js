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
    view:'prtialwave'
});
 
offersCarousel.control('arrows');  
offersCarousel.control('slideinfo',{insertTo:"#partial-view-1" , autohide:false});
offersCarousel.control('circletimer' , {color:"#FFFFFF" , stroke:9});

});