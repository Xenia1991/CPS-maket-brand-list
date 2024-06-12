let swiper;
if (window.window.innerWidth < 768) {
   swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    pagination: {
    el: '.swiper-pagination',
    enabled: true,
    },
    }); 
};