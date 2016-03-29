jQuery(document).ready(function($){
  $('#boton_menu').click(function(){
    $(this).next().slideToggle();
  });

  $(window).load(function() {
    $('#slider').nivoSlider({
      controlNav: false,
    });
  });

//Accordion

    $(".accordion .descripcion").slideUp();
    $(".accordion .titulo").click(function(){
    $(this).next(".accordion .descripcion").slideToggle("fast");
  });

  //GOOGLE-MAPS
  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });
});
