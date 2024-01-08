let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('activ');
        if (link.href.includes(`#${current}`)) {
            link.classList.add('activ');
        }
    });
});

window.onscroll = () => {
    sections.forEach((sec) => {
        
        let id = sec.getAttribute('id');
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');

        if (menuIcon && navbar) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home-img, .services-contener, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'NFT Creator', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
