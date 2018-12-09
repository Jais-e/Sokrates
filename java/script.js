


$(document).ready(function(){

      // Script for horizontal scroll on mousewheel //
    $('.all-content').mousewheel(function(e, delta) {
      var x = $(window).width();
      this.scrollLeft -= (delta * x); e.preventDefault();
    });

    var menuPosition ;
     $('.mobile-nav').click(function(){
       if (menuPosition = 'down'){
     $(this).animate({bottom: '0px'});
     menuPosition = 'up';
    }});

    $('#mobile-menu li a').click(function(){
      if (menuPosition = 'up'){
    $('.mobile-nav').animate({bottom: '-130px'});
    menuPosition = 'down';
  }});

  });
