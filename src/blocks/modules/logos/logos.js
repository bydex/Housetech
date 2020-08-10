import Swiper from 'swiper';

const logos = document.querySelectorAll('.logos');

logos.forEach((slider) => {
    const arrowPrev = slider.querySelector(".arrows__arrow_left");
    const arrowNext = slider.querySelector('.arrows__arrow_right');
    const logosSlider = new Swiper(slider, {
        slidesPerView: 5,
        loop: true,
    })

    arrowPrev.addEventListener("click", function() {
        logosSlider.slidePrev();
    });
    arrowNext.addEventListener("click", function() {
        logosSlider.slideNext();
    });
})
