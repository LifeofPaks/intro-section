

const toggleMenu = document.querySelector('.toggleMenu')
const menuOpen = document.querySelector('.menuOpen')
const menuClose = document.querySelector('.menuClose')
const navlinks = document.querySelector('.navLinks')
const overlay = document.querySelector('.overlay')
const menus = document.querySelectorAll('.menu')


toggleMenu.addEventListener('click', ()=>{
    if(menuOpen.classList.contains('active')){
        menuOpen.classList.remove('active')
        menuClose.classList.add('active')
        navlinks.classList.add('active')
        overlay.classList.add('active')
    }
    else if(menuClose.classList.contains('active')){
        menuClose.classList.remove('active')
        menuOpen.classList.add('active')
        navlinks.classList.remove('active')
        overlay.classList.remove('active')

    }
})


for (let i = 0; i < menus.length; i++){
    menus[i].addEventListener('click', ()=>{
        const subMenu = menus[i].querySelector('.subMenu')
        const icon = menus[i].querySelector('.arrowDown')
        subMenu.classList.toggle('active')
        icon.classList.toggle('active')
    })
}