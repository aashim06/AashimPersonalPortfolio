import { data } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderHeroLinks();
    renderSummary();
    renderProjects();
    renderSkills();
    renderExperience();
    renderAbout();
    renderAwards();
    renderContact();
    
    // Initialize icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    initScrollAnimations();
    initNavbarScrolled();
    initCustomCursor();
    initMagneticButtons();
    initHeroReveal();
}

/* ==========================================================================
   Render Functions (DOM Injection) for Premium Layout
   ========================================================================== */

function renderHeroLinks() {
    const container = document.querySelector('.hero-actions');
    if (container) {
        // Generates the Apple-style minimal icons and main primary button for resume
        container.innerHTML = `
            <a href="${data.personalInfo.github}" target="_blank" class="btn-secondary" title="GitHub" style="padding: 0.8rem;"><i data-feather="github"></i></a>
            <a href="${data.personalInfo.linkedin}" target="_blank" class="btn-secondary" title="LinkedIn" style="padding: 0.8rem;"><i data-feather="linkedin"></i></a>
            <a href="${data.personalInfo.resume}" target="_blank" class="btn-primary" style="margin: 0 0.5rem; letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.8rem; padding: 0.8rem 2rem;">Resume</a>
            <a href="${data.personalInfo.instagram}" target="_blank" class="btn-secondary" title="Instagram" style="padding: 0.8rem;"><i data-feather="instagram"></i></a>
            <a href="mailto:${data.personalInfo.email}" class="btn-secondary" title="Email" style="padding: 0.8rem;"><i data-feather="mail"></i></a>
        `;
    }
}

function renderSummary() {
    const container = document.getElementById('summary-content');
    if(container) {
        const textHTML = data.summary.map(p => `
            <p class="about-text" style="font-size: 1.15rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
                ${p.replace('building AI-powered systems, frontend dashboards, and robust backend architectures', '<span style="color:var(--text-primary); font-weight:500;">building AI-powered systems, frontend dashboards, and robust backend architectures</span>')}
            </p>
        `).join('');
        
        container.innerHTML = `
            <div class="grid-split" style="align-items: center;">
                <div class="summary-text-col" style="padding-right: 1rem;">
                    ${textHTML}
                </div>
                <!-- Premium Right Column: Quick Facts Bento -->
                <div class="summary-metrics-col" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    
                    <div class="metric-card spotlight-card" style="padding: 1.5rem; border-radius: 16px;">
                        <div class="spotlight-content">
                            <i data-feather="code" style="color: var(--text-primary); margin-bottom: 1.2rem;"></i>
                            <h4 style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.25rem; font-weight: 400; text-transform: uppercase; letter-spacing: 0.5px;">Background</h4>
                            <p style="color: var(--text-primary); font-weight: 500; font-size: 1.15rem;">Software Eng. Grad</p>
                        </div>
                    </div>
                    
                    <div class="metric-card spotlight-card" style="padding: 1.5rem; border-radius: 16px;">
                        <div class="spotlight-content">
                            <i data-feather="map-pin" style="color: var(--text-primary); margin-bottom: 1.2rem;"></i>
                            <h4 style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.25rem; font-weight: 400; text-transform: uppercase; letter-spacing: 0.5px;">Location</h4>
                            <p style="color: var(--text-primary); font-weight: 500; font-size: 1.15rem;">Melbourne, AU</p>
                        </div>
                    </div>
                    
                    <div class="metric-card spotlight-card" style="padding: 1.5rem; border-radius: 16px;">
                        <div class="spotlight-content">
                            <i data-feather="cpu" style="color: var(--text-primary); margin-bottom: 1.2rem;"></i>
                            <h4 style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.25rem; font-weight: 400; text-transform: uppercase; letter-spacing: 0.5px;">Expertise</h4>
                            <p style="color: var(--text-primary); font-weight: 500; font-size: 1.15rem;">Full-Stack, AI & Cloud</p>
                        </div>
                    </div>
                    
                    <div class="metric-card spotlight-card" style="padding: 1.5rem; border-radius: 16px;">
                        <div class="spotlight-content">
                            <i data-feather="message-circle" style="color: var(--text-primary); margin-bottom: 1.2rem;"></i>
                            <h4 style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.25rem; font-weight: 400; text-transform: uppercase; letter-spacing: 0.5px;">Status</h4>
                            <p style="color: var(--text-primary); font-weight: 500; font-size: 1.15rem;">Open to Connect</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
    }
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    const sliderHTML = `
        <div class="projects-slider" id="projects-slider">
            ${data.projects.map((project, index) => `
                <div class="project-slide">
                    <div class="project-slide-content">
                        <div class="project-info">
                            <span class="project-num">0${index + 1}</span>
                            <h3 class="project-title">${project.title}</h3>
                            <h4 class="project-subtitle">${project.role}</h4>
                            <p class="project-desc">${project.description}</p>
                            <div class="project-stack">
                                ${project.stack.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                            </div>
                            <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                                ${project.github ? `<a href="${project.github}" target="_blank" class="btn-secondary btn-sm" style="border-radius: 100px;">GitHub <i data-feather="github" style="width: 16px; margin-left:8px;"></i></a>` : ''}
                                ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn-primary btn-sm" style="border-radius: 100px;">Live Demo <i data-feather="external-link" style="width: 16px; margin-left:8px;"></i></a>` : ''}
                            </div>
                        </div>
                        <div class="project-visual-abstract spotlight-card">
                            <div class="spotlight-content" style="height: 100%; display: flex; flex-direction: column;">
                                <div style="flex-grow: 1; display:flex; align-items:center;">
                                    <span class="big-text">
                                        ${project.subtitle || project.title.split(' ')[0]}
                                    </span>
                                </div>
                                <div class="project-impact-box">
                                    <i data-feather="check-circle" class="impact-icon"></i>
                                    <span style="font-size: 0.9rem; text-align: left; color: var(--text-secondary);">${project.impact}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="slider-controls-container" style="position: relative; max-width: var(--container-width); margin: 0 auto; display: flex; justify-content: center; padding: 0 5vw;">
            <div class="slider-progress" id="slider-progress">
                ${data.projects.map((_, i) => `<button class="progress-dot ${i===0?'is-active':''}" aria-label="Go to slide ${i+1}" data-index="${i}"></button>`).join('')}
            </div>
            <div class="slider-nav reveal-up" style="position: absolute; right: 5vw; top: 50%; transform: translateY(-50%); bottom: auto; display: flex; gap: 1rem;">
                <button class="slider-btn" id="slider-prev" disabled aria-label="Previous Project"><i data-feather="chevron-left"></i></button>
                <button class="slider-btn" id="slider-next" aria-label="Next Project"><i data-feather="chevron-right"></i></button>
            </div>
        </div>
    `;
    container.innerHTML = sliderHTML;

    // Initialize navigation after DOM update
    setTimeout(initSliderNav, 100);
}

function initSliderNav() {
    const slider = document.getElementById('projects-slider');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const slides = slider ? slider.querySelectorAll('.project-slide') : [];
    const dots = document.querySelectorAll('.progress-dot');
    
    if (!slider || !prevBtn || !nextBtn) return;
    
    // Intersection Observer to track active slide
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(slides).indexOf(entry.target);
                
                // Update dots
                dots.forEach((dot, i) => {
                    dot.classList.toggle('is-active', i === index);
                });
                
                // Update slides visual state
                slides.forEach((slide, i) => {
                    slide.classList.toggle('is-active', i === index);
                });
            }
        });
    }, {
        root: slider,
        threshold: 0.5 // Trigger when 50% of the slide is visible
    });
    
    slides.forEach(slide => observer.observe(slide));
    
    const updateButtons = () => {
        const scrollLeft = slider.scrollLeft;
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        
        prevBtn.disabled = scrollLeft <= 10;
        nextBtn.disabled = scrollLeft >= maxScroll - 10;
    };
    
    slider.addEventListener('scroll', updateButtons, { passive: true });
    
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Native smooth scroll to the target slide center
            slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
    });
    
    window.addEventListener('resize', updateButtons);
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    
    const getIconForCategory = (cat) => {
        const c = cat.toLowerCase();
        if(c.includes('frontend')) return 'layout';
        if(c.includes('backend')) return 'server';
        if(c.includes('machine learning') || c.includes('ai')) return 'cpu';
        if(c.includes('tools') || c.includes('cloud')) return 'cloud';
        return 'code';
    };

    const skillsHTML = data.skills.map((skillGroup, index) => `
        <div class="skill-card spotlight-card reveal-up" style="transition-delay: ${index * 50}ms">
            <div class="spotlight-content" style="display: flex; flex-direction: column; height: 100%;">
                <div class="skill-header" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                    <div class="skill-icon-wrapper" style="padding: 0.8rem; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
                        <i data-feather="${getIconForCategory(skillGroup.category)}" style="color: var(--text-primary);"></i>
                    </div>
                    <h3 class="skill-category" style="margin: 0;">${skillGroup.category}</h3>
                </div>
                <ul class="skill-list" style="margin-top: auto;">
                    ${skillGroup.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
    container.innerHTML = skillsHTML;
}

function renderExperience() {
    const container = document.getElementById('experience-timeline');
    const expHTML = data.experience.map((exp, index) => `
        <div class="timeline-item reveal-up" style="transition-delay: ${index * 100}ms">
            <div class="timeline-dot"></div>
            <span class="timeline-period">${exp.period}</span>
            <h3 class="timeline-role">${exp.role}</h3>
            <h4 class="timeline-company">${exp.company}</h4>
            <ul class="timeline-points">
                ${exp.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>
    `).join('');
    container.innerHTML = expHTML;
}

function renderAbout() {
    const container = document.getElementById('about-content');
    if(container) {
        const parasHTML = data.about.paragraphs.map((p, index) => `
            <p class="about-text" style="font-size: 1.15rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem; animation-delay: ${index * 100}ms">
                ${p}
            </p>
        `).join('');
        
        container.innerHTML = `
            <div class="grid-split" style="align-items: center; gap: 4rem;">
                <div class="about-text-col reveal-up">
                    ${parasHTML}
                </div>
                <div class="about-image-col reveal-scale" style="display: flex; justify-content: center; align-items: center; transition-delay: 200ms;">
                    <div class="premium-portrait-container" style="position: relative; border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); max-width: 400px; width: 100%; aspect-ratio: 4/5; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
                        <div class="portrait-glow" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%); z-index: 2; pointer-events: none; opacity: 0; transition: opacity 0.5s ease;"></div>
                        <img src="assets/headshot.png" alt="Aashim Lal Portrait" 
                             style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.1) brightness(0.85); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); transform: scale(1.02); display: block;" 
                             onmouseover="this.style.filter='grayscale(0%) contrast(1.05) brightness(1.05)'; this.style.transform='scale(1.06)'; this.previousElementSibling.style.opacity='1';"
                             onmouseout="this.style.filter='grayscale(100%) contrast(1.1) brightness(0.85)'; this.style.transform='scale(1.02)'; this.previousElementSibling.style.opacity='0';"
                        />
                    </div>
                </div>
            </div>
        `;
    }
}

function renderAwards() {
    const container = document.getElementById('awards-list');
    const awardsHTML = data.awards.map((award, index) => `
        <div class="award-card spotlight-card reveal-up" style="transition-delay: ${index * 50}ms">
            <div class="spotlight-content">
                <div class="award-icon"><i data-feather="award"></i></div>
                <h3 class="award-title">${award.title}</h3>
                <p class="award-desc">${award.description} &mdash; <span style="color: var(--text-muted);">${award.issuer}</span></p>
            </div>
        </div>
    `).join('');
    container.innerHTML = awardsHTML;
}

function renderContact() {
    const container = document.querySelector('#contact .container');
    container.innerHTML = `
        <div class="contact-cta spotlight-card reveal-up" style="padding: 5rem 2rem; border-radius: 32px; text-align: center; margin: 4rem 0;">
            <div class="spotlight-content">
                <div class="cta-mesh-bg" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%; background: radial-gradient(ellipse at center, rgba(14, 165, 233, 0.08) 0%, transparent 60%); z-index: -1; pointer-events: none;"></div>
                
                <h2 class="contact-title" style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -2px; font-weight: 700; background: linear-gradient(to right, #fff, #9ca3af); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Let's build something<br/>exceptional together.</h2>
                
                <p style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 3rem; max-width: 500px; margin-left: auto; margin-right: auto; line-height: 1.8;">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                </p>
                
                <div class="contact-actions" style="display:flex; justify-content:center; gap: 1rem; flex-wrap:wrap;">
                    <a href="mailto:${data.personalInfo.email}" class="btn-primary" style="padding: 1rem 2.5rem; border-radius: 100px; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; text-decoration: none;">
                        Say Hello <i data-feather="arrow-right" style="width: 20px;"></i>
                    </a>
                </div>
                
                <div class="social-tags" style="display: flex; justify-content: center; gap: 2.5rem; margin-top: 4rem; flex-wrap: wrap;">
                    <a href="${data.personalInfo.github}" target="_blank" class="nav-link" style="display:flex; align-items:center; gap: 0.5rem;"><i data-feather="github" style="width:18px;"></i> GitHub</a>
                    <a href="${data.personalInfo.linkedin}" target="_blank" class="nav-link" style="display:flex; align-items:center; gap: 0.5rem;"><i data-feather="linkedin" style="width:18px;"></i> LinkedIn</a>
                    <a href="${data.personalInfo.resume}" target="_blank" class="nav-link" style="display:flex; align-items:center; gap: 0.5rem;"><i data-feather="file-text" style="width:18px;"></i> Resume</a>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('year').textContent = new Date().getFullYear();
}

/* ==========================================================================
   Interactions & Animations
   ========================================================================== */

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered pulse to timeline dots
                if (entry.target.classList.contains('timeline-item')) {
                    const dot = entry.target.querySelector('.timeline-dot');
                    if (dot) {
                        setTimeout(() => dot.classList.add('pulse'), 300);
                    }
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial reveal elements
    setTimeout(() => {
        document.querySelectorAll('.hidden-reveal').forEach(el => {
            el.classList.add('visible');
        });
    }, 50);

    // Scroll reveal elements
    document.querySelectorAll('.reveal-up, .reveal-scale, .timeline-item').forEach(el => {
        observer.observe(el);
    });
    
    initSpotlightEffect();
}

function initSpotlightEffect() {
    document.addEventListener("mousemove", (e) => {
        const cards = document.querySelectorAll(".spotlight-card");
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--mouse-x", x + "px");
            card.style.setProperty("--mouse-y", y + "px");
        });
    });
}

function initNavbarScrolled() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ==========================================================================
   Premium Interactions (Cursor & Magnetic Buttons)
   ========================================================================== */
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Immediate dot
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
    
    const renderCursor = () => {
        // Smooth lerp for trailing outline
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
        requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);
    
    // Magnetic / interactive hover state
    const interactables = document.querySelectorAll('a, button, .spotlight-card');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
    });
}

function initMagneticButtons() {
    const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-links a');
    
    magneticElements.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Subtle magnetic pull
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
            btn.style.transition = `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`;
            setTimeout(() => {
                if(btn.style) btn.style.transition = "";
            }, 500);
        });
    });
}

function initHeroReveal() {
    const heroTitle = document.getElementById('hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.innerText;
    heroTitle.innerHTML = '';
    
    // Split text into spans for each letter
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char; // Keep space formatting
        span.className = 'letter-reveal';
        // Stagger the animation timing
        span.style.animationDelay = `${index * 50}ms`;
        heroTitle.appendChild(span);
    });
}
