


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
    
    // pop up boks til produkter // 
    
    // Get the modal
var modal = document.getElementById('isinfo');

// Get the button that opens the modal
var btn = document.getElementById("is");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});


