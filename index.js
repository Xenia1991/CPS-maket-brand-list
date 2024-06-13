let swiper; 
const screenWidth = window.window.innerWidth;
const buttonShowMore  = document.querySelector('.show-more-button');
const buttonShowMoreText = buttonShowMore.querySelector('.show-more-button__text');
const brandListContainer = document.querySelector('.brand-list-container');
const swiperOptions = {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

if (screenWidth < 768) {
    swiper = new Swiper('.swiper', swiperOptions);
};

const resizeScreen = function (event) {
    if (swiper && event.target.innerWidth >= 768) {
            swiper.enable();
            swiper.destroy(true, true);
            swiper = null;
    } else if(!swiper && event.target.innerWidth < 768) {
       swiper = new Swiper('.swiper', swiperOptions);
    };
};

const toggleContainer = function () {
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
};

window.addEventListener('resize', resizeScreen);
buttonShowMore.addEventListener('click', toggleContainer);