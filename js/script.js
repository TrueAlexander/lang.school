$(window).scroll(function(){
  if ($(this).scrollTop() > 1) {
   $(".header__full, .header__scroll").addClass("sticky"); 
  }
  else {
    $(".header__full, .header__scroll").removeClass("sticky");
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {

    200: {
      slidesPerView: 1,
    },
    
    600: {
      slidesPerView: 2,
    },

    890: {
      slidesPerView: 3,
    }
  },
});