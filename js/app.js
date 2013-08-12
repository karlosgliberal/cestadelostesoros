$(document).ready(function(){
  var iframe = $('#player')[0];
  var player = $f(iframe);
  player.addEvent('ready', function() {
  });

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
    $('.video-frame').stop().animate({"opacity": "0.4"}, "slow");
    player.api('play');
    return false;
   });
   $('.form-close').click(function(event){
    player.api('pause');
    $('.video-frame').stop().animate({"opacity": "0"}, "slow");
    $('.video-player').fadeTo(900, 0);
    $('.video-img').fadeTo(500, 1).show();
   });
});
