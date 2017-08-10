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

  $('#skills').hover(
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

  $('.parallax-inner0').hover(
    function() {
      $(this).addClass('parallaxjquery');
    },

    function() {
      $(this).removeClass('parallaxjquery');
    }
  );

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

  $('.parallax-inner5').hover(
    function() {
      $(this).addClass('parallaxjquery');
    },

    function() {
      $(this).removeClass('parallaxjquery');
    }
  );

  $('#welcome').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.parallax0').offset().top
    }, 800);
  });

  $('#skills').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.parallax1').offset().top
    }, 800);
  });

  $('#work').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.parallax4').offset().top
    }, 800);
  });

  $('#contact').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.parallax5').offset().top
    }, 800);
  });
});
