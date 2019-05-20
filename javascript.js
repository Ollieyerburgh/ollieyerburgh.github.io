$(document).ready(function (){
  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 200);
  });
  
  
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true,
  });
})

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll > window.innerHeight - 55) {
      $(".navbar").removeClass("transparent");
    } else {
      $(".navbar").addClass("transparent");
    }
});

(function() {
  $(window).scroll(function() {
    var scroll;
    scroll = $(window).scrollTop();
    if (scroll < 1) {
      $('.navbar').addClass('transparent');
    } else {
      $('.navbar').removeClass('transparent');
    }
  });

}).call(this);