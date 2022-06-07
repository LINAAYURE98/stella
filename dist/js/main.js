/* JQUERY
======================================================================================================================= */
(function ($) {

  // HIDE MODAL
  $('.modal-advice__close').on('click', function() {
    $('.modal-advice').removeClass('active');
  });

  // SHOW AND HIDE INPUT OTHER SPORT
  $("#sport").change(function() {
    if ($('#sport').val() === 'other') {
      $('#sport-other input').val('');
      $('#sport-other').removeClass('d-none');
    } else {
      $('#sport-other').addClass('d-none');
    }
  });

  // ADD AUTOPLAY VIDEOS
  let videoURL = $('.fresco').prop('href');
  videoURL += '&autoplay=1';
  $('.fresco').prop('href',videoURL);

})(jQuery);


/* SET AND INIT SWIPER HOME BANNER
======================================================================================================================= */
const homeBanner = document.querySelector('.home-banner');
if (homeBanner) {
  checkSlideBanner();
  const swiperHomeBanner = new Swiper('.home-banner__swiper .swiper', {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
  swiperHomeBanner.on('slideChange', function() {
    checkSlideBanner();
  });
}

function checkSlideBanner() {
  setTimeout(() => {
    const imageActive = document.querySelector('.home-banner__swiper .swiper-slide-prev .swiper-image').getAttribute('src');
    const titleActive = document.querySelector('.home-banner__swiper .swiper-slide-prev .swiper-title').textContent;
    const textActive = document.querySelector('.home-banner__swiper .swiper-slide-prev .swiper-text').textContent;
    const buttonActive = document.querySelector('.home-banner__swiper .swiper-slide-prev .swiper-button').getAttribute('href');
    document.querySelector('.home-banner__image').setAttribute('src', imageActive);
    document.querySelector('.home-banner__title').textContent = titleActive;
    document.querySelector('.home-banner__subtitle').textContent = textActive;
    document.querySelector('.home-banner__button').setAttribute('href', buttonActive);
  }, 200);
}


/* SET AND INIT SWIPER STORE
======================================================================================================================= */
const store = document.querySelector('.store');
if (store) {
  const swiperStore = new Swiper('.store__swiper', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 16,
  });
}

/* SET AND INIT SWIPER EVENT LAUNCH
======================================================================================================================= */
const movementEvent = document.querySelector('.movement-event');
if (movementEvent) {
  checkEventSlide();
  const swiperMovementEvent = new Swiper('.movement-event__swiper .swiper', {
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
  swiperMovementEvent.on('slideChange', function() {
    checkEventSlide();
  });
}

function checkEventSlide() {
  setTimeout(() => {
    const titleActive = document.querySelector('.movement-event__swiper .swiper-slide-active .cards__title').textContent;
    document.querySelector('.movement-event__info .info__title span').textContent = titleActive;
  }, 200);
}



/* SET AND INIT SWIPER PRODUCTS
======================================================================================================================= */
const products = document.querySelector('.beer-products');
if (products) {
    checkSlideProducts();
  const swiperProducts = new Swiper('.beer-products__swiper .swiper', {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiperProducts.on('slideChange', function() {
    checkSlideProducts();
  });
}

function checkSlideProducts() {
  setTimeout(() => {
    const imageActive = document.querySelector('.beer-products__swiper .swiper-slide-prev .swiper-image').getAttribute('src');
    const titleActive = document.querySelector('.beer-products__swiper .swiper-slide-prev .swiper-title').textContent;
    const textActive = document.querySelector('.beer-products__swiper .swiper-slide-prev .swiper-text').textContent;
    document.querySelector('.beer-products__image').setAttribute('src', imageActive);
    document.querySelector('.beer-products__title').textContent = titleActive;
    document.querySelector('.beer-products__text').textContent = textActive;
  }, 200);
}


/* SET AND INIT COUNT DOWN
======================================================================================================================= */
const eventDetail = document.querySelector('.event-launch');
if (eventDetail) {
  const year = document.getElementById('count-down').getAttribute('data-year');
  const month = document.getElementById('count-down').getAttribute('data-month');
  const day = document.getElementById('count-down').getAttribute('data-day');
  const hours = document.getElementById('count-down').getAttribute('data-hours');
  const minutes = document.getElementById('count-down').getAttribute('data-minutes');
  const seconds = document.getElementById('count-down').getAttribute('data-seconds');

  simplyCountdown('#count-down', {
    year: year, // required
    month: month, // required
    day: day, // required
    hours: hours, // Default is 0 [0-23] integer
    minutes: minutes, // Default is 0 [0-59] integer
    seconds: seconds, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Días', plural: 'Días' },
        hours: { singular: 'Horas', plural: 'Horas' },
        minutes: { singular: 'Min.', plural: 'Min.' },
        seconds: { singular: 'Seg.', plural: 'Seg.' }
    },
    plural: false, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false
    onEnd: function() {}, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
  });
}

