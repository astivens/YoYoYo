// ============================================
// DATA MANAGEMENT MODULE
// ============================================
class PortfolioData {
    constructor() {
        this.profile = {
            text: "Soy un ingeniero en formación, me considero un líder de proyectos y una persona con gran capacidad para adquirir e interiorizar nuevos conocimientos, impulsado por mi curiosidad. Mi aspiración a largo plazo es alcanzar la estabilidad necesaria para dedicarme a retos personales y actividades, principalmente sin ánimo de lucro, como la astronomía y otras de valor intangible, con el objetivo de dejar una huella."
        };

        this.vision = {
            shortTerm: "Liderar mi propia desarrolladora de software, consolidando el éxito local e iniciando la expansión internacional.",
            lema: "Innovar, liderar y dejar una huella medible."
        };

        this.dafo = {
            fortalezas: [
                { id: "F1", text: "Liderazgo en proyectos" },
                { id: "F2", text: "Resiliente" },
                { id: "F3", text: "Perspicaz" },
                { id: "F4", text: "Gran curiosidad" },
                { id: "F5", text: "Ambición por grandes logros" }
            ],
            oportunidades: [
                { id: "O1", text: "Mercados poco explorados" },
                { id: "O2", text: "Buenos condiscípulos" },
                { id: "O3", text: "Necesidad de visión e ideas frescas" },
                { id: "O4", text: "Mis conocimientos son necesitados en la revolución tecnológica" }
            ],
            debilidades: [
                { id: "D1", text: "Procrastinación" },
                { id: "D2", text: "Falta de confianza en mis compañeros" },
                { id: "D3", text: "Egocentrismo" },
                { id: "D4", text: "Distracción" },
                { id: "D5", text: "Obsesión con tareas" }
            ],
            amenazas: [
                { id: "A1", text: "Sobre oferta" },
                { id: "A2", text: "Falta de oportunidades en el sector local" },
                { id: "A3", text: "Mercado saturado" },
                { id: "A4", text: "Economía" }
            ],
            estrategias: [
                {
                    type: "FO",
                    title: "Estrategias Ofensivas (FO)",
                    description: "Usar Fortalezas para aprovechar Oportunidades",
                    example: "Usar el Liderazgo, la ambición y la curiosidad (F1, F5, F3) para explorar Mercados poco explorados (O1) y ofrecer la Visión fresca (O3) que necesita el sector tecnológico."
                },
                {
                    type: "FA",
                    title: "Estrategias Defensivas (FA)",
                    description: "Usar Fortalezas para minimizar Amenazas",
                    example: "Usar la Resiliencia (F2) y la Visión amplia para hacer frente a la Competencia directa (A1, A3)."
                },
                {
                    type: "DO",
                    title: "Estrategias de Reorientación (DO)",
                    description: "Reducir Debilidades aprovechando Oportunidades",
                    example: "Mitigar el Egocentrismo y la desconfianza (D2, D3) apoyándose en los Buenos condiscípulos (O2) para formar un equipo."
                },
                {
                    type: "DA",
                    title: "Estrategias de Supervivencia (DA)",
                    description: "Minimizar Debilidades y evitar Amenazas",
                    example: "Manejar la Procrastinación/Distracción (D1, D4) y enfocar el esfuerzo para contrarrestar la Falta de oportunidades locales (A2)."
                }
            ]
        };

        this.plan = [
            {
                icon: "",
                title: "Conocimiento Técnico",
                description: "Profundización en Inteligencia Artificial (IA) y Machine Learning, y en Gamificación avanzada para soluciones vanguardistas."
            },
            {
                icon: "",
                title: "Gestión de Negocios",
                description: "Adquirir habilidades en planeación estratégica y gestión financiera para startups (flujo de caja, inversión, proyecciones)."
            },
            {
                icon: "",
                title: "Expansión",
                description: "Aprender sobre normativas legales/fiscales y estrategias de go-to-market para la internacionalización."
            },
            {
                icon: "",
                title: "Desarrollo de Competencias",
                description: "Transformar el liderazgo natural en uno que sepa delegar sin miedo (superando D2/D3) y disciplinar/priorizar tareas con un 'foco de cirujano' (superando D1, D4, D5)."
            },
            {
                icon: "",
                title: "Próximos Pasos",
                description: "Buscar un coach de negocios/mentor para trabajar en delegación y confianza, y terapia/coaching para manejar la procrastinación, distracción y obsesión."
            }
        ];
    }

    getDafoData(type) {
        return this.dafo[type] || [];
    }

    getEstrategias() {
        return this.dafo.estrategias;
    }

    getPlan() {
        return this.plan;
    }
}

// ============================================
// UI RENDERER MODULE
// ============================================
class UIRenderer {
    constructor(dataManager) {
        this.data = dataManager;
    }

    renderDafoCard(type, items, icon) {
        const typeMap = {
            fortalezas: { class: "fortalezas", label: "FORTALEZAS" },
            oportunidades: { class: "oportunidades", label: "OPORTUNIDADES" },
            debilidades: { class: "debilidades", label: "DEBILIDADES" },
            amenazas: { class: "amenazas", label: "AMENAZAS" }
        };

        const config = typeMap[type];
        const title = config.label.charAt(0) + config.label.slice(1).toLowerCase();

        return `
            <div class="dafo-card ${config.class}" data-type="${config.label}">
                <div class="dafo-header">
                    <h3>${title}</h3>
                    <span class="dafo-icon">${icon}</span>
                </div>
                <ul class="dafo-list">
                    ${items.map(item => `
                        <li>
                            <span class="dafo-label">${item.id}</span>
                            ${item.text}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    renderEstrategiaCard(estrategia) {
        const typeMap = {
            "FO": "estrategia-fo",
            "FA": "estrategia-fa",
            "DO": "estrategia-do",
            "DA": "estrategia-da"
        };

        return `
            <div class="estrategia-card ${typeMap[estrategia.type]}">
                <h4>${estrategia.title}</h4>
                <p>${estrategia.description}</p>
                <div class="estrategia-example">
                    <strong>Ejemplo:</strong> ${estrategia.example}
                </div>
            </div>
        `;
    }

    renderPlanItem(item, index) {
        // Generar detalles adicionales basados en el título
        const details = this.getPlanDetails(item.title, item.description);
        
        return `
            <div class="plan-item" data-index="${index}" style="animation-delay: ${index * 0.1}s">
                <div class="plan-icon">${item.icon}</div>
                <div class="plan-content">
                    <div class="plan-header">
                        <h3>${item.title}</h3>
                        <button class="plan-toggle" aria-label="Expandir/Contraer">
                            <span class="plan-toggle-icon">+</span>
                        </button>
                    </div>
                    <div class="plan-description">
                        <p>${item.description}</p>
                    </div>
                    <div class="plan-details">
                        <div class="plan-details-content">
                            ${details}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getPlanDetails(title, description) {
        const detailsMap = {
            "Conocimiento Técnico": `
                <p><strong>Objetivos Específicos:</strong></p>
                <ul style="list-style: none; padding-left: 0;">
                    <li>• Dominar frameworks de IA y ML (TensorFlow, PyTorch)</li>
                    <li>• Implementar sistemas de gamificación en proyectos reales</li>
                    <li>• Certificaciones en tecnologías emergentes</li>
                    <li>• Contribuir a proyectos open-source</li>
                </ul>
            `,
            "Gestión de Negocios": `
                <p><strong>Áreas de Enfoque:</strong></p>
                <ul style="list-style: none; padding-left: 0;">
                    <li>• Análisis financiero y proyecciones a largo plazo</li>
                    <li>• Modelos de negocio para startups tecnológicas</li>
                    <li>• Estrategias de captación de inversión</li>
                    <li>• Métricas y KPIs para crecimiento sostenible</li>
                </ul>
            `,
            "Expansión": `
                <p><strong>Plan de Internacionalización:</strong></p>
                <ul style="list-style: none; padding-left: 0;">
                    <li>• Investigación de mercados objetivo</li>
                    <li>• Compliance legal y fiscal internacional</li>
                    <li>• Estrategias de localización y adaptación cultural</li>
                    <li>• Alianzas estratégicas globales</li>
                </ul>
            `,
            "Desarrollo de Competencias": `
                <p><strong>Habilidades a Desarrollar:</strong></p>
                <ul style="list-style: none; padding-left: 0;">
                    <li>• Delegación efectiva y construcción de confianza</li>
                    <li>• Gestión del tiempo y priorización estratégica</li>
                    <li>• Comunicación asertiva y liderazgo empático</li>
                    <li>• Balance entre perfeccionismo y eficiencia</li>
                </ul>
            `,
            "Próximos Pasos": `
                <p><strong>Acciones Inmediatas:</strong></p>
                <ul style="list-style: none; padding-left: 0;">
                    <li>• Identificar y contactar coaches/mentores especializados</li>
                    <li>• Establecer sesiones regulares de desarrollo personal</li>
                    <li>• Crear sistema de seguimiento de progreso</li>
                    <li>• Integrar feedback continuo en el proceso de crecimiento</li>
                </ul>
            `
        };

        return detailsMap[title] || `<p>${description}</p>`;
    }

    renderAll() {
        this.renderDafo();
        this.renderEstrategias();
        this.renderPlan();
    }

    renderDafo() {
        const matrix = document.getElementById('dafo-matrix');
        if (!matrix) return;

        const dafoCards = [
            { type: 'fortalezas', icon: '' },
            { type: 'oportunidades', icon: '' },
            { type: 'debilidades', icon: '' },
            { type: 'amenazas', icon: '' }
        ];

        matrix.innerHTML = dafoCards.map(card => {
            const items = this.data.getDafoData(card.type);
            return this.renderDafoCard(card.type, items, card.icon);
        }).join('');
    }

    renderEstrategias() {
        const grid = document.getElementById('estrategias-grid');
        if (!grid) return;

        const estrategias = this.data.getEstrategias();
        const typeMap = {
            "FO": "estrategia-fo",
            "FA": "estrategia-fa",
            "DO": "estrategia-do",
            "DA": "estrategia-da"
        };
        
        grid.innerHTML = estrategias.map((estrategia, index) => {
            return `
                <div class="estrategia-card ${typeMap[estrategia.type]}" data-index="${index}" data-type="${estrategia.type}">
                    <div class="estrategia-card-header">
                        <h4>${estrategia.title}</h4>
                        <button class="estrategia-toggle" aria-label="Expandir/Contraer">
                            <span class="estrategia-toggle-icon">+</span>
                        </button>
                    </div>
                    <p class="estrategia-card-description">${estrategia.description}</p>
                    <div class="estrategia-card-details">
                        <div class="estrategia-example">
                            <strong>Ejemplo:</strong> ${estrategia.example}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Inicializar estrategias expandibles después de renderizar
        setTimeout(() => {
            if (window.estrategiasCards) {
                window.estrategiasCards.init();
            }
        }, 100);
    }

    renderPlan() {
        const roadmap = document.getElementById('plan-roadmap');
        if (!roadmap) return;

        const plan = this.data.getPlan();
        roadmap.innerHTML = plan.map((item, index) => 
            this.renderPlanItem(item, index)
        ).join('');

        // Inicializar plan interactivo después de renderizar
        setTimeout(() => {
            if (window.planInteractive) {
                window.planInteractive.init();
            }
        }, 100);
    }
}

// ============================================
// ESTRATEGIAS CARDS MANAGER (Reemplaza el tabs manager)
// ============================================
class EstrategiasCardsManager {
    constructor() {
        this.cards = document.querySelectorAll('.estrategia-card');
        this.init();
    }

    init() {
        if (this.cards.length === 0) return;

        this.cards.forEach((card) => {
            const toggle = card.querySelector('.estrategia-toggle');
            const icon = card.querySelector('.estrategia-toggle-icon');

            if (toggle && icon) {
                toggle.addEventListener('click', () => {
                    const isExpanded = card.classList.contains('expanded');
                    
                    if (isExpanded) {
                        card.classList.remove('expanded');
                        icon.textContent = '+';
                        icon.style.transform = 'rotate(0deg)';
                    } else {
                        // Cerrar otros cards expandidos
                        this.cards.forEach(otherCard => {
                            if (otherCard !== card) {
                                otherCard.classList.remove('expanded');
                                const otherIcon = otherCard.querySelector('.estrategia-toggle-icon');
                                if (otherIcon) {
                                    otherIcon.textContent = '+';
                                    otherIcon.style.transform = 'rotate(0deg)';
                                }
                            }
                        });
                        
                        card.classList.add('expanded');
                        icon.textContent = '−';
                        icon.style.transform = 'rotate(0deg)';
                        
                        // Scroll suave al card expandido
                        setTimeout(() => {
                            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }, 300);
                    }
                });
            }
        });
    }
}


// ============================================
// PLAN INTERACTIVE MANAGER
// ============================================
class PlanInteractiveManager {
    constructor() {
        this.planItems = document.querySelectorAll('.plan-item');
        this.init();
    }

    init() {
        if (this.planItems.length === 0) return;

        this.planItems.forEach((item, index) => {
            const toggle = item.querySelector('.plan-toggle');
            const details = item.querySelector('.plan-details');
            const icon = item.querySelector('.plan-toggle-icon');

            if (toggle && details && icon) {
                toggle.addEventListener('click', () => {
                    const isExpanded = item.classList.contains('expanded');
                    
                    if (isExpanded) {
                        item.classList.remove('expanded');
                        icon.textContent = '+';
                        icon.style.transform = 'rotate(0deg)';
                    } else {
                        // Cerrar otros items expandidos
                        this.planItems.forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.classList.remove('expanded');
                                const otherIcon = otherItem.querySelector('.plan-toggle-icon');
                                if (otherIcon) {
                                    otherIcon.textContent = '+';
                                    otherIcon.style.transform = 'rotate(0deg)';
                                }
                            }
                        });
                        
                        item.classList.add('expanded');
                        icon.textContent = '−';
                        icon.style.transform = 'rotate(180deg)';
                        
                        // Scroll suave al item expandido
                        setTimeout(() => {
                            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }, 300);
                    }
                });
            }
        });
    }
}

// ============================================
// NAVIGATION MODULE
// ============================================
class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupSmoothScroll();
        this.setupActiveSection();
    }

    setupMobileMenu() {
        if (!this.hamburger || !this.navMenu) return;

        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });

        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger?.classList.remove('active');
                this.navMenu?.classList.remove('active');
            });
        });
    }

    setupScrollEffects() {
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
                this.navbar?.classList.add('scrolled');
    } else {
                this.navbar?.classList.remove('scrolled');
    }

            this.lastScroll = currentScroll;
});
    }

    setupSmoothScroll() {
        this.navLinks.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
        e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const target = document.querySelector(targetId);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
    }

    setupActiveSection() {
        const sections = document.querySelectorAll('[data-section]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('data-section');
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('data-section') === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => observer.observe(section));
    }
}

// ============================================
// ANIMATION MANAGER
// ============================================
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupParallax();
        this.setupTypingEffects();
    }

    setupScrollAnimations() {
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

        const animateElements = document.querySelectorAll(
            '.dafo-card, .estrategia-card, .plan-item, .profile-card'
        );

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
    }

    setupParallax() {
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        const parallaxY = scrolled * 0.5;
        const opacity = 1 - (scrolled / window.innerHeight);
                heroContent.style.transform = `translateY(${parallaxY}px)`;
        heroContent.style.opacity = opacity;
    }
        });
    }

    setupTypingEffects() {
        const typeWriter = (element, text, speed = 80) => {
    let i = 0;
    element.textContent = '';
    
            const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            const cursor = document.createElement('span');
            cursor.textContent = '_';
            cursor.style.animation = 'blink 1s infinite';
            element.appendChild(cursor);
        }
            };
    
    type();
        };

        // Terminal prompt typing
        const terminalPrompt = document.getElementById('terminal-prompt');
    if (terminalPrompt) {
        const originalText = terminalPrompt.textContent;
        terminalPrompt.textContent = '';
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                terminalPrompt.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }

        // Vision lema typing
        const visionLema = document.getElementById('vision-lema');
        if (visionLema) {
            const lemaObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
                        const originalText = entry.target.textContent.replace(/"/g, '');
                        entry.target.classList.add('typed');
                        typeWriter(entry.target, `"${originalText}"`, 80);
                    }
                });
            }, { threshold: 0.5 });

            lemaObserver.observe(visionLema);
        }
    }
}

// ============================================
// BOOT SCREEN MANAGER (inspirado en poolsuite.net)
// ============================================
class BootScreenManager {
    constructor() {
        this.bootScreen = null;
        this.progressFill = null;
        this.bootStatus = null;
        this.bootMessages = [
            "INITIALIZING SYSTEM...",
            "LOADING PORTFOLIO DATA...",
            "APPLYING RETRO 70S THEME...",
            "SETTING UP ANIMATIONS...",
            "ALMOST READY..."
        ];
        this.initialized = false;
    }

    init() {
        this.bootScreen = document.getElementById('boot-screen');
        this.progressFill = document.getElementById('boot-progress-fill');
        this.bootStatus = document.getElementById('boot-status');
        
        if (!this.bootScreen || !this.progressFill || !this.bootStatus) {
            console.warn('Boot screen elements not found, skipping boot sequence');
            if (this.bootScreen) {
                this.bootScreen.style.display = 'none';
            }
            document.body.style.overflow = 'auto';
            return;
        }

        if (this.initialized) return;
        this.initialized = true;
        this.startBootSequence();
    }

    async startBootSequence() {
        try {
            const totalSteps = this.bootMessages.length;
            let currentStep = 0;

            const updateProgress = () => {
                if (!this.progressFill || !this.bootStatus) {
                    console.warn('Boot screen elements not available');
                    return;
                }
                const progress = ((currentStep + 1) / totalSteps) * 100;
                this.progressFill.style.width = `${progress}%`;
                this.bootStatus.textContent = this.bootMessages[currentStep] || "READY!";
            };

            // Timeout de seguridad (máximo 10 segundos)
            const safetyTimeout = setTimeout(() => {
                this.hideBootScreen();
            }, 10000);

            // Inicializar con el primer mensaje
            updateProgress();

            for (let i = 0; i < totalSteps; i++) {
                currentStep = i;
                updateProgress();
                await this.delay(500);
            }

            // Limpiar timeout de seguridad
            clearTimeout(safetyTimeout);

            // Finalizar boot
            await this.delay(200);
            this.hideBootScreen();
        } catch (error) {
            console.error('Error en boot sequence:', error);
            this.hideBootScreen();
        }
    }

    hideBootScreen() {
        if (this.bootScreen) {
            this.bootScreen.style.opacity = '0';
            this.bootScreen.style.transition = 'opacity 0.5s ease';
            
    setTimeout(() => {
                if (this.bootScreen) {
                    this.bootScreen.style.display = 'none';
                }
                document.body.style.overflow = 'auto';
            }, 500);
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ============================================
// MAIN APPLICATION
// ============================================
class PortfolioApp {
    constructor() {
        this.dataManager = new PortfolioData();
        this.uiRenderer = new UIRenderer(this.dataManager);
        this.navigationManager = new NavigationManager();
        this.animationManager = new AnimationManager();
        this.bootScreenManager = new BootScreenManager();
        this.init();
    }

    init() {
        // Prevenir scroll durante boot
        document.body.style.overflow = 'hidden';

        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
} else {
            // DOM ya está listo, usar un pequeño delay para asegurar que los elementos existan
            setTimeout(() => this.start(), 50);
        }
    }

    start() {
        // Inicializar boot screen primero
        this.bootScreenManager.init();

        // Renderizar contenido
        this.uiRenderer.renderAll();

        // Inicializar cards de estrategias
        this.estrategiasCards = new EstrategiasCardsManager();
        window.estrategiasCards = this.estrategiasCards;

        // Inicializar plan interactivo
        this.planInteractive = new PlanInteractiveManager();
        window.planInteractive = this.planInteractive;

        // Actualizar año en footer
        const currentYear = document.getElementById('current-year');
        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }

        // Agregar estilos dinámicos
        this.addDynamicStyles();
    }

    addDynamicStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
}
}

// ============================================
// INITIALIZE APPLICATION
// ============================================
const app = new PortfolioApp();
