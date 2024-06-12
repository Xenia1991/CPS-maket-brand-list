if (window.window.innerWidth < 768) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 16,
        slidesPerView: 'auto',
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        enabled: true,
        },
    }); 
};

window.addEventListener('resize', function (evt) {
    console.log(evt.target.innerWidth);
    if (evt.target.innerWidth < 768) {
       const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            spaceBetween: 16,
            slidesPerView: 'auto',
        
            // If we need pagination
            pagination: {
            el: '.swiper-pagination',
            enabled: true,
            },
        }); 
    } 
    if (evt.target.innerWidth >= 768) {
        swiper.destroy(true, false);
    }
})