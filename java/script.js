$(document).ready(function(){

      // Script for horizontal scroll on mousewheel //
    $('.all-content').mousewheel(function(e, delta) {
      this.scrollLeft -= (delta * 1000); e.preventDefault();
    });


  });
