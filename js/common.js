// slider banner
const swiper = new Swiper('.js-main-slider', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// slider mini
const swiperItems = new Swiper(".js-swiper", {
  slidesPerView: 1.65,
  slidesPerGroup: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {  
    992: {
      slidesPerView: 4,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 3.3,
      slidesPerGroup: 3,
      spaceBetween: 0
    }
  }
});

// МОДАЛКИ
$('.js-reg-btn').on('click', function(e) {
  e.preventDefault();
  $('.js-modal-feedback').addClass('show');
  $('.batik-modal-overlay').addClass('show');
  return false;
})

$('.batik-modal-overlay, .batik-modal-close').on('click', function() {
  $('.batik-modal').removeClass('show');
  setTimeout(function() {
    $('.batik-modal-overlay').removeClass('show')
  }, 450)
})

// ПОКАЗЫВАЕМ/СКРЫВАЕМ ПАРОЛЬ В ПОЛЕ ВВОДА
$('.js-pass').on('click', function() {
  let eye = $(this);
  let input = eye.prev('input');

  if(eye.hasClass('active')) {
    input.attr('type', 'password');
    eye.removeClass('active');
  }else{
    input.attr('type', 'text');
    eye.addClass('active');
  }
});

// АНИМАЦИЯ ГИФОК ЗАЦИКЛИВАНИЕ
// const gifs = $('.batik-feautures__ico img');

// function gifAnimate() {
//   gifs.fadeIn('450')
//   setTimeout(function() {
//     gifs.fadeOut('450')
//   }, 1650);  
// }
// setInterval(gifAnimate, 2100)


