$(document).ready(function(){

  $('.footer-slider').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });

  $('.tab').on('click', function(event){
    event.preventDefault();
    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  $('.footer__up-btn').on('click', function(event){
    event.preventDefault();
    $('body, html').animate({scrollTop: 0}, 1000);
  });

  $('.footer__title').on('click', function(){
    if (!$(this).parent().hasClass('footer-reviews')) {
      $(this).toggleClass('footer__title--open');
      if ($(window).width() < 740) {
        $(this).siblings('div').slideToggle();
      }
    }
  });

});