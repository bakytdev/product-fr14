let btn = document.querySelector('.header-btn-three');
let body = document.querySelector('.white');

btn.addEventListener('click', () => {
    if (body.className === 'white') {
        body.classList.replace('white', 'dark')
        btn.style.rotate = "180deg"
    } else {
        body.classList.replace('dark', 'white')
        btn.style.rotate = "0deg"
    }
})


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 50,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});