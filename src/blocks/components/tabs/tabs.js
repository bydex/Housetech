import Swiper from 'swiper/swiper-bundle';

const tabs = document.querySelectorAll('.tabs');

tabs.forEach((el) => {
    const slider = new Swiper(el, {
        slidesPerView: 'auto',
        freeMode: true,
        visibilityFullFit: true,
        autoResize: true,
    });

    const tab = el.querySelectorAll('.tabs__item');

    tab.forEach((tabItem) => {
        tabItem.addEventListener('click', function() {
            const active = el.querySelector('.tabs__item_active');

            if (active !== this) {
                active.classList.remove('tabs__item_active');
                this.classList.add('tabs__item_active');
            }
        })
    })
})
