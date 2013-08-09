$(document).ready(function(){
   $('#slideshow').cycle({
   	  timeout: 0,
   	  fx:      'scrollRight',
   	  easing:  'easeInOutBack', 
    	speed:   300, 
    	startingSlide: 0 
   });
   $('a#tumbado').click(function(event) { 
   	 event.preventDefault();
   	 $('#slideshow').cycle(0); 
     return false; 
   });
   $('a#sentado').click(function(event) { 
   	 event.preventDefault();
   	 $('#slideshow').cycle(1); 
     return false; 
   });
   $('a#mueve').click(function(event) { 
   	 event.preventDefault();
   	 $('#slideshow').cycle(2); 
     return false; 
   });
   $('#video_boton').click(function(event){
    $('.video-img').fadeTo(500, 0).hide();
    $('.video-player').fadeTo(900, 1);
    $('#imagen-video').stop().animate({"opacity": "0.2"}, "slow")
    return false;
   });

});

