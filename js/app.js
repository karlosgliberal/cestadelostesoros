$(document).ready(function(){
   $('#slideshow').cycle({
   	  timeout: 0,
   	  fx:      'scrollRight',
   	  easing:  'easeInOutBack', 
    	speed:   300, 
    	startingSlide: 0 
   });

    $("#s-uno").mouseenter(function(){
          console.log('name');
    }); 

   var quitarClase = function(){
      $('.evento').each(function(e){
        $(this).removeClass('evento');
      })
   };

   $('a#tumbado').click(function(event) { 
   	 event.preventDefault();
   	 $('#slideshow').cycle(0);
     quitarClase();
     $(this).addClass('evento');
     return false; 
   });

   $('a#sentado').click(function(event) { 
   	 event.preventDefault();
     quitarClase();
     $(this).addClass('evento');
   	 $('#slideshow').cycle(1); 
     return false; 
   });
   $('a#mueve').click(function(event) { 
   	 event.preventDefault();
     quitarClase();
     $(this).addClass('evento');
   	 $('#slideshow').cycle(2); 
     return false; 
   });

   $('#video_boton').click(function(event){
    $('.video-img').fadeTo(500, 0).hide();
    $('.video-player').fadeTo(900, 1);
    $('.video-frame').stop().animate({"opacity": "0.4"}, "slow");
    //player.api('play');
    return false;
   });

   $('.form-close').click(function(event){
    //player.api('pause');
    $('.video-frame').stop().animate({"opacity": "0"}, "slow");
    $('.video-player').fadeTo(900, 0);
    $('.video-img').fadeTo(500, 1).show();
   });
});
