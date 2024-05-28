document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const productItems = document.querySelectorAll('.product-item');
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    let currentIndex = 0;

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('showing');
    });

    const updateCarousel = (index) => {
        productItems.forEach((item, idx) => {
            item.style.transform = `translateX(${-index * 100}%)`;
        });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : productItems.length - 1;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < productItems.length - 1) ? currentIndex + 1 : 0;
        updateCarousel(currentIndex);
    });

    updateCarousel(currentIndex);

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        scrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();  // Trigger the animation on page load as well
});
