


$(document).ready(function() {

  // Script for horizontal scroll on mousewheel //
  $('.all-content').mousewheel(function(e, delta) {
    var x = $(window).width();
    this.scrollLeft -= (delta * x);
    e.preventDefault();
  });
  // Animate mobile menu up when clicking on compas icon//
  $('#navigate').click(function() {
    $('.mobile-nav').animate({
      bottom: '0px',
      width: '35%',
      left: '32.5%'
    }, 200);
    $('.mobile-nav').css('background-size', 'cover');
  });

  // Animate mobile menu down when clicking menu item //
  $('#mobile-menu li a').click(function() {
    $('.mobile-nav').animate({
      bottom: '-200px', width: '20%', left: '40%'

    });
    $('.mobile-nav').css('background-size', 'contain');
  });

  // Make mobile menu slide down when clicking anywhere on page //
  $(document).click(function() {
    $('.mobile-nav').animate({
      bottom: '-200px', width: '20%', left: '40%'
    });
    $('.mobile-nav').css('background-size', 'contain');
  });

  // Avoid mobile menu to slide down when clicking on icon //
  $('#navigate').click(function(e) {
    e.stopPropagation();

  });


  // Product pop-up //


  $('#is').click(function() {
    console.log('is');
    $('#is').css('visibility', 'hidden');
    $('#isinfo').fadeIn(300).show();
  });

  $('#kaffe').click(function() {
    console.log('kaffe');
    $('#kaffe').css('visibility', 'hidden');
    $('#kaffeinfo').fadeIn(300).show();
  });

  $('#saft').click(function() {
    console.log('saft');
    $('#saft').css('visibility', 'hidden');
    $('#saftinfo').fadeIn(300).show();

  });

  // Close product pop-up - HVORFOR FANDEN VIRKER DET IKKE????? ARRRRRRRRRRGHHHHHHHHHHHH!!!!!!!!//
  $('.close-btn').click(function() {
    $('#is, #kaffe, #saft').css('visibility', 'visible');
    console.log('hej');
    $('.vareinfo').hide();
  });

  // pop up boks til produkter //
  /*
      // Get the modal
  var modal = document.getElementById('isinfo');
  var modal2 = document.getElementById('kaffeinfo');
  // Get the button that opens the modal
  var btn = document.getElementById("is");
  var btn2 = document.getElementById("kaffe");
  var btn3 = document.getElementById("saft");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close")[0];
  var span3 = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  btn2.onclick = function() {
    modal2.style.display = "block";
  }
  btn3.onclick = function() {
    modal3.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
  }
  span3.onclick = function() {
    modal3.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";modal2.style.display = "none";modal3.style.display = "none";
    }
  }
  */
});
