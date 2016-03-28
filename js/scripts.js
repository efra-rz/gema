jQuery(document).ready(function($){
  $('#boton_menu').click(function(){
    $(this).next().slideToggle();
  });
  $(window).load(function() {
    $('#slider').nivoSlider({
      controlNav: false,
    });
  });
  //GOOGLE-MAPS
  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });
});
