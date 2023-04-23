const title = document.querySelector('.main-title');
title.textContent = "Dom Lab";

const button = document.querySelector('.hide-button')
button.addEventListener('click', () => {
    title.style.display = 'none'
})

const buttonShow = document.querySelector('.unhide-button')
buttonShow.addEventListener('click', () => {
    title.style.display = 'block'
})
