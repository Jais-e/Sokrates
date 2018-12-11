'use strict';

$(document).ready(function(){


      // Script for horizontal scroll on mousewheel //
    $('.all-content').mousewheel(function(e, delta) {
      var x = $(window).width();
      this.scrollLeft -= (delta * x); e.preventDefault();
    });

    // Make mobile menu slide up when clicking on icon //
    $('#navigate').click(function(){
    $('.mobile-nav').animate({bottom: '0px'});
    });

     // Make mobile menu slide down when clicking anywhere on page //
     $(document).click(function() {
     $('.mobile-nav').animate({bottom: '-130px'});
     });

     // Avoid mobile menu to slide down when clicking on icon //
     $('#navigate').click(function(e) {
    e.stopPropagation();

    });

    /*
      $('#video1').each(function(){

    	// Is this element visible onscreen?
    	var visible = $(this).visible();

      	if (visible == true){	// Set the visible status into the span.
        console.log('pffff');
        $('#hejVid').play();
        }

    });
    */






});

})