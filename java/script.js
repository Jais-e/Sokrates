


$(document).ready(function(){

      // Script for horizontal scroll on mousewheel //
    $('.all-content').mousewheel(function(e, delta) {
      var x = $(window).width();
      this.scrollLeft -= (delta * x); e.preventDefault();
    });

    $('#navigate').click(function(){
    $('.mobile-nav').animate({bottom: '0px'});

    });

    $('#mobile-menu li a').click(function(){
     $('.mobile-nav').animate({bottom: '-130px'});
     menuPosition = 'down';
     });


})