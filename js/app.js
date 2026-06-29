/**
 * MOTOR DE EXECUÇÃO DA INTERFACE (CLIENT-SIDE ENGINE)
 */
document.addEventListener("DOMContentLoaded", () => {
    try {
        if (document.getElementById("hero-title")) {
            renderLandingPage();
        }
        initializeIntersectionObserver();
    } catch (error) {
        console.error("Erro controlado no motor de renderização:", error);
    }
});

function renderLandingPage() {
    const data = DATA_CONFIG;
    if (!data) return;

    // Sincronização Global de Links de Conversão (CTAs)
    const whatsappHooks = [
        document.getElementById("nav-cta"),
        document.getElementById("hero-primary-cta"),
        document.getElementById("final-cta-btn"),
        document.getElementById("whatsapp-fab")
    ];
    whatsappHooks.forEach(hook => {
        if (hook) hook.setAttribute("href", data.profile.whatsappUrl);
    });

    // Elementos Nominativos de Marca
    const logoNodes = [document.getElementById("header-logo"), document.getElementById("footer-logo")];
    logoNodes.forEach(node => { if (node) node.textContent = data.profile.name; });
    
    const crpFull = document.getElementById("footer-crp-full");
    if (crpFull) crpFull.textContent = `Dra. ${data.profile.name} — Psicóloga Clínica — CRP ${data.profile.crp}`;

    // Renderização da Seção Hero
    document.getElementById("hero-badge").textContent = data.hero.badge;
    document.getElementById("hero-title").innerHTML = data.hero.title;
    document.getElementById("hero-subtitle").textContent = data.hero.subtitle;
    document.getElementById("hero-primary-cta").textContent = data.hero.ctaText;

    // Renderização da Seção Sobre
    document.getElementById("about-tag").textContent = data.about.tag;
    document.getElementById("about-title").textContent = data.about.title;
    const crpBoxInner = document.getElementById("about-crp")?.querySelector("span");
    if (crpBoxInner) crpBoxInner.textContent = `CRP Ativo: ${data.profile.crp}`;

    const textContainer = document.getElementById("about-text-container");
    if (textContainer) {
        textContainer.innerHTML = "";
        const fragment = document.createDocumentFragment();
        data.about.paragraphs.forEach(text => {
            const p = document.createElement("p");
            p.className = "body-base text-muted margin-bottom-sm font-light";
            p.textContent = text;
            fragment.appendChild(p);
        });
        textContainer.appendChild(fragment);
    }

    // Renderização de Especialidades
    document.getElementById("areas-tag").textContent = data.specialtiesSection.tag;
    document.getElementById("areas-title").textContent = data.specialtiesSection.title;
    document.getElementById("areas-subtitle").textContent = data.specialtiesSection.subtitle;

    const gridContainer = document.getElementById("areas-grid");
    if (gridContainer) {
        gridContainer.innerHTML = "";
        const fragment = document.createDocumentFragment();
        data.specialtiesSection.items.forEach(item => {
            const card = document.createElement("div");
            card.className = "card-atuacao reveal-fade-in";
            card.innerHTML = `
                <span class="card-icon" aria-hidden="true">${item.icon}</span>
                <h3 class="font-display text-primary margin-bottom-sm" style="font-size: var(--fs-subtitle);">${item.title}</h3>
                <p class="body-sm text-muted font-light" style="line-height: 1.6;">${item.description}</p>
            `;
            fragment.appendChild(card);
        });
        gridContainer.appendChild(fragment);
    }

    // Renderização do Ebook
    document.getElementById("ebook-tag").textContent = data.ebook.tag;
    document.getElementById("ebook-title").textContent = data.ebook.title;
    document.getElementById("ebook-description").textContent = data.ebook.description;
    const ebookLink = document.getElementById("ebook-funnel-cta");
    if (ebookLink) ebookLink.textContent = data.ebook.ctaText;

    // Renderização do Processo Clinico
    document.getElementById("process-tag").textContent = data.processSection.tag;
    document.getElementById("process-title").textContent = data.processSection.title;
    document.getElementById("process-subtitle").textContent = data.processSection.subtitle;

    const timeline = document.getElementById("process-timeline");
    if (timeline) {
        timeline.innerHTML = "";
        const fragment = document.createDocumentFragment();
        data.processSection.steps.forEach(step => {
            const stepItem = document.createElement("div");
            stepItem.className = "timeline-item reveal-fade-in";
            stepItem.innerHTML = `
                <div class="timeline-marker" aria-hidden="true"></div>
                <h3 class="font-display text-primary margin-bottom-sm" style="font-size: 1.25rem;">${step.title}</h3>
                <p class="body-base text-muted font-light">${step.desc}</p>
            `;
            fragment.appendChild(stepItem);
        });
        timeline.appendChild(fragment);
    }
}

function initializeIntersectionObserver() {
    const elements = document.querySelectorAll(".reveal-fade-in, .reveal-scale-up");
    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add("active"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px"
    });

    elements.forEach(el => observer.observe(el));
}
