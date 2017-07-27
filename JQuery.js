$(document).ready(function() {
  $('#logo, .firstul, .bio ul, #portrait').hide();
  $('#logo, .firstul, .bio ul, #portrait').fadeIn(750);

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
});
