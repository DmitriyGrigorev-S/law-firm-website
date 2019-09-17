$(function () {
   $('.slider__inner, .news__slider-inner').slick({
      nextArrow: '<button type="button" class="slick-btn slick-btn__next slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-btn__prev slick-prev"></button>',
      infinite: false,
      responsive: [
         {
            breakpoint: 1024,
            settings:{
               // dots: true
               arrows: false,
               // autoplay: true,
               // autoplaySpeed: 4000,
               // infinite: true
            }
         }
      ]
   });

   $('select').styler();


   $('.header__menu-mobile').on('click', function(){
      $('.menu').slideToggle();
   });

});