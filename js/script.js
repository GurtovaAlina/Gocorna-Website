/*let blocks = document.querySelectorAll('.pinkblock');

window.addEventListener('scroll', function (event) {
    for (let index = 0; index < blocks.length; index++) {
        const block = blocks[index];
        if (this.scrollY > 100) {
            block.style.animation = "rotate1 10s linear infinite alternate 0s forwards";
        }
        else {
            block.style.animation = "";
        }
    }
    console.log(`${scrollY}px`);
    
});*/


const blocks = document.querySelectorAll('.pinkblock');

window.addEventListener('scroll', function (event) {
    for (let index = 0; index < blocks.length; index++) {
        const block = blocks[index];
        block.style.transform = `rotate(${scrollY}deg)`;
    }

});

const burger = document.querySelector('.header__burger > SPAN');
const burgerBlock = document.querySelector('.header__burgerblock');
const burgerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', function (event) {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
});