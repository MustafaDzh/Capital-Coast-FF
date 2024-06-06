document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.phase-bar').forEach(phase => {
        const progress = phase.getAttribute('data-progress');
        phase.style.setProperty('--progress', progress);
        phase.style.backgroundColor = '#68C5F9';
    });
});

//nav-mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    console.log('DOM fully loaded and parsed');

    hamburgerBtn.addEventListener('click', function() {
        console.log('Hamburger button clicked');
        mobileNav.classList.toggle('open');
    });
});

//swiper for phases
document.addEventListener('DOMContentLoaded', function () {
    var swiperContainer = document.querySelector('.phases');
    var mobileNavArrow = document.querySelector('.mobile-nav-arrow');

    if (swiperContainer && mobileNavArrow) {
        var swiper = new Swiper(swiperContainer, {
            direction: 'horizontal',
            loop: false,
            pagination: {
                el: '.swiper-pagination',
            },
        });

        mobileNavArrow.addEventListener('click', function () {
            console.log('Clicked on mobile navigation arrow');
            swiper.slideNext(); 
        });
    } 
});


