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
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 2.5,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});