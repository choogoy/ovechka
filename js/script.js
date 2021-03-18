$(document).ready(function(){

  // слайдеры
  $('.banners-slider').slick({
      autoplay: true,
      speed: 400,
      arrows: false,
      dots: true,
  });

  $('.mini-banners').slick({
    slidesToShow: 3,
    speed: 600,
    arrows: false,
    autoplay: true,
  });

  $('.products-slider').slick({
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
  });

  $('.about__slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
  });

  $('.reviews-slider').slick({
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    prevArrow: '<button class="reviews-slider__btn reviews-slider__btn--prev"><img src="images/foto-reviews/arrow-next.svg" alt="prev"></button>',    
    nextArrow: '<button class="brands-slider__btn brands-slider__btn--next"><img src="images/foto-reviews/arrow-next.svg" alt="next"></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 351,
        settings: {
          arrows: false
        }
      },
    ]
  });

  $('.brands-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button class="reviews-slider__btn reviews-slider__btn--prev"><img src="images/foto-reviews/arrow-next.svg" alt="prev"></button>',    
    nextArrow: '<button class="reviews-slider__btn reviews-slider__btn--next"><img src="images/foto-reviews/arrow-next.svg" alt="next"></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 4,
          arrows: false,
        }
      },
    ]
  });

  $('.footer-slider').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });

  $('.product-slider__inner').slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="reviews-slider__btn reviews-slider__btn--prev"><img src="images/foto-reviews/arrow-next.svg" alt="prev"></button>',    
    nextArrow: '<button class="reviews-slider__btn reviews-slider__btn--next"><img src="images/foto-reviews/arrow-next.svg" alt="next"></button>',
  });


  // табы
  $('.tab').on('click', function(event){
    event.preventDefault();
    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  $('.reviews__tab').on('click', function(){
    $('.reviews-slider__content div div').each(function(){
      if ($(this).height() > 400) {
        $(this).parent().addClass('reviews-slider__content--scroll');
        $(this).parent().addClass('gradient');
      }
    });
  });
  
  // добавление скролла
  $('.about__info-wrapper').each(function(){
    if ($(this)[0].scrollHeight > 430) {
      $(this).addClass('about__info-wrapper--scroll');
      $('.about__info').addClass('about__info--gradient');
    }
  });

  // добавление градиента при скролле
  $('.about__info-wrapper--scroll').each(function(){
    $(this).on('scroll', function(){
      if (this.offsetHeight + this.scrollTop >= this.scrollHeight) {
        $(this).parent().removeClass('about__info--gradient');
      } else {
        $(this).parent().addClass('about__info--gradient');
      }
    });
  });

  $('.reviews-slider__content div div').each(function(){
    $(this).scroll(function(){
      if (this.offsetHeight + this.scrollTop === this.scrollHeight) {
        $(this).parent().removeClass('gradient');
      } else {
        $(this).parent().addClass('gradient');
      }
    });
  }); 

  // скролл на верх при нажатии на зеленую кнопку в футере
  $('.footer__up-btn').on('click', function(event){
    event.preventDefault();
    $('body, html').animate({scrollTop: 0}, 1000);
  });

  $('.product-item__buy-now').on('click', function(event){
    event.preventDefault();
  });

  $('.product-item__add-cart-btn').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('product-item__add-cart-btn--active');

    if ($(this).hasClass('product-item__add-cart-btn--active')) {
      $(this).children('span').text('В корзине');
    } else {
      $(this).children('span').text('В корзину');
    }
  });
  
  // футер адаптив
  $('.footer__title').on('click', function(){
    if (!$(this).parent().hasClass('footer-reviews')) {
      $(this).toggleClass('footer__title--open');
      if ($(window).width() < 740) {
        $(this).siblings('div').slideToggle();
      }
    }
  });

  // пагинация
  if ($('.pagination-list__item:first-child').hasClass('pagination-list__item--active')) {
    $('.pagination__btn--prev').css("opacity", "0");
  } else {
    $('.pagination__btn--prev').css("opacity", "1");
  }

  if ($('.pagination-list__item:last-child').hasClass('pagination-list__item--active')) {
    $('.pagination__btn--next').css("opacity", "0");
  } else {
    $('.pagination__btn--next').css("opacity", "1");
  }

  $('.pagination-list__item').on('click', function(event){
    event.preventDefault();
    $('.pagination-list__item').removeClass('pagination-list__item--active');
    $(this).toggleClass('pagination-list__item--active');

    if ($('.pagination-list__item:first-child').hasClass('pagination-list__item--active')) {
      $('.pagination__btn--prev').css("opacity", "0");
    } else {
      $('.pagination__btn--prev').css("opacity", "1");
    }

    if ($('.pagination-list__item:last-child').hasClass('pagination-list__item--active')) {
      $('.pagination__btn--next').css("opacity", "0");
    } else {
      $('.pagination__btn--next').css("opacity", "1");
    }

  });

  $('.product-item__buy-now').each(function(){
    $(this).on('click', function(event){
      event.preventDefault();
      $('.popup-buy').addClass('popup--open');
      document.body.style.overflow = 'hidden';
    });
  });


  // вызов всплывающих окон
  $('.header-top__phone-callback').on('click', function(event){
    event.preventDefault();
    $('.header-top').removeClass('header-top--open');
    $('.popup-callback').addClass('popup--open');
    document.body.style.overflow = 'hidden';
  });

  $('.popup-callback__submit').on('click', function(event){
    event.preventDefault();
    $('.popup-callback').removeClass('popup--open');
    $('.popup-thanks').addClass('popup--open');
    const popupThanks = document.querySelector('.popup-thanks');
    setTimeout(() => popupThanks.classList.remove('popup--open'), 2000);
    document.body.style.overflow = '';
  });
  
  $('.popup-buy__submit').on('click', function(event){
    event.preventDefault();
    $('.popup-buy').removeClass('popup--open');
    $('.popup-thanks').addClass('popup--open');
    const popupThanks = document.querySelector('.popup-thanks');
    setTimeout(() => popupThanks.classList.remove('popup--open'), 2000);
    document.body.style.overflow = '';
  });

  $('.popup__close').each(function(){
    $(this).on('click', function(event){
      event.preventDefault();
      $(this).parent().parent().parent().parent().removeClass('popup--open');
      document.body.style.overflow = '';
    });
  });

  $('.popup__captcha-btn').on('click', function(event){
    event.preventDefault();
  });
  
  $('.reviews__add-review-btn').on('click', function(event){
    event.preventDefault();
    $('.popup-review-market').addClass('popup--open');
    document.body.style.overflow = 'hidden';
  });
  
  $('.popup-review-market__submit').on('click', function(event){
    event.preventDefault();
    $('.popup-review-market').removeClass('popup--open');
    document.body.style.overflow = '';
  });
  
  $('.reviews__add-review-btn--product').on('click', function(event){
    event.preventDefault();
    $('.popup-review-product').addClass('popup--open');
    document.body.style.overflow = 'hidden';
  });
  
  $('.popup-review-product__submit').on('click', function(event){
    event.preventDefault();
    $('.popup-review-product').removeClass('popup--open');
    document.body.style.overflow = '';
  });

  $('.header-bottom__btn').on('click', function(event){
    event.preventDefault();
    $('.header-top').toggleClass('header-top--open');
  });

  $('.header-top__close-btn').on('click', function(event){
    event.preventDefault();
    $('.header-top').toggleClass('header-top--open');
  });

});

const currentMainImage = document.querySelector('.product-page__main-slider img');
  
// document.querySelector('.product-page__main-slider img').attributes[0].nodeValue = document.querySelectorAll('.mini-slider__item')[0].attributes[0].nodeValue;

document.querySelectorAll('.mini-slider__item').forEach(item => {
  item.addEventListener('click', event => {
    currentMainImage.attributes[0].nodeValue = event.target.attributes[0].nodeValue;
  });
});

// document.addEventListener('click', event => {
//   // console.log(event.target);
//   if (event.target.classList.contains('popup__dialog')) {
//     document.querySelector('.popup').style.display = "none";
//     console.log(event.target);
//   }
// })