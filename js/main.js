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
            <a href="${data.personalInfo.instagram}" target="_blank" class="btn-secondary" title="Instagram" style="padding: 0.8rem;"><i data-feather="instagram"></i></a>
            <a href="mailto:${data.personalInfo.email}" class="btn-secondary" title="Email" style="padding: 0.8rem;"><i data-feather="mail"></i></a>
            <a href="${data.personalInfo.resume}" target="_blank" class="btn-primary" style="margin-left: 0.5rem;">View Resume</a>
        `;
    }
}

function renderSummary() {
    const container = document.getElementById('summary-content');
    if(container) {
        const textHTML = data.summary.map(p => `
            <p class="about-text">${p.replace('building AI-powered systems, frontend dashboards, and robust backend architectures', '<strong>building AI-powered systems, frontend dashboards, and robust backend architectures</strong>')}</p>
        `).join('');
        container.innerHTML = `<div class="about-content" style="max-width: 800px;">${textHTML}</div>`;
    }
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    const projectsHTML = data.projects.map((project, index) => `
        <div class="project-row reveal-up">
            <div class="project-info">
                <span class="project-num">0${index + 1}</span>
                <h3 class="project-title">${project.title}</h3>
                <h4 class="project-subtitle">${project.role}</h4>
                <p class="project-desc">${project.description}</p>
                <div class="project-stack">
                    ${project.stack.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="project-card-visual spotlight-card">
                <div class="spotlight-content" style="height: 100%; display: flex; flex-direction: column;">
                    <div style="flex-grow: 1; display:flex; align-items:center;">
                        <span style="font-family: var(--font-heading); font-size: 2rem; color: var(--text-muted); opacity: 0.3;">
                            ${project.subtitle}
                        </span>
                    </div>
                    <div class="project-impact-box">
                        <i data-feather="check-circle" class="impact-icon"></i>
                        <span style="font-size: 0.9rem; text-align: left; color: var(--text-secondary);">${project.impact}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    container.innerHTML = projectsHTML;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    const skillsHTML = data.skills.map((skillGroup, index) => `
        <div class="skill-card spotlight-card reveal-up" style="transition-delay: ${index * 50}ms">
            <div class="spotlight-content">
                <h3 class="skill-category">${skillGroup.category}</h3>
                <ul class="skill-list">
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
        const parasHTML = data.about.paragraphs.map(p => `<p class="about-text">${p}</p>`).join('');
        container.innerHTML = `<div class="about-content" style="max-width: 800px;">${parasHTML}</div>`;
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
        <div class="contact-content reveal-up">
            <h2 class="contact-title">Get in touch.</h2>
            <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2.5rem;">Let's build something exceptional together.</p>
            
            <div class="contact-links" style="display:flex; justify-content:center; gap: 2rem; flex-wrap:wrap;">
                <a href="${data.personalInfo.github}" target="_blank" class="contact-link"><i data-feather="github" style="margin-right: 8px;"></i> GitHub</a>
                <a href="${data.personalInfo.linkedin}" target="_blank" class="contact-link"><i data-feather="linkedin" style="margin-right: 8px;"></i> LinkedIn</a>
                <a href="${data.personalInfo.instagram}" target="_blank" class="contact-link"><i data-feather="instagram" style="margin-right: 8px;"></i> Instagram</a>
                <a href="mailto:${data.personalInfo.email}" class="contact-link"><i data-feather="mail" style="margin-right: 8px;"></i> Email</a>
                <a href="${data.personalInfo.resume}" target="_blank" class="contact-link" style="color:var(--text-primary);"><i data-feather="file-text" style="margin-right: 8px;"></i> Resume</a>
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
    document.querySelectorAll('.reveal-up').forEach(el => {
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
