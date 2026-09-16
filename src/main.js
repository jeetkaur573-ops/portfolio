import { portfolioProjects, developerBio } from './projectsData.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  renderServices();
  renderSkills();
  setupFilterTabs();
  setupModalEvents();
  setupFormHandler();
  setupScrollReveal();
  setupAnimatedCounters();
  setupBackToTop();
});

// ===== SCROLL REVEAL =====
function setupScrollReveal() {
  // Add reveal class to sections
  document.querySelectorAll('.section-title, .glass-panel.form-card, .grid-2').forEach(el => {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .reveal-left').forEach(el => observer.observe(el));
}

// ===== ANIMATED STAT COUNTERS =====
function setupAnimatedCounters() {
  const statNums = document.querySelectorAll('.stat-num');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNums.forEach(el => animateCounter(el));
      }
    });
  }, { threshold: 0.3 });

  statNums.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const text = el.textContent;
  const numMatch = text.match(/([\d.]+)/);
  if (!numMatch) return;

  const target = parseFloat(numMatch[1]);
  const suffix = text.replace(numMatch[1], '');
  const isDecimal = text.includes('.');
  const duration = 1200;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = eased * target;

    if (isDecimal) {
      el.textContent = current.toFixed(1) + suffix;
    } else {
      el.textContent = Math.floor(current) + suffix;
    }

    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = text; // restore exact original
  }

  el.textContent = '0' + suffix;
  requestAnimationFrame(step);
}

// ===== BACK TO TOP =====
function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Render High-Impact Glassmorphism Project Cards
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filteredProjects = filter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter);

  container.innerHTML = filteredProjects.map(project => `
    <div class="glass-panel project-card">
      <div class="project-accent-bar" style="background: ${project.accentGradient}"></div>
      
      <div class="project-card-header">
        <div class="project-icon-box" style="background: ${project.accentColor}18; color: ${project.accentColor}; box-shadow: 0 4px 15px ${project.accentColor}25;">
          <i class="fa-solid ${project.icon}"></i>
        </div>
        <div class="platform-pills">
          ${project.driverPlayStoreUrl ? `
            <a href="${project.playStoreUrl}" target="_blank" class="btn-playstore" title="SASA Passenger App on Play Store">
              <i class="fa-brands fa-google-play"></i> Passenger App
            </a>
            <a href="${project.driverPlayStoreUrl}" target="_blank" class="btn-playstore" style="background: linear-gradient(135deg, #0284c7, #38bdf8);" title="SASA Driver App on Play Store">
              <i class="fa-brands fa-google-play"></i> Driver App
            </a>
          ` : project.playStoreUrl ? `
            <a href="${project.playStoreUrl}" target="_blank" class="btn-playstore" title="Click to view live app on Google Play Store">
              <i class="fa-brands fa-google-play"></i> Live Play Store App
            </a>
          ` : `
            <span class="pill-tech"><i class="fa-solid fa-code"></i> ${project.categoryName}</span>
          `}
        </div>
      </div>

      <div class="project-card-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDesc}</p>

        <div class="tech-tags">
          ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="card-footer">
          <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">
            <i class="fa-regular fa-clock"></i> ${project.duration}
          </span>
          <button class="btn-link view-case-study-btn" data-id="${project.id}">
            View Case Study <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Staggered slide-in animation on each card
  const cards = container.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
    card.style.transition = 'none';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateX(0)';
    }, i * 80);
  });

  // Re-attach modal triggers
  document.querySelectorAll('.view-case-study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectId = e.currentTarget.getAttribute('data-id');
      openModal(projectId);
    });
  });
}

// Render Core Services
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = developerBio.coreServices.map(service => `
    <div class="glass-panel card-simple">
      <i class="fa-solid ${service.icon}"></i>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
    </div>
  `).join('');
}

// Render Technical Skills
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = developerBio.skills.map(skillGroup =>
    `<div class="glass-panel card-simple">
      <h3 class="skill-group-title">
        <i class="fa-solid fa-layer-group"></i> ${skillGroup.category}
      </h3>
      <div class="tech-tags">
        ${skillGroup.items.map(item => `<span class="tech-tag">${item}</span>`).join('')}
      </div>
    </div>`
  ).join('');
}

// Setup Filter Tabs
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// Modal Manager
function openModal(projectId) {
  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="modal-category-label">${project.categoryName}</div>
    <h3 class="modal-project-title">${project.title}</h3>
    <p class="modal-meta">
      <i class="fa-solid fa-box"></i> Package: <code>${project.packageId}</code> &nbsp;|&nbsp; Est. Cost: <strong>${project.costRange}</strong>
    </p>

    ${project.driverPlayStoreUrl ? `
      <div class="modal-store-btns">
        <a href="${project.playStoreUrl}" target="_blank" class="btn-playstore btn-playstore-lg">
          <i class="fa-brands fa-google-play"></i> Passenger App — Play Store
        </a>
        <a href="${project.driverPlayStoreUrl}" target="_blank" class="btn-playstore btn-playstore-lg btn-playstore-alt">
          <i class="fa-brands fa-google-play"></i> Driver App — Play Store
        </a>
      </div>
    ` : project.playStoreUrl ? `
      <div class="modal-store-btns">
        <a href="${project.playStoreUrl}" target="_blank" class="btn-playstore btn-playstore-lg">
          <i class="fa-brands fa-google-play"></i> View on Google Play Store
        </a>
      </div>
    ` : ''}

    <div class="modal-section">
      <h4><i class="fa-solid fa-check"></i> Key Features &amp; Scope</h4>
      <ul class="modal-list">
        ${project.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-triangle-exclamation"></i> Engineering Challenges</h4>
      <ul class="modal-list">
        ${project.challenges.map(c => `<li>${c}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4><i class="fa-solid fa-gear"></i> Technical Solutions &amp; Execution</h4>
      <ul class="modal-list">
        ${project.solutions.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-metrics">
      <h4><i class="fa-solid fa-chart-line"></i> Performance Metrics</h4>
      <div class="metrics-grid">
        ${Object.entries(project.metrics).map(([k, v]) => `
          <div class="metric-item">
            <div class="metric-value">${v}</div>
            <div class="metric-label">${k}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  overlay.classList.add('active');
}

function setupModalEvents() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('close-modal');

  closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  });
}

// Form Handler — sends to Formspree then opens Fiverr
function setupFormHandler() {
  const form = document.getElementById('project-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    try {
      const formData = new FormData(form);

      const response = await fetch('https://formspree.io/f/myezgbpr', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        const name = document.getElementById('client-name').value;
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Sent Successfully!';
        submitBtn.style.background = '#1B2A4A';

        setTimeout(() => {
          alert(`Thank you, ${name}! Your inquiry has been received. Taking you to my Fiverr profile to start your project!`);
          window.open('https://www.fiverr.com/s/9d97ded', '_blank');
          form.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 800);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      submitBtn.innerHTML = '<i class="fa-solid fa-exclamation-triangle"></i> Failed — Try Again';
      submitBtn.disabled = false;
      setTimeout(() => { submitBtn.innerHTML = originalText; }, 2500);
    }
  });
}
