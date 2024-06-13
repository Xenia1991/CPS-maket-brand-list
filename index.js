let swiper; 
const screenWidth = window.window.innerWidth;

if (screenWidth < 768) {
    swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            spaceBetween: 16,
            slidesPerView: 'auto',

            pagination: {
            el: '.swiper-pagination',
            enabled: true,
            clickable: true,
        },
    });
}

window.addEventListener('resize', function (event) {
    if (swiper && event.target.innerWidth >= 768) {
            swiper.destroy(true, true);
            swiper = null;
            console.log(swiper, 'destroyed')
    } else if(!swiper && event.target.innerWidth < 768) {
       swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            spaceBetween: 16,
            slidesPerView: 'auto',
    
            pagination: {
            el: '.swiper-pagination',
            enabled: true,
            clickable: true,
            },
        }); 
        console.log(swiper, 'created')
    }
})

const buttonShowMore  = document.querySelector('.show-more-button');
const buttonShowMoreText = buttonShowMore.querySelector('.show-more-button__text');
const brandListContainer = document.querySelector('.brand-list-container');

buttonShowMore.addEventListener('click', function (event) {
    event.preventDefault();
    if (brandListContainer.classList.contains('brand-list-container')) {
        brandListContainer.classList.remove('brand-list-container');
        brandListContainer.classList.add('brand-list-container--opened');
        buttonShowMoreText.textContent = 'Скрыть все';
        buttonShowMoreText.style.backgroundImage = 'url("images/Hide.png")';
    } else {
        brandListContainer.classList.remove('brand-list-container--opened');
        brandListContainer.classList.add('brand-list-container');
        buttonShowMoreText.textContent = 'Показать все';
        buttonShowMoreText.style.backgroundImage = 'url("images/Expand.png")';
    }
});