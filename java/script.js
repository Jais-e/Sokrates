$(document).ready(function(){

      // Script for horizontal scroll on mousewheel //
    $('.all-content').mousewheel(function(e, delta) {
      this.scrollLeft -= (delta * 1000); e.preventDefault();
    });



    $('.mobile-nav').click(function(){
     $(this).css({'bottom':'0px', 'height':'70%', 'width':'60%', 'left':'20%'});
     console.log('click');
});



  });
