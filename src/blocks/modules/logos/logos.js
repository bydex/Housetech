import Swiper from "swiper/swiper-bundle";

const logos = document.querySelectorAll('.logos');

logos.forEach((slider) => {
    const arrowPrev = slider.querySelector(".arrows__arrow_left");
    const arrowNext = slider.querySelector('.arrows__arrow_right');
    const scrollbar = slider.querySelector('.swiper-scrollbar');

    const logosSlider = new Swiper(slider, {
        slidesPerView: 5,
        breakpoints: {
            320: { slidesPerView: 2 },
            420: { slidesPerView: 3 },
            520: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
        },
        scrollContainer: true,
        scrollbar: {
            el: scrollbar,
        },
    })

    arrowPrev.addEventListener("click", function() {
        logosSlider.slidePrev();
    });
    arrowNext.addEventListener("click", function() {
        logosSlider.slideNext();
    });
})
