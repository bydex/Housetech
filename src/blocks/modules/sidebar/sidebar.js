if (document.querySelector('.sidebar')) {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', e => {
        e.preventDefault();
        sidebar.classList.toggle('sidebar_active');
    })
}