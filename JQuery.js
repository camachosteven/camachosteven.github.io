$(document).ready(function() {
  $('.navigation, .bio ul, #portrait').hide();
  $('.navigation, .bio ul, #portrait').fadeIn(500);

  $('#firstul > li').hover(
    function() {
    $(this).addClass('lijquery', 5000);
    },

    function() {
      $(this).removeClass('lijquery', 5000);
    }
  );

  $('#logo img').hover(
    function() {
      $('#logo').addClass('logojquery');
    },

    function() {
      $('#logo').removeClass('logojquery');
    }
  );
});
