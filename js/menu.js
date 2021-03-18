$(document).ready(function(){

    // раскрытие меню при нажатии на "Каталог товаров"
    $('.catalog-menu__btn').on('click', function(){
      closeMenu();
      if ($(window)[0].innerWidth > 1300) {
        $('.catalog-menu__wrapper').toggleClass('catalog-menu--open');
        $('.catalog-menu__item').each(function(){
          $(this).removeClass('catalog-menu__item--active');
        });
        if ($('.catalog-menu__wrapper').hasClass('catalog-menu__wrapper--subcatalog')) {
          $('.catalog-menu__wrapper').removeClass('catalog-menu__wrapper--subcatalog');
          $('.catalog-menu__wrapper').delay(1000).slideToggle();
        } else {
          $('.catalog-menu__wrapper').slideToggle();
        }
      } else {
        closeMenu();
        $('.catalog-menu__wrapper').removeClass('catalog-menu--open');
        $('.catalog-menu__wrapper').removeClass('catalog-menu__wrapper--subcatalog');
      }
    });
  
    // раскрытие подменю при нажатии на "Каталог товаров"
    $('.catalog-menu__item').on('click', function(event){
      event.preventDefault();
      if ($(window)[0].innerWidth > 1300) {
        $('.catalog-menu__wrapper').addClass('catalog-menu__wrapper--subcatalog');
        if (!$(this).hasClass('catalog-menu__item--active')) {
          $('.catalog-menu__item').each(function(){
            $(this).removeClass('catalog-menu__item--active');
          });
          $(this).addClass('catalog-menu__item--active');
        }
      }
    });

});  

// MEDIA
const menu = document.querySelector('.menu');
const catalogMenu = document.querySelector('.catalog-menu');
const catalogMenuInner = catalogMenu.querySelector('.catalog-menu__inner');
const headerTop = document.querySelector('.header-top');
const headerBottom = document.querySelector('.header-bottom');
const headerBottomInner = headerBottom.querySelector('.header-bottom__inner');
const banners = document.querySelector('.banners');

// закрытие меню при уменьшении размера экрана
function closeMenu() {
  if (window.innerWidth <= 1300) {  

    console.log(window.innerWidth);

    $('.catalog-menu__item').each(function(){
      $(this).removeClass('catalog-menu__item--active')
    });

    $('.catalog-menu__inner').addClass('catalog-menu--mobile');
    $('.catalog-menu__wrapper').css("display", "block");
    
    if ($('.catalog-menu__wrapper').hasClass('catalog-menu--open')) {
      $('.catalog-menu__wrapper').removeClass('catalog-menu--open');
    }

    if ($('.catalog-menu__wrapper').hasClass('catalog-menu__wrapper--subcatalog')) {
      $('.catalog-menu__wrapper').removeClass('catalog-menu__wrapper--subcatalog');
      $('.catalog-menu__wrapper').removeClass('catalog-menu--open');
      $('.catalog-menu__wrapper').css("display", "none");
    }

  } else {
    $('.catalog-menu__inner').removeClass('catalog-menu--mobile');
    
  }
}

function checkWidth() {

  if (window.innerWidth > 1300) {

    $('.catalog-menu__wrapper').css("display", "none");
    headerBottomInner.classList.remove('header-bottom__inner--fixed');
    headerBottomInner.classList.remove('header-bottom__inner--scroll');
    catalogMenu.classList.remove('catalog-menu--mobile');

      if (document.children[0].scrollTop > 150) { 
        headerBottom.classList.add('header-bottom--fixed');
        catalogMenuInner.classList.add('catalog-menu--fixed');
      } else {
        headerBottom.classList.remove('header-bottom--fixed');
        catalogMenuInner.classList.remove('catalog-menu--fixed');
      }

    if (headerTop.classList.contains('header-top--open')) {
      headerTop.classList.remove('header-top--open');
    }

  } else {
    headerBottom.classList.remove('header-bottom--fixed');
    headerBottomInner.classList.add('header-bottom__inner--fixed');

    if (window.innerWidth < 580) {
      headerBottom.classList.add('header-bottom--mobile');
    } else {
      headerBottom.classList.remove('header-bottom--mobile');
    }

    if (document.children[0].scrollTop > 30) {
      $('.catalog-menu__wrapper').css("display", "none");
      headerBottomInner.classList.add('header-bottom__inner--scroll');
      catalogMenuInner.classList.add('catalog-menu--fixed');
      catalogMenuInner.classList.remove('catalog-menu--mobile');


    } else {
      $('.catalog-menu__wrapper').css("display", "block");
      headerBottomInner.classList.remove('header-bottom__inner--scroll');
      catalogMenuInner.classList.add('catalog-menu--mobile');
      headerBottom.classList.remove('header-bottom--fixed');
      catalogMenuInner.classList.remove('catalog-menu--fixed');
      $('.header-bottom .logo').css("position", "");
    }
  }

  if (window.innerWidth >= 580) {
    headerBottomInner.classList.remove('header-bottom__inner--mobile');
  }

}

checkWidth();
closeMenu();

window.addEventListener('resize', () => {
  checkWidth();
  closeMenu();
})

document.addEventListener('scroll', () => {
  checkWidth();
});



    // catalogMenu.classList.add('catalog-menu--mobile');
    // catalogMenuInner.classList.remove('catalog-menu--fixed');
    // catalogMenu.classList.add('catalog-menu--mobile');



    // headerBottom.insertAdjacentElement('afterend', catalogMenuInner);
    // catalogMenu.classList.add('catalog-menu--mobile');
    //     // document.querySelector('.catalog-menu__inner').classList.add('catalog-menu--fixed');
    // catalogMenu.classList.remove('catalog-menu--fixed');
    // headerBottom.classList.remove('header-bottom--fixed');


    // catalogMenu.classList.remove('catalog-menu--mobile');

    // menu.insertAdjacentElement('beforebegin', catalogMenuInner);


    // catalogMenu.classList.add('catalog-menu--fixed');

     // } else {
    //   // headerBottom.classList.remove('header-bottom--fixed');
    //   // document.querySelector('.catalog-menu__inner').classList.remove('catalog-menu--fixed');
    // }



// if (window.innerWidth > 1300 && document.children[0].scrollTop > 150) {
//   document.querySelector('.header-bottom').classList.add('header-bottom--fixed');
//   document.querySelector('.catalog-menu__inner').classList.add('catalog-menu--fixed');
// } else {
//   document.querySelector('.header-bottom').classList.remove('header-bottom--fixed');
//   document.querySelector('.catalog-menu__inner').classList.remove('catalog-menu--fixed');
// }

  
  // if ($(window).width() < 1300) {
  //   $('.catalog-menu').addClass('catalog-menu--mobile');     
  //   $('.catalog-menu__btn').on('click', function(){

  //     $('.catalog-menu__wrapper').toggleClass('catalog-menu__wrapper--open');
  //    console.log( $('.catalog-menu__wrapper') );
  //    if ($('.catalog-menu__wrapper').hasClass('catalog-menu__wrapper--open')) {
  //     $('.catalog-menu').height(47 + $('.catalog-menu__wrapper--open')[0].scrollHeight); 
  //    } else {
  //     $('.catalog-menu').height(47);
  //    }
  //   });
  // } else {
  //   $('.catalog-menu').removeClass('catalog-menu--mobile');     
  // }

  // console.dir($('.catalog-menu')[0]);

  // window.addEventListener('resize', () => {
  //   checkWidth();
  //   const catalogMenuInner = document.querySelector('.menu');
  //   const headerTopContent = document.querySelector('.catalog-menu');
  //   const headerBottom = document.querySelector('.header-bottom');

  //   if (window.innerWidth < 1300) {
  //     catalogMenuInner.insertAdjacentElement('beforebegin', headerTopContent);
  //   } else {
  //     headerBottom.insertAdjacentElement('afterend', headerTopContent);
  //   }

  // })

  
    // function checkScroll(){
  
    //   if (window.innerWidth < 1300) {
    //     menu.insertAdjacentElement('beforebegin', catalogMenu);
    //     catalogMenu.classList.add('catalog-menu--mobile');
    //   } else {
    //     headerBottom.insertAdjacentElement('afterend', catalogMenu);
    //     catalogMenu.classList.remove('catalog-menu--mobile');
    //   }
  
    //   if (window.innerWidth > 1300 && document.children[0].scrollTop > 150) {
    //     document.querySelector('.header-bottom').classList.add('header-bottom--fixed');
    //     document.querySelector('.catalog-menu__inner').classList.add('catalog-menu--fixed');
    //   } else {
    //     document.querySelector('.header-bottom').classList.remove('header-bottom--fixed');
    //     document.querySelector('.catalog-menu__inner').classList.remove('catalog-menu--fixed');
    //   }
    // }
  
    // function checkWidth(){
    
    //   if (window.innerWidth < 1300) {
    //     menu.insertAdjacentElement('beforebegin', catalogMenu);
    //     catalogMenu.classList.add('catalog-menu--mobile');
    //   } else {
    //     headerBottom.insertAdjacentElement('afterend', catalogMenu);
    //     catalogMenu.classList.remove('catalog-menu--mobile');
    //   }
  
    //   if (window.innerWidth > 1300 && document.children[0].scrollTop > 150) {
    //     document.querySelector('.header-bottom').classList.add('header-bottom--fixed');
    //     document.querySelector('.catalog-menu__inner').classList.add('catalog-menu--fixed');
    //   } else {
    //     document.querySelector('.header-bottom').classList.remove('header-bottom--fixed');
    //     document.querySelector('.catalog-menu__inner').classList.remove('catalog-menu--fixed');
    //   }
    // }
  
    // checkScroll();
    // checkWidth();
