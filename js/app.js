$(document).ready(function(){

if(!$.browser){
    $.browser={
      chrome:false,
      mozilla:false,
      opera:false,
      msie:false,
      safari:false
    };
    var ua=navigator.userAgent;
        $.each($.browser,function(c,a){
        $.browser[c]=((new RegExp(c,'i').test(ua)))?true:false;
            if($.browser.mozilla && c =='mozilla'){$.browser.mozilla=((new RegExp('firefox','i').test(ua)))?true:false;};
            if($.browser.chrome && c =='safari'){$.browser.safari=false;};
        });
};


  $('.video-player').append('<iframe id="player" src="http://player.vimeo.com/video/71340975?api=1&amp;player_id=player" width="800" height="400" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
  var iframe = $("iframe").get(0);
  var player = $f(iframe);
  player.addEvent('ready', function(){ 
    if($.browser.mozilla){
      player.api('play');
    }
  });

  $('ul.nav a').smoothScroll({
      afterScroll: function() {
        $('ul.nav li a').each(function(){
          $(this).removeClass('active');
        })

        $(this).addClass('active')
      },
      easing: 'swing',
      speed: 2000,
      autoCoefficent: 3

    });



$('a.scroll').smoothScroll({
      afterScroll: function() {
      },
      easing: 'swing',
      speed: 2000,
      autoCoefficent: 3

    });



   $('#slideshow').cycle({
   	  timeout: 0,
   	  fx:      'scrollRight',
   	  easing:  'easeInOutBack', 
    	speed:   300, 
    	startingSlide: 0 
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
    $('.video-frame').stop().animate({"opacity": "0.2"}, "slow");
    player.api('play');
    return false;
   });

   $('.form-close').click(function(event){
    player.api('pause');
    $('.video-player').fadeTo(900, 0);
    $('.video-img').fadeTo(500, 1).show();
    $('.video-frame').stop().animate({"opacity": "1"}, "slow");
   });
   $('.fc-slideshow').mouseenter(function(){
      $('#uno').removeClass('evento-beneficios');
      $('.icon-arrow-left').removeClass('primerhover');
   });
});
