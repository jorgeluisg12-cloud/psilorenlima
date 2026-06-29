/**
 * FONTE ÚNICA DA VERDADE (SINGLE SOURCE OF TRUTH)
 * Gerenciamento centralizado de dados estruturais de conversão e textos.
 */
const DATA_CONFIG = {
    profile: {
        name: "Lorena Lima",
        title: "Psicóloga Clínica",
        specialty: "Terapia Cognitivo-Comportamental",
        crp: "11/24850",[cite: 1]
        // Link direto parametrizado focado em conversão e redução de fricção
        whatsappUrl: "https://wa.me/5599999999999?text=Olá%2C+Dra.+Lorena.+Gostaria+de+verificar+os+horários+disponíveis+para+atendimento+clínico.",
        seo: {
            title: "Dra. Lorena Lima | Psicóloga Clínica Especialista em TCC",[cite: 1]
            description: "Tratamentos baseados em evidências para ansiedade, depressão e esgotamento. Atendimento de excelência em Marabá.",
            url: "https://lorenalima.com.br"
        }
    },
    
    hero: {
        badge: "Agendamentos Disponíveis",
        title: "Cuidado que acolhe, <br>ciência que transforma.",[cite: 1]
        subtitle: "Enencontre direção e desenvolva estratégias cognitivo-comportamentais estáveis para reconfigurar padrões de ansiedade e recuperar o bem-estar prático.",
        ctaText: "Agendar Consulta via WhatsApp"
    },
    
    about: {
        tag: "A Abordagem",
        title: "Ciência com olhar humano",[cite: 1]
        paragraphs: [
            "Sou psicóloga com atuação clínica estruturada sob as diretrizes da Terapia Cognitivo-Comportamental (TCC)[cite: 1]. Minha prática profissional visa unir o rigor científico e metodológico à construção de um ambiente de acolhimento genuíno e seguro[cite: 1].",
            "Nossas sessões operam sob um modelo colaborativo: identificamos os esquemas de pensamentos que causam limitação e construímos autonomia comportamental estável."
        ]
    },
    
    specialtiesSection: {
        tag: "Especialidades",
        title: "Áreas de Atendimento Clínico",
        subtitle: "Tratamentos estruturados com base em protocolos científicos altamente focados em resolutividade.",
        items: [
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon-md" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /></svg>`,
                title: "Tratamento da Ansiedade",
                description: "Identificação de gatilhos, manejo físico e reestruturação ativa de pensamentos automáticos de caráter catastrófico."
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon-md" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5M12 18.75V21M4.5 12H3m18 0h-1.5m-2.25-6.75-1.06 1.06M6.31 17.69l-1.06 1.06m12.72 0 1.06-1.06M6.31 6.31l-1.06-1.06M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" /></svg>`,
                title: "Depressão e Transtornos de Humor",
                description: "Protocolos estruturados de ativação comportamental focados em devolver vitalidade e quebrar ciclos de isolamento."
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon-md" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>`,
                title: "Esgotamento (Burnout)",
                description: "Desenvolvimento de estratégias de enfrentamento corporativo, limites saudáveis e organização de hábitos sustentáveis."
            }
        ]
    },
    
    ebook: {
        tag: "Material Gratuito",
        title: "Guia Prático de Regulação Emocional",[cite: 1]
        description: "Entenda os mecanismos da sua ansiedade através de técnicas práticas baseadas na Terapia Cognitivo-Comportamental.",
        pdfUrl: "assets/pdf/guia-regulacao-emocional.pdf",[cite: 1]
        ctaText: "Baixar Material Gratuito"
    },
    
    processSection: {
        tag: "O Processo",
        title: "Como funciona o acompanhamento",
        subtitle: "Passos claros e transparentes até o desenvolvimento da sua autonomia.",
        steps: [
            { title: "1. Alinhamento de Horário", desc: "Contato inicial direto via WhatsApp para escolha do melhor horário de atendimento." },
            { title: "2. Primeira Sessão", desc: "Avaliação diagnóstica detalhada para mapeamento das suas principais demandas atuais." },
            { title: "3. Sessões Ativas Semanais", desc: "Desenvolvimento de planos de ação práticos baseados nas metas estabelecidas coletivamente." },
            { title: "4. Consolidação e Alta", desc: "Fase focada na prevenção de recaídas e solidificação da sua autonomia emocional." }
        ]
    }
};
