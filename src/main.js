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

// ===== HELPER: GENERATE REALISTIC HIGH-FIDELITY APP MOCKUP HEADERS =====
function getProjectMockupHtml(project) {
  if (project.id === 'dating-app' || project.category === 'social') {
    return `
      <div class="mockup-header mockup-dating">
        <div class="dating-screen">
          <div class="dating-top-pill">
            <span class="pulse-dot" style="background: #ec4899;"></span> 98% Compatibility
          </div>
          <div class="dating-profile-card">
            <div class="dating-avatar-box">
              <div class="avatar-shimmer"></div>
              <div class="dating-badge-online"></div>
            </div>
            <div class="dating-info">
              <div class="dating-name">Elena, 26 <i class="fa-solid fa-circle-check verify-badge"></i></div>
              <div class="dating-sub"><i class="fa-solid fa-location-dot"></i> 1.8 mi away &bull; Designer</div>
            </div>
          </div>
          <div class="dating-action-bar">
            <div class="action-btn action-pass"><i class="fa-solid fa-xmark"></i></div>
            <div class="action-btn action-star"><i class="fa-solid fa-star"></i></div>
            <div class="action-btn action-like"><i class="fa-solid fa-heart"></i></div>
          </div>
        </div>
      </div>
    `;
  } else if (project.id === 'cab-booking' || project.category === 'mobility') {
    return `
      <div class="mockup-header mockup-mobility">
        <div class="mobility-screen">
          <!-- GPS Map Background & Animated Route -->
          <div class="map-grid"></div>
          <div class="gps-route-line"></div>
          <div class="gps-pin-start"><i class="fa-solid fa-circle-dot"></i></div>
          <div class="gps-car-marker"><i class="fa-solid fa-car"></i></div>
          <div class="gps-pin-end"><i class="fa-solid fa-location-dot"></i></div>
          
          <div class="mobility-eta-card">
            <div class="eta-left">
              <div class="eta-time">2 min away</div>
              <div class="eta-car">Toyota Camry &bull; 4.9★</div>
            </div>
            <div class="eta-price">$18.50</div>
          </div>
        </div>
      </div>
    `;
  } else if (project.id === 'pwa-conversion' || project.category === 'web-to-app') {
    return `
      <div class="mockup-header mockup-pwa">
        <div class="pwa-screen">
          <div class="pwa-col pwa-col-web">
            <div class="browser-bar">
              <span class="dot-red"></span><span class="dot-yellow"></span><span class="dot-green"></span>
              <span class="browser-url">https://aurami.app</span>
            </div>
            <div class="web-content-shimmer"></div>
          </div>

          <div class="pwa-bridge-badge">
            <i class="fa-solid fa-bolt"></i> Capacitor
          </div>

          <div class="pwa-col pwa-col-native">
            <div class="native-phone-frame">
              <div class="native-notch"></div>
              <div class="faceid-prompt">
                <i class="fa-solid fa-fingerprint"></i>
                <span>Biometric Auth</span>
              </div>
              <div class="native-tab-bar">
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (project.id === 'ai-calorie' || project.category === 'ai-health') {
    return `
      <div class="mockup-header mockup-health">
        <div class="health-screen">
          <div class="scanner-crosshair">
            <span class="corner tl"></span><span class="corner tr"></span>
            <span class="corner bl"></span><span class="corner br"></span>
            <div class="scan-laser"></div>
          </div>
          <div class="health-ai-badge">
            <i class="fa-solid fa-brain"></i> Multimodal AI &bull; 97.4%
          </div>
          <div class="health-macros-row">
            <div class="macro-chip"><span class="macro-val">520</span> kcal</div>
            <div class="macro-chip"><span class="macro-val">34g</span> Protein</div>
            <div class="macro-chip"><span class="macro-val">45g</span> Carbs</div>
          </div>
        </div>
      </div>
    `;
  } else if (project.id === 'wireguard-vpn' || project.category === 'cybersecurity') {
    return `
      <div class="mockup-header mockup-vpn">
        <div class="vpn-screen">
          <div class="vpn-status-header">
            <div class="vpn-shield-box">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div class="vpn-telemetry">
              <div class="vpn-mode">WireGuard &bull; Tunnel Active</div>
              <div class="vpn-speed">320 Mbps &bull; 0% Packet Loss</div>
            </div>
          </div>
          <div class="vpn-server-card">
            <span class="server-flag">🇩🇪</span>
            <div class="server-info">
              <span class="server-name">Frankfurt #04 (Ultra-Fast)</span>
              <span class="server-ping"><i class="fa-solid fa-signal"></i> 14ms ping</span>
            </div>
            <div class="server-toggle active"></div>
          </div>
        </div>
      </div>
    `;
  } else if (project.id === 'ecommerce-app' || project.category === 'ecommerce') {
    return `
      <div class="mockup-header mockup-ecommerce">
        <div class="ecom-screen">
          <div class="ecom-card">
            <div class="ecom-img-box">
              <i class="fa-solid fa-bag-shopping"></i>
              <span class="discount-pill">-25%</span>
            </div>
            <div class="ecom-details">
              <div class="ecom-title">AeroSneaker Pro</div>
              <div class="ecom-price-row">
                <span class="ecom-price">$189.00</span>
                <span class="ecom-stock"><i class="fa-solid fa-check"></i> ERP In Stock</span>
              </div>
            </div>
          </div>
          <div class="apple-pay-btn">
            <i class="fa-brands fa-apple"></i> Pay &bull; 1-Tap Checkout
          </div>
        </div>
      </div>
    `;
  } else {
    // TaskPulse / Enterprise SaaS
    return `
      <div class="mockup-header mockup-saas">
        <div class="saas-screen">
          <div class="saas-top-row">
            <div class="saas-title"><i class="fa-solid fa-list-check"></i> Sprint Velocity</div>
            <div class="saas-sync-pill"><i class="fa-solid fa-arrows-rotate"></i> Realtime</div>
          </div>
          <div class="kanban-cols">
            <div class="kanban-col">
              <div class="kanban-tag">In Review (3)</div>
              <div class="kanban-card">API Gateway Auth</div>
            </div>
            <div class="kanban-col col-done">
              <div class="kanban-tag">Completed (8)</div>
              <div class="kanban-card">Offline Sync Queue</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// ===== RENDER PROJECTS =====
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filteredProjects = filter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter);

  container.innerHTML = filteredProjects.map((project) => `
    <div class="project-card">
      ${getProjectMockupHtml(project)}
      
      <div class="project-card-body">
        <div class="project-meta-top">
          <span class="project-category-badge">${project.categoryName}</span>
          <span class="project-duration"><i class="fa-regular fa-clock"></i> ${project.duration}</span>
        </div>

        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-desc">${project.shortDesc}</p>

        <div class="project-metrics-strip">
          ${project.metrics.fps ? `<span class="metric-pill"><i class="fa-solid fa-bolt"></i> ${project.metrics.fps}</span>` : ''}
          ${project.metrics.uptime ? `<span class="metric-pill"><i class="fa-solid fa-shield"></i> ${project.metrics.uptime} Uptime</span>` : ''}
          ${project.metrics.storeRating ? `<span class="metric-pill"><i class="fa-solid fa-star"></i> ${project.metrics.storeRating}</span>` : ''}
          ${project.metrics.throughput ? `<span class="metric-pill"><i class="fa-solid fa-gauge-high"></i> ${project.metrics.throughput}</span>` : ''}
          ${project.metrics.loadTime ? `<span class="metric-pill"><i class="fa-solid fa-stopwatch"></i> ${project.metrics.loadTime}</span>` : ''}
        </div>

        <div class="tech-pills">
          ${project.techStack.slice(0, 4).map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
        </div>

        <div class="project-card-actions">
          ${project.playStoreUrl ? `
            <a href="${project.playStoreUrl}" target="_blank" class="btn-pill-dark btn-card-action" title="View live app on Google Play Store">
              <i class="fa-brands fa-google-play"></i> Play Store
            </a>
          ` : ''}
          <button class="btn-pill-outline btn-card-action view-case-study-btn" data-id="${project.id}">
            Case Study <i class="fa-solid fa-arrow-right" style="margin-left: 4px; font-size: 0.72rem;"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-attach modal triggers
  document.querySelectorAll('.view-case-study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectId = e.currentTarget.getAttribute('data-id');
      openModal(projectId);
    });
  });
}

// ===== RENDER SERVICES (6 White Cards) =====
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = developerBio.coreServices.map(service => `
    <div class="service-card">
      <div class="service-icon">
        <i class="fa-solid ${service.icon}"></i>
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.desc}</p>
    </div>
  `).join('');
}

// ===== RENDER SKILLS (4 Sand Blocks) =====
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = developerBio.skills.map(group => `
    <div class="skill-card">
      <h3 class="skill-card-title">${group.category}</h3>
      <div class="skill-pill-list">
        ${group.items.map(item => `<span class="skill-pill">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ===== FILTER TABS =====
function setupFilterTabs() {
  const tabs = document.querySelectorAll('.tab-pill');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// ===== MODAL POPUP =====
function openModal(projectId) {
  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div class="modal-eyebrow">${project.categoryName}</div>
    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-meta">
      <span><i class="fa-regular fa-clock"></i> Duration: <strong>${project.duration}</strong></span>
      <span><i class="fa-solid fa-tag"></i> Package: <code>${project.packageId}</code></span>
      <span><i class="fa-solid fa-wallet"></i> Scope: <strong>${project.costRange}</strong></span>
    </p>

    ${project.playStoreUrl ? `
      <div class="modal-store-row">
        <a href="${project.playStoreUrl}" target="_blank" class="btn-pill-dark">
          <i class="fa-brands fa-google-play"></i> Open App on Google Play Store
        </a>
        ${project.driverPlayStoreUrl ? `
          <a href="${project.driverPlayStoreUrl}" target="_blank" class="btn-pill-dark">
            <i class="fa-brands fa-google-play"></i> Open Driver App on Play Store
          </a>
        ` : ''}
      </div>
    ` : ''}

    <div class="modal-content-block">
      <h3><i class="fa-solid fa-layer-group" style="color: var(--accent-tan);"></i> Key Capabilities &amp; Architecture</h3>
      <ul class="modal-feature-list">
        ${project.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-content-block">
      <h3><i class="fa-solid fa-triangle-exclamation" style="color: #eab308;"></i> Engineering Challenges</h3>
      <ul class="modal-feature-list">
        ${project.challenges.map(c => `<li>${c}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-content-block">
      <h3><i class="fa-solid fa-circle-check" style="color: #22c55e;"></i> Technical Solutions &amp; Execution</h3>
      <ul class="modal-feature-list">
        ${project.solutions.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-metrics-block">
      <h3>Verified Production Metrics</h3>
      <div class="modal-metrics-grid">
        ${Object.entries(project.metrics).map(([k, v]) => `
          <div class="modal-metric-card">
            <div class="metric-val">${v}</div>
            <div class="metric-key">${k}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function setupModalEvents() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('close-modal');

  const closeModal = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });
}

// ===== FORMSPREE SUBMISSION WITH FIVERR REDIRECT =====
function setupFormHandler() {
  const form = document.getElementById('project-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch('https://formspree.io/f/mqaejebg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      submitBtn.textContent = 'Inquiry Sent! Opening Fiverr...';
      submitBtn.style.background = '#15803d';

      setTimeout(() => {
        const clientName = encodeURIComponent(data.name || '');
        const fiverrUrl = `https://www.fiverr.com/s/9d97ded?utm_source=portfolio&client=${clientName}`;
        window.open(fiverrUrl, '_blank');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 1200);

    } catch (err) {
      console.error('Form submission error:', err);
      window.open('https://www.fiverr.com/s/9d97ded', '_blank');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
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
  }, { threshold: 0.25 });

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
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;

    if (isDecimal) {
      el.textContent = current.toFixed(1) + suffix;
    } else {
      el.textContent = Math.floor(current) + suffix;
    }

    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = text;
  }

  el.textContent = '0' + suffix;
  requestAnimationFrame(step);
}

// ===== SCROLL REVEAL =====
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.section-heading, .project-card, .service-card, .skill-card, .contact-layout');
  revealElements.forEach(el => el.classList.add('reveal-element'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

// ===== BACK TO TOP =====
function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
