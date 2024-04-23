/*SHOW MENU*/ 

document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle && navClose) {
        navToggle.addEventListener('click', () => {
            toggleMenu();
        });

        navClose.addEventListener('click', () => {
            toggleMenu();
        });
    }

    function toggleMenu() {
        navMenu.classList.toggle('show-menu');
    }

    const bgHeader = () =>{
        const header = document.getElementById('header')
        this.scrollY >= 50 ? header.classList.add('bg-header')
                            : header.classList.remove('bg-header')
    }
    window.addEventListener('scroll',bgHeader)
});