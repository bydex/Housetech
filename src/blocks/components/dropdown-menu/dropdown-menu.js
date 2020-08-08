const dropdownTitle = document.querySelectorAll('.dropdown-menu__title')

dropdownTitle.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        el.classList.toggle('dropdown-menu__title_active');

        const panel = el.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
});