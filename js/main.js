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