const hamburgerBtn = document.querySelectorAll('[data-toggle-sidebar]'),
    hamburger = document.querySelector('.header__hamburger');

hamburgerBtn.forEach((el) => {
    el.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_active');
    })
})
