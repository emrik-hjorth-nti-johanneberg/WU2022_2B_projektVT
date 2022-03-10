const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const gridwrap = document.querySelector('.gridwrap')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
    gridwrap.classList.toggle("gridtoggle")
}

burger.addEventListener('click', toggleMenu)
 