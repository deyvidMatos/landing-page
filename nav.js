const burger = document.querySelector('.hamburger');
const links = document.querySelector('.ancorsLink');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    links.classList.toggle('active')
})