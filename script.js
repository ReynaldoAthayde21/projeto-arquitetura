// ========================================
// DADOS DOS PROJETOS (Personalizável)
// ========================================

const projectsData = {
    1: {
        title: 'Residência Moderna',
        description: 'Uma residência contemporânea com design minimalista e funcional.',
        fullDescription: 'Esta residência foi projetada com foco em minimalismo e funcionalidade. Cada espaço foi cuidadosamente planejado para maximizar a luz natural e criar fluxos de circulação eficientes. O projeto incorpora materiais sustentáveis e sistemas de eficiência energética.',
        image: 'https://via.placeholder.com/1200x400?text=Residência+Moderna',
        gallery: [
            'https://via.placeholder.com/500x400?text=Residência+1',
            'https://via.placeholder.com/500x400?text=Residência+2',
            'https://via.placeholder.com/500x400?text=Residência+3',
            'https://via.placeholder.com/500x400?text=Residência+4'
        ],
        area: '350 m²',
        year: '2023',
        location: 'São Paulo, SP',
        type: 'Residencial',
        category: 'residencial'
    },
    2: {
        title: 'Escritório Corporativo',
        description: 'Espaço de trabalho inovador com áreas colaborativas.',
        fullDescription: 'Um escritório moderno que promove colaboração e criatividade. O espaço foi dividido em zonas de trabalho focado, áreas de reunião e espaços de descanso. Implementamos soluções de acústica avançada e iluminação inteligente.',
        image: 'https://via.placeholder.com/1200x400?text=Escritório+Corporativo',
        gallery: [
            'https://via.placeholder.com/500x400?text=Escritório+1',
            'https://via.placeholder.com/500x400?text=Escritório+2',
            'https://via.placeholder.com/500x400?text=Escritório+3',
            'https://via.placeholder.com/500x400?text=Escritório+4'
        ],
        area: '800 m²',
        year: '2023',
        location: 'São Paulo, SP',
        type: 'Comercial',
        category: 'comercial'
    },
    3: {
        title: 'Loja Comercial',
        description: 'Ambiente de varejo com design atrativo e funcional.',
        fullDescription: 'Uma loja de varejo projetada para otimizar a experiência do cliente. O layout foi desenvolvido para facilitar a circulação e destacar os produtos. Utilizamos iluminação estratégica e materiais de alta qualidade.',
        image: 'https://via.placeholder.com/1200x400?text=Loja+Comercial',
        gallery: [
            'https://via.placeholder.com/500x400?text=Loja+1',
            'https://via.placeholder.com/500x400?text=Loja+2',
            'https://via.placeholder.com/500x400?text=Loja+3',
            'https://via.placeholder.com/500x400?text=Loja+4'
        ],
        area: '200 m²',
        year: '2022',
        location: 'São Paulo, SP',
        type: 'Comercial',
        category: 'comercial'
    },
    4: {
        title: 'Apartamento Luxo',
        description: 'Apartamento de alto padrão com acabamentos premium.',
        fullDescription: 'Um apartamento de luxo com acabamentos premium e vistas privilegiadas. O projeto incorpora tecnologia inteligente, climatização de última geração e materiais exclusivos. Cada detalhe foi cuidadosamente selecionado.',
        image: 'https://via.placeholder.com/1200x400?text=Apartamento+Luxo',
        gallery: [
            'https://via.placeholder.com/500x400?text=Apto+1',
            'https://via.placeholder.com/500x400?text=Apto+2',
            'https://via.placeholder.com/500x400?text=Apto+3',
            'https://via.placeholder.com/500x400?text=Apto+4'
        ],
        area: '250 m²',
        year: '2023',
        location: 'São Paulo, SP',
        type: 'Residencial',
        category: 'residencial'
    },
    5: {
        title: 'Reforma Interior',
        description: 'Transformação completa de espaço interior.',
        fullDescription: 'Uma reforma completa que transformou um espaço antigo em um ambiente moderno e funcional. O projeto incluiu reconfiguração de layout, novas instalações e acabamentos contemporâneos.',
        image: 'https://via.placeholder.com/1200x400?text=Reforma+Interior',
        gallery: [
            'https://via.placeholder.com/500x400?text=Reforma+1',
            'https://via.placeholder.com/500x400?text=Reforma+2',
            'https://via.placeholder.com/500x400?text=Reforma+3',
            'https://via.placeholder.com/500x400?text=Reforma+4'
        ],
        area: '150 m²',
        year: '2023',
        location: 'São Paulo, SP',
        type: 'Design',
        category: 'design'
    },
    6: {
        title: 'Consultoria Design',
        description: 'Consultoria completa em design de interiores.',
        fullDescription: 'Projeto de consultoria que envolveu análise completa do espaço existente e propostas de transformação. Desenvolvemos paleta de cores, seleção de móveis e layout otimizado.',
        image: 'https://via.placeholder.com/1200x400?text=Consultoria+Design',
        gallery: [
            'https://via.placeholder.com/500x400?text=Consultoria+1',
            'https://via.placeholder.com/500x400?text=Consultoria+2',
            'https://via.placeholder.com/500x400?text=Consultoria+3',
            'https://via.placeholder.com/500x400?text=Consultoria+4'
        ],
        area: '300 m²',
        year: '2022',
        location: 'São Paulo, SP',
        type: 'Design',
        category: 'design'
    }
};

// ========================================
// CONFIGURAÇÕES PERSONALIZÁVEIS
// ========================================

const siteConfig = {
    // Informações do Escritório
    officeName: 'ArquiStudio',
    officeAddress: 'Rua Exemplo, 123 - São Paulo, SP 01234-567',
    officePhone: '+55 (11) 99999-9999',
    officeEmail: 'contato@arquistudio.com',
    
    // Redes Sociais (atualize com seus links)
    socialLinks: {
        instagram: 'https://instagram.com',
        whatsapp: 'https://wa.me/5511999999999',
        tiktok: 'https://tiktok.com'
    },
    
    // Cores Personalizáveis (CSS Variables)
    colors: {
        primary: '#867638',
        secondary: '#867638',
        accent: '#ff6b35'
    }
};

// ========================================
// FUNÇÕES UTILITÁRIAS
// ========================================

// Obter parâmetro de URL
function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Atualizar cores personalizadas
function updateColors(colors) {
    document.documentElement.style.setProperty('--primary-color', colors.primary);
    document.documentElement.style.setProperty('--secondary-color', colors.secondary);
    document.documentElement.style.setProperty('--accent-color', colors.accent);
}

// Mostrar notificação
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show`;
    notification.setAttribute('role', 'alert');
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.body;
    container.insertBefore(notification, container.firstChild);
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// ========================================
// FUNCIONALIDADES DE PORTFÓLIO
// ========================================

// Filtrar projetos por categoria
function filterProjects(category) {
    const items = document.querySelectorAll('.portfolio-item');
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden');
            item.style.display = 'block';
        } else {
            item.classList.add('hidden');
            item.style.display = 'none';
        }
    });
    
    // Atualizar botão ativo
    document.querySelectorAll('.filter-buttons .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Carregar dados do projeto na página de detalhes
function loadProjectDetails() {
    const projectId = getUrlParameter('id');
    
    if (!projectId || !projectsData[projectId]) {
        window.location.href = 'portfolio.html';
        return;
    }
    
    const project = projectsData[projectId];
    
    // Atualizar elementos da página
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectFullDescription').textContent = project.fullDescription;
    document.getElementById('projectImage').src = project.image;
    document.getElementById('projectArea').textContent = project.area;
    document.getElementById('projectYear').textContent = project.year;
    document.getElementById('projectLocation').textContent = project.location;
    document.getElementById('projectType').textContent = project.type;
    
    // Sidebar
    document.getElementById('sidebarCategory').textContent = project.type;
    document.getElementById('sidebarStatus').textContent = 'Concluído';
    document.getElementById('sidebarArchitect').textContent = siteConfig.officeName;
    
    // Galeria
    const galleryContainer = document.getElementById('projectGallery');
    galleryContainer.innerHTML = '';
    
    project.gallery.forEach((image, index) => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-6';
        colDiv.innerHTML = `<img src="${image}" class="img-fluid rounded" alt="Foto ${index + 1}">`;
        galleryContainer.appendChild(colDiv);
    });
    
    // Projetos relacionados
    loadRelatedProjects(projectId, project.category);
    
    // Atualizar título da página
    document.title = `${project.title} - Portfólio de Arquitetura`;
}

// Carregar projetos relacionados
function loadRelatedProjects(currentProjectId, category) {
    const relatedContainer = document.getElementById('relatedProjects');
    relatedContainer.innerHTML = '';
    
    let count = 0;
    for (const [id, project] of Object.entries(projectsData)) {
        if (id !== currentProjectId && project.category === category && count < 3) {
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4';
            card.innerHTML = `
                <div class="card project-card h-100">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text text-muted">${project.description}</p>
                    </div>
                    <div class="card-footer bg-white border-top-0">
                        <a href="project-detail.html?id=${id}" class="btn btn-primary btn-sm">Ver Detalhes</a>
                    </div>
                </div>
            `;
            relatedContainer.appendChild(card);
            count++;
        }
    }
}

// ========================================
// FUNCIONALIDADES DE CONTATO
// ========================================

// Inicializar formulário de contato
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            projectType: document.getElementById('projectType').value,
            message: document.getElementById('message').value
        };
        
        // Validar dados
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showNotification('Por favor, preencha todos os campos obrigatórios', 'warning');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('Por favor, insira um email válido', 'warning');
            return;
        }
        
        // Simular envio (em produção, enviar para servidor)
        console.log('Dados do formulário:', formData);
        
        // Mostrar mensagem de sucesso
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        
        // Limpar formulário
        form.reset();
    });
}

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Atualizar cores personalizadas
    updateColors(siteConfig.colors);
    
    // Inicializar filtros de portfólio
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterProjects(this.dataset.filter);
        });
    });
    
    // Carregar detalhes do projeto se estiver na página de detalhes
    if (document.getElementById('projectTitle')) {
        loadProjectDetails();
    }
    
    // Inicializar formulário de contato
    initContactForm();
    
    // Adicionar efeito de scroll suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Fechar navbar ao clicar em um link
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                navbarToggler.click();
            }
        });
    });
});

// ========================================
// FUNÇÕES DE PERSONALIZAÇÃO
// ========================================

// Atualizar informações do escritório
function updateOfficeInfo(config) {
    // Atualizar endereço
    const addressElement = document.getElementById('officeAddress');
    if (addressElement) {
        addressElement.textContent = config.officeAddress;
    }
    
    // Atualizar telefone
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.href = `tel:${config.officePhone.replace(/\D/g, '')}`;
        link.textContent = config.officePhone;
    });
    
    // Atualizar email
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.href = `mailto:${config.officeEmail}`;
        link.textContent = config.officeEmail;
    });
    
    // Atualizar links de redes sociais
    const instagramLinks = document.querySelectorAll('a[href*="instagram"]');
    instagramLinks.forEach(link => {
        link.href = config.socialLinks.instagram;
    });
    
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.href = config.socialLinks.whatsapp;
    });
    
    const tiktokLinks = document.querySelectorAll('a[href*="tiktok"]');
    tiktokLinks.forEach(link => {
        link.href = config.socialLinks.tiktok;
    });
}

// Chamar ao carregar a página
updateOfficeInfo(siteConfig);

// ========================================
// ANIMAÇÕES DE SCROLL
// ========================================

// Observador de intersecção para animações
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards de projetos
document.querySelectorAll('.project-card, .service-card, .value-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
