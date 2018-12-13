var vareinfo = [

  // is info //
  ['<img class="close-btn" src="images/close.png">', '<h2>Økologisk is fra Skarø</h2>', '<img src="images/is.png">', '<p>Is fra Skarø er en serie økologisk is baseret på rene danske kvalitetsråvarer. Skarø is går op i bæredygtighed, og henter råvarer hos lokale producenter på Fyn. Isen er lavet på bl.a. birkesaft og sukkertang, som er en naturlig erstatning for sukker. Sukkertangen giver samtidig isen et strejf af det maritime og får isen til at smage udsøgt godt. Der er produceret fire kategorier af is: gourmet is, softice, yoghurtis og specialdesignet is. På SkibscaféSokrates kan du vælge mellem 12 forskellige varianter, som jævnligt bliver skiftet ud, så det er garanteret, at der er en is til enhver smag.</p>'],

  // Kaffe info //
  ['<img class="close-btn" src="images/close.png">', '<h2>Kaffe varm som kold</h2>', '<img src="images/kaffe.png">', '<p>På Skibscafé Sokrates kan du få både filterkaffe, espresso og en lækker frappé. Frappé’en er en helt speciel opskrift, jeg har fået fra en ældre dame, der mente at min iskaffe ikke var god nok, og hun har helt bestemt ret, denne frappé er helt sikker bedre og værd at prøve. Al kaffen er økologisk. </p>'],

  // Saft info //
  ['<img class="close-btn" src="images/close.png">', '<h2>Lækker økologisk saft</h2>', '<img src="images/saft.png">', '<p>Er der noget bedre end et glas kold saft i sommervarmen? Hos Skibscafé Sokrates serveres der saft med og uden brus. Varianterne bliver løbende skiftet ud, det samme med mærket, men saften er altid økologisk.</p>']
];


$(document).ready(function() {

  // Script for horizontal scroll on mousewheel //
  $('.all-content').mousewheel(function(e, delta) {
    var x = $(window).width();
    this.scrollLeft -= (delta * (x / 2));
    e.preventDefault();
  });
  // Animate mobile menu up when clicking on compas icon//
  $('#navigate').click(function() {
    $('.mobile-nav').animate({
      bottom: '0px'
    });

  });
  // Animate mobile menu down when clicking menu item //
  $('#mobile-menu li a').click(function() {
    $('.mobile-nav').animate({
      bottom: '-130px'
    });
    menuPosition = 'down';
  });

  // Make mobile menu slide down when clicking anywhere on page //
  $(document).click(function() {
    $('.mobile-nav').animate({
      bottom: '-130px'
    });
  });

  // Avoid mobile menu to slide down when clicking on icon //
  $('#navigate').click(function(e) {
    e.stopPropagation();

  });


  // Product pop-up //
  $('#is').click(function() {
    $('.modal-content').html(vareinfo[0]);
    $('.modal').fadeIn(300).show();
  });

  $('#kaffe').click(function() {
    $('.modal-content').html(vareinfo[1]);
    $('.modal').fadeIn(300).show();
  });

  $('#saft').click(function() {
    $('.modal-content').html(vareinfo[2]);
    $('.modal').fadeIn(300).show();

  });
  // Close product pop-up - HVORFOR FANDEN VIRKER DET IKKE????? ARRRRRRRRRRGHHHHHHHHHHHH!!!!!!!!//
  $('.close-btn').click(function() {
    console.log('hej');
    $('.modal').css('display', 'none');
    $('.modal-content').html("");
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
