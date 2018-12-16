



$(document).ready(function() {

  // play video even if whole file is not loaded //
  var backgroundVideo = document.getElementById('ship-desktop1');
    backgroundVideo.addEventListener('canplaythrough',function(){
      this.play();
    });
    var backgroundVideo = document.getElementById('water-desktop2');
      backgroundVideo.addEventListener('canplaythrough',function(){
        this.play();
      });
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


  // Product pop-ups //

  // Isinfo pop-up + skjul"knap" //
  $('#is').click(function() {
    console.log('is');
    $('#is').css('visibility', 'hidden');
    $('#isinfo').fadeIn(300).show();
  });
// Kaffeinfo pop-up + skjul"knap" //
  $('#kaffe').click(function() {
    console.log('kaffe');
    $('#kaffe').css('visibility', 'hidden');
    $('#kaffeinfo').fadeIn(300).show();
  });
// Saftinfo pop-up + skjul"knap" //
  $('#saft').click(function() {
    console.log('saft');
    $('#saft').css('visibility', 'hidden');
    $('#saftinfo').fadeIn(300).show();

  });
  // Close product pop-up - og gør "knap" synlig igen//
  $('.close-btn').click(function() {
    $('#is, #kaffe, #saft').css('visibility', 'visible');
    console.log('hej');
    $('.vareinfo').hide();
  });


// NOT working in viewport autoplay functionality //
/*
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('scroll', function() {
    var vid1 = document.getElementById('intro-video');
    $(vid1).each(function() {
      if ($(this).isInViewport()) {
        $(this).get(0).play();
      } else {

      }
    });
  });
*/
});
