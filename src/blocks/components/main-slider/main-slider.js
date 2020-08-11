import Swiper from 'swiper/swiper-bundle';

if (document.querySelector('.main-slider')) {
    const mainSliderContainer = document.querySelector('.main-slider__container');

    const mainSlider = new Swiper(mainSliderContainer, {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
}
