const card = document.querySelectorAll('.card');

card.forEach((el) => {
    const bookmark = el.querySelector('.card__bookmark');

    bookmark.addEventListener('click', function() {
        this.classList.add('card__bookmark_active');
    })
})
