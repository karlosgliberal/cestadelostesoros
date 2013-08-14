$(document).ready(function(){
   $('#slideshow').cycle({
   	  timeout: 0,
   	  fx:      'scrollRight',
   	  easing:  'easeInOutBack', 
    	speed:   300, 
    	startingSlide: 0 
   });
   var quitarClase = function(){
      $('.evento').each(function(e){
            console.log(this);
        $(this).removeClass('evento');
      })
   }
   
   //$('.como1').addClass('active-como-1'); 
   $('a#tumbado').click(function(event) { 
   	 event.preventDefault();
   	 $('#slideshow').cycle(0);
     quitarClase();
     $(this).addClass('evento');
     // $('.como2').removeClass('active-como-2');
     // $('.como3').removeClass('active-como-3');
     // $('.como1').addClass('active-como-1'); 
     return false; 
   });
   $('a#sentado').click(function(event) { 
   	 event.preventDefault();
     quitarClase();
     $(this).addClass('evento');
     // $('.como1').removeClass('active-como-1');
     // $('.como3').removeClass('active-como-3');
     // $('.como2').addClass('active-como-2'); 
   	 $('#slideshow').cycle(1); 
     return false; 
   });
   $('a#mueve').click(function(event) { 
   	 event.preventDefault();
     quitarClase();
     $(this).addClass('evento');
     // $('.como1').removeClass('active-como-1');
     // $('.como2').removeClass('active-como-2');
     // $('.como3').addClass('active-como-3'); 
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
