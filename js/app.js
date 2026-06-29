/**
 * MOTOR DE EXECUÇÃO DA INTERFACE
 * Renderiza conteúdo dinâmico a partir do config.js
 * Não altere este arquivo para mudar textos — use config.js
 */
document.addEventListener("DOMContentLoaded", () => {
    try {
        if (document.getElementById("hero-title")) {
            renderLandingPage();
        }
        initializeIntersectionObserver();
    } catch (error) {
        console.error("Erro no motor de renderização:", error);
    }
});

function renderLandingPage() {
    const data = DATA_CONFIG;
    if (!data) return;

    // ── CTAs globais de WhatsApp ──────────────────────
    const whatsappHooks = [
        document.getElementById("nav-cta"),
        document.getElementById("hero-primary-cta"),
        document.getElementById("final-cta-btn"),
        document.getElementById("whatsapp-fab")
    ];
    whatsappHooks.forEach(hook => {
        if (hook) hook.setAttribute("href", data.profile.whatsappUrl);
    });

    // ── Logos ─────────────────────────────────────────
    [document.getElementById("header-logo"), document.getElementById("footer-logo")]
        .forEach(node => { if (node) node.textContent = data.profile.name; });

    const crpFull = document.getElementById("footer-crp-full");
    if (crpFull) crpFull.textContent = `${data.profile.name} — ${data.profile.title} — CRP ${data.profile.crp}`;

    // ── Hero ──────────────────────────────────────────
    setText("hero-badge",    data.hero.badge);
    setHTML("hero-title",    data.hero.title);
    setText("hero-subtitle", data.hero.subtitle);
    setText("hero-primary-cta",   data.hero.ctaPrimary   || data.hero.ctaText || "Agendar consulta");
    setText("hero-secondary-cta", data.hero.ctaSecondary || "Saiba como posso ajudar");

    // ── Sobre ─────────────────────────────────────────
    setText("about-tag",   data.about.tag);
    setText("about-title", data.about.title);

    const crpBadge = document.getElementById("about-crp");
    if (crpBadge) {
        const span = crpBadge.querySelector("span") || crpBadge;
        span.textContent = `CRP ${data.profile.crp} · Ativo`;
    }

    const textContainer = document.getElementById("about-text-container");
    if (textContainer) {
        textContainer.innerHTML = "";
        const fragment = document.createDocumentFragment();
        data.about.paragraphs.forEach(text => {
            const p = document.createElement("p");
            p.className = "body-base";
            p.style.marginBottom = "1rem";
            p.textContent = text;
            fragment.appendChild(p);
        });
        textContainer.appendChild(fragment);
    }

    // ── Especialidades ────────────────────────────────
    setText("areas-tag",      data.specialtiesSection.tag);
    setText("areas-title",    data.specialtiesSection.title);
    setText("areas-subtitle", data.specialtiesSection.subtitle);

    const gridContainer = document.getElementById("areas-grid");
    if (gridContainer) {
        gridContainer.innerHTML = "";
        const fragment = document.createDocumentFragment();
        data.specialtiesSection.items.forEach(item => {
            const card = document.createElement("div");
            card.className = "card-atuacao reveal-fade-in";
            card.innerHTML = `
                <span class="card-icon" aria-hidden="true">${item.icon}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            fragment.appendChild(card);
        });
        gridContainer.appendChild(fragment);
    }

    // ── Ebook ─────────────────────────────────────────
    setText("ebook-tag",         data.ebook.tag);
    setText("ebook-title",       data.ebook.title);
    setText("ebook-description", data.ebook.description);
    const ebookCta = document.getElementById("ebook-funnel-cta");
    if (ebookCta) ebookCta.textContent = data.ebook.ctaText;

    // ── Processo ──────────────────────────────────────
    setText("process-tag",      data.processSection.tag);
    setText("process-title",    data.processSection.title);
    setText("process-subtitle", data.processSection.subtitle);

    const timeline = document.getElementById("process-timeline");
    if (timeline) {
        timeline.innerHTML = "";
        const fragment = document.createDocumentFragment();
        data.processSection.steps.forEach(step => {
            const item = document.createElement("div");
            item.className = "timeline-item reveal-fade-in";
            item.innerHTML = `
                <div class="timeline-marker" aria-hidden="true"></div>
                <h3>${step.title}</h3>
                <p>${step.desc}</p>
            `;
            fragment.appendChild(item);
        });
        timeline.appendChild(fragment);
    }

    // ── CTA Final ─────────────────────────────────────
    if (data.finalCta) {
        setText("final-cta-title",    data.finalCta.title);
        setText("final-cta-subtitle", data.finalCta.subtitle);
    }
}

// ── Helpers ───────────────────────────────────────────
function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
}
function setHTML(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.innerHTML = value;
}

// ── Intersection Observer — revelação por scroll ──────
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
        rootMargin: "0px 0px -40px 0px"
    });

    elements.forEach(el => observer.observe(el));
}
