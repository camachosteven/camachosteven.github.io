$(document).ready(function() {
  $('#logo, .firstul, .bio ul, .bio p, #portrait').hide();
  $('#logo, .firstul, .bio ul, .bio p, #portrait').fadeIn(750);

  $('#firstul > li').hover(
    function() {
    $(this).addClass('lijquery');
    },

    function() {
      $(this).removeClass('lijquery');
    }
  );

  $('#logo').hover(
    function() {
      $('#logo').addClass('logojquery');
    },

    function() {
      $('#logo').removeClass('logojquery');
    }
  );

  // $('.parallax-inner0').hover(
  //   function() {
  //     $(this).addClass('parallaxjquery');
  //   },
  //
  //   function() {
  //     $(this).removeClass('parallaxjquery');
  //   }
  // );

  $('.parallax-inner1').hover(
    function() {
      $(this).addClass('parallaxjquery');
    },

    function() {
      $(this).removeClass('parallaxjquery');
    }
  );

  $('.parallax-inner2').hover(
    function() {
      $(this).addClass('parallaxjquery');
    },

    function() {
      $(this).removeClass('parallaxjquery');
    }
  );

  $('.parallax-inner3').hover(
    function() {
      $(this).addClass('parallaxjquery');
    },

    function() {
      $(this).removeClass('parallaxjquery');
    }
  );

  $('.parallax-inner4').hover(
    function() {
      $(this).addClass('parallaxjquery');
    },

    function() {
      $(this).removeClass('parallaxjquery');
    }
  );
});
