var swiper = new Swiper(".default-carousel", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const filmCards = document.querySelectorAll('.film-card');

filmCards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`Vous avez choisi : ${card.textContent}`);
    });
});
