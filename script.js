// Rolagem suave 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de Rolagem do cabeçalho
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Inicializar 
AOS.init({
    duration: 1000,
    once: false,
    offset: 50
});

// Swiper (Carrossel de Portfólio)
const swiper = new Swiper('.portfolio-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// FAQ Accordion
document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;
        
        // Alternar classe ativa no botão
        button.classList.toggle('active');
        
        // Alternar visibilidade da resposta
        if (button.classList.contains('active')) {
            answer.classList.add('active');
        } else {
            answer.classList.remove('active');
        }
        
        // Fechar outras respostas abertas
        document.querySelectorAll('.faq-answer.active').forEach(openAnswer => {
            if (openAnswer !== answer) {
                openAnswer.classList.remove('active');
                openAnswer.previousElementSibling.classList.remove('active');
            }
        });
    });
});
