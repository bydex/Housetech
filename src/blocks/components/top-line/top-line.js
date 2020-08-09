const topLine = document.querySelector('.top-line');

window.addEventListener('scroll', function() {
    const pageYOffset = Math.round(this.pageYOffset);

    if (pageYOffset > 0) {
        topLine.classList.add('top-line_fixed');
    } else {
        topLine.classList.remove('top-line_fixed');
    }
})
