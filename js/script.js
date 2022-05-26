const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const save = document.querySelector('.save')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu)

function buttonpress() {
    save.classList.toggle('saved')
}

save.addEventListener('click', buttonpress)


 