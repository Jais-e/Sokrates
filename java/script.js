


$(document).ready(function(){

      // Script for horizontal scroll on mousewheel //
    $('.all-content').mousewheel(function(e, delta) {
      var x = $(window).width();
      this.scrollLeft -= (delta * x); e.preventDefault();
    });
    // Animate mobile menu up when clicking on compas icon//
    $('#navigate').click(function(){
    $('.mobile-nav').animate({bottom: '0px'});

    });
    // Animate mobile menu down when clicking menu item //
    $('#mobile-menu li a').click(function(){
     $('.mobile-nav').animate({bottom: '-130px'});
     menuPosition = 'down';
     });
     // Make mobile menu slide down when clicking anywhere on page //
         $(document).click(function() {
         $('.mobile-nav').animate({bottom: '-130px'});
         });

         // Avoid mobile menu to slide down when clicking on icon //
         $('#navigate').click(function(e) {
        e.stopPropagation();

        });

});
