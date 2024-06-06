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


