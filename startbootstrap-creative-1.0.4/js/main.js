
(function() {
 
 function Slideshow( element ) {
  this.el = document.querySelector( element );
  this.init();
 }
 
 Slideshow.prototype = {
  init: function() {
   this.wrapper = this.el.querySelector( ".slider-wrapper" );
   this.slides = this.el.querySelectorAll( ".slide" );
   this.previous = this.el.querySelector( ".slider-previous" );
   this.next = this.el.querySelector( ".slider-next" );
   this.index = 0;
   this.total = this.slides.length;
   this.timer = null;
   
   this.action();
   this.stopStart(); 
  },
  _slideTo: function( slide ) {
   var currentSlide = this.slides[slide];
   currentSlide.style.opacity = 1;
   
   for( var i = 0; i < this.slides.length; i++ ) {
    var slide = this.slides[i];
    if( slide !== currentSlide ) {
     slide.style.opacity = 0;
    }
   }
  },
  action: function() {
   var self = this;
   self.timer = setInterval(function() {
    self.index++;
    if( self.index == self.slides.length ) {
     self.index = 0;
    }
    self._slideTo( self.index );
    
   }, 5000);
  },
  stopStart: function() {
   var self = this;
  }
  
  
 };
 
 document.addEventListener( "DOMContentLoaded", function() {
  
  var slider = new Slideshow( "#main-slider" );
  
 });
 
 
})();

/*Menu fixe pas fixe*/

$(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 500) {
                $("#menu").addClass("fixed");
            } else {
                $("#menu").removeClass("fixed");
            }
        });


/*defilement fluide*/

$('a[href^="#"]').click(function(){
 var the_id = $(this).attr("href");

 $('html, body').animate({
  scrollTop:$(the_id).offset().top
 }, 'slow');
 return false;
});