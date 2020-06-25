document.addEventListener('DOMContentLoaded', () => {
    const imgWrapp = document.querySelector('.portfolio__wrap');

    imgWrapp.addEventListener('mouseover', (e) => {
        const target = e.target;

        if (target && target.classList.contains('portfolio__active')) {
            target.classList.add('animated', 'pulse');
        }
    });

    imgWrapp.addEventListener('mouseout', (e) => {
        const target = e.target;

        if (target && target.classList.contains('portfolio__active')) {
            target.classList.remove('pulse');
        }
    });

    //бургер
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item');


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});