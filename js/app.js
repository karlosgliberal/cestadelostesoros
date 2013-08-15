$(document).ready(function(){
/*
  $(window).stellar({
     // Set scrolling to be in either one or both directions
  horizontalScrolling: false,
    verticalScrolling: true,
    
    // Set the global alignment offsets
    horizontalOffset: 0,
    verticalOffset: 0,
    
    // Refreshes parallax content on window load and resize
    responsive: true,
    
    // Select which property is used to calculate scroll.
    // Choose 'scroll', 'position', 'margin' or 'transform',
    // or write your own 'scrollProperty' plugin.
    scrollProperty: 'scroll',
    
    // Select which property is used to position elements.
    // Choose between 'position' or 'transform',
    // or write your own 'positionProperty' plugin.
    positionProperty: 'position',
    
    // Enable or disable the two types of parallax
    parallaxBackgrounds: true,
    parallaxElements: true,
    
    // Hide parallax elements that move outside the viewport
    hideDistantElements: true,
    
    // Customise how elements are shown and hidden
    hideElement: function($elem) { $elem.hide(); },
    showElement: function($elem) { $elem.show(); }
    });
*/
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
   $('.fc-slideshow').mouseenter(function(){
      $('#uno').removeClass('evento-beneficios');
      $('.icon-arrow-left').removeClass('primerhover');
   });
});
/*  $.fn.copyCSS = function(source){
    var dom = $(source).get(0);
    var style;
    var dest = {};
    if(window.getComputedStyle){
        var camelize = function(a,b){
            return b.toUpperCase();
        };
        style = window.getComputedStyle(dom, null);
        for(var i = 0, l = style.length; i < l; i++){
            var prop = style[i];
            var camel = prop.replace(/\-([a-z])/g, camelize);
            var val = style.getPropertyValue(prop);
            dest[camel] = val;
        };
        return this.css(dest);
    };
    if(style = dom.currentStyle){
        for(var prop in style){
            dest[prop] = style[prop];
        };
        return this.css(dest);
   };
   if(style = dom.style){
      for(var prop in style){
        if(typeof style[prop] != 'function'){
          dest[prop] = style[prop];
        };
      };
    };
    return this.css(dest);
  };
*/