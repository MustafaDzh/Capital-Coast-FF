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
// document.addEventListener('DOMContentLoaded', function () {
//     var phasesContainer = document.querySelector('.phases');
//     var mobileNavArrow = document.querySelector('.mobile-nav-arrow');
//     var phases = document.querySelectorAll('.phase');
//     var currentPhaseIndex = 0;

//     if (phasesContainer && mobileNavArrow) {
//         mobileNavArrow.addEventListener('click', function () {
//             phases[currentPhaseIndex].style.display = 'none';
//             currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
//             phases[currentPhaseIndex].style.display = 'block';
//         });
//     } else {
//         console.log('One or both elements not found.');
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    let swiperContainer = document.querySelector('.phases');
    let mobileNavArrow = document.querySelector('#mobile-nav-arrow');

    if (swiperContainer && mobileNavArrow) {
        let swiper = new Swiper(swiperContainer, {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1.1,
            spaceBetween: 0,
            breakpoints: {
                768: {
                    slidesPerView: 'auto',
                }
            },
        });

        mobileNavArrow.addEventListener('click', function () {
            swiper.slideNext();
        });
    }
});







