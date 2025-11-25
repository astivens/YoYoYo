// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
const animateElements = document.querySelectorAll('.dafo-card, .estrategia-card, .plan-item, .profile-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Efecto parallax suave para el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const orbs = document.querySelectorAll('.gradient-orb');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.1;
        orb.style.transform = `translate(${scrolled * speed * 0.1}px, ${scrolled * speed * 0.1}px)`;
    });
});

// Contador animado (opcional, para futuras mejoras)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Efecto de typing retro para el lema (estilo terminal)
function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            // Agregar sonido de typing (opcional, solo visual)
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Agregar cursor parpadeante al final
            const cursor = document.createElement('span');
            cursor.textContent = '_';
            cursor.style.animation = 'blink 1s infinite';
            element.appendChild(cursor);
        }
    }
    
    type();
}

// Agregar animación de cursor parpadeante
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(style);

// Aplicar efecto typing al lema cuando sea visible
const visionLema = document.querySelector('.vision-lema');
if (visionLema) {
    const lemaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
                const originalText = entry.target.textContent;
                entry.target.classList.add('typed');
                typeWriter(entry.target, originalText, 80);
            }
        });
    }, { threshold: 0.5 });

    lemaObserver.observe(visionLema);
}

// Agregar efecto hover mejorado a las tarjetas DAFO
document.querySelectorAll('.dafo-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Efecto de partículas retro (neón)
function createParticle() {
    const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '3px';
    particle.style.height = '3px';
    particle.style.background = color;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '0';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '-10px';
    particle.style.opacity = '0';
    particle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
    
    document.body.appendChild(particle);
    
    const duration = Math.random() * 3000 + 2000;
    const left = Math.random() * 200 - 100;
    
    particle.animate([
        { 
            transform: 'translateY(0) translateX(0)',
            opacity: 0
        },
        { 
            transform: `translateY(${window.innerHeight + 100}px) translateX(${left}px)`,
            opacity: 1
        },
        { 
            transform: `translateY(${window.innerHeight + 200}px) translateX(${left * 1.5}px)`,
            opacity: 0
        }
    ], {
        duration: duration,
        easing: 'linear'
    }).onfinish = () => {
        particle.remove();
    };
}

// Crear partículas retro ocasionalmente
if (window.innerWidth > 768) {
    setInterval(() => {
        if (Math.random() > 0.8) {
            createParticle();
        }
    }, 3000);
}

// Efecto glitch aleatorio en elementos
function randomGlitch() {
    const elements = document.querySelectorAll('.hero-name, .section-title, .vision-lema');
    elements.forEach(el => {
        if (Math.random() > 0.95) {
            el.style.animation = 'glitch 0.3s';
            setTimeout(() => {
                el.style.animation = '';
            }, 300);
        }
    });
}

// Aplicar glitch aleatorio cada cierto tiempo
setInterval(randomGlitch, 5000);

// Prevenir FOUC (Flash of Unstyled Content)
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Lazy loading para imágenes (si se agregan en el futuro)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback para navegadores que no soportan lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

