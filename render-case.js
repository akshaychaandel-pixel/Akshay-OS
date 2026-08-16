document.addEventListener('DOMContentLoaded', () => {
  // Extract ID from script tag data attribute or URL
  const scriptTag = document.getElementById('render-script');
  const caseId = scriptTag.getAttribute('data-id');
  
  // Find case study data
  const data = PORTFOLIO_DATA.caseStudies.find(c => c.id === caseId);
  if (!data) {
    document.body.innerHTML = "<h1>Case study not found.</h1>";
    return;
  }

  // Find next case study for navigation
  const currentIndex = PORTFOLIO_DATA.caseStudies.findIndex(c => c.id === caseId);
  const nextIndex = (currentIndex + 1) % PORTFOLIO_DATA.caseStudies.length;
  const previousIndex = (currentIndex - 1 + PORTFOLIO_DATA.caseStudies.length) % PORTFOLIO_DATA.caseStudies.length;
  const nextCase = PORTFOLIO_DATA.caseStudies[nextIndex];
  const previousCase = PORTFOLIO_DATA.caseStudies[previousIndex];

  // Build the HTML
  const html = `
    <div id="custom-cursor"></div>
    <nav class="back-nav">
      <a href="../../index.html?from=case">← Back to Selected Work</a>
    </nav>
    
    <main class="container">
      <div class="metadata-grid">
        ${data.client ? `<div class="meta-item"><span class="meta-label">Client</span><span class="meta-value">${data.client}</span></div>` : ''}
        ${data.industry ? `<div class="meta-item"><span class="meta-label">Industry</span><span class="meta-value">${data.industry}</span></div>` : ''}
        ${data.platforms ? `<div class="meta-item"><span class="meta-label">Platform</span><span class="meta-value">${data.platforms}</span></div>` : ''}
        ${data.location ? `<div class="meta-item"><span class="meta-label">Location</span><span class="meta-value">${data.location}</span></div>` : ''}
        ${data.period ? `<div class="meta-item"><span class="meta-label">Period</span><span class="meta-value">${data.period}</span></div>` : ''}
        ${data.spend ? `<div class="meta-item"><span class="meta-label">Budget</span><span class="meta-value">${data.spend}</span></div>` : ''}
      </div>

      <h1 class="hero-headline">${data.client}</h1>
      <p class="hero-subtitle">${data.subtitle || ''}</p>
      <p class="hero-intro">${data.intro || ''}</p>

      ${data.context ? `
      <section class="section">
        <h2 class="section-title">Context</h2>
        <div class="section-content">
          <p>${data.context}</p>
        </div>
      </section>
      ` : ''}

      ${data.whatIFound ? `
      <section class="section">
        <h2 class="section-title">What I found</h2>
        <div class="section-content">
          <p>${data.whatIFound}</p>
        </div>
      </section>
      ` : ''}

      ${data.whatIChanged ? `
      <section class="section">
        <h2 class="section-title">What I changed</h2>
        <div class="section-content">
          <ul class="actions-list">
            ${data.whatIChanged.map((a, i) => `
              <li class="action-item">
                <div class="action-title"><span class="action-number">0${i + 1}</span> ${a.title}</div>
                <p>${a.desc}</p>
              </li>
            `).join('')}
          </ul>
        </div>
      </section>
      ` : ''}

      ${data.whatHappened ? `
      <section class="section">
        <h2 class="section-title">What happened</h2>
        <div class="section-content">
          <p>${data.whatHappened}</p>
          ${data.whatHappenedSummary ? `<div class="metrics-summary">${data.whatHappenedSummary}</div>` : ''}
        </div>
      </section>
      ` : ''}

      ${(data.evidenceImage || data.evidenceImages) ? `
      <section class="section">
        <h2 class="section-title">Evidence</h2>
        <div class="evidence-wrapper">
          ${data.evidenceImages ? `
            <div class="evidence-grid">
              ${data.evidenceImages.map(img => `
                <div class="screenshot-frame">
                  <img src="${img}" alt="${data.client} Evidence" loading="lazy" class="zoomable-image">
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="screenshot-frame">
              <img src="${data.evidenceImage}" alt="${data.client} Evidence" loading="lazy" class="zoomable-image">
            </div>
          `}
          ${data.evidenceCaption ? `<div class="screenshot-caption">${data.evidenceCaption}</div>` : ''}
        </div>
      </section>
      ` : ''}

      ${data.lookingBack ? `
      <section class="section">
        <h2 class="section-title">What I'd do differently</h2>
        <div class="section-content">
          <p>${data.lookingBack}</p>
        </div>
      </section>
      ` : ''}

      <nav class="next-nav">
        <a href="../${previousCase.id}/index.html">← Previous project<br><span style="font-size: 12px; color: var(--cs-text-light); font-weight: normal; margin-top: 5px; display: block;">${previousCase.client}</span></a>
        <a href="../${nextCase.id}/index.html" style="text-align: right;">Next project →<br><span style="font-size: 12px; color: var(--cs-text-light); font-weight: normal; margin-top: 5px; display: block;">${nextCase.client}</span></a>
      </nav>
    </main>

    <!-- Lightbox Overlay -->
    <div id="lightbox" class="lightbox">
      <span class="lightbox-close">&times;</span>
      <img class="lightbox-content" id="lightbox-img">
    </div>
  `;

  document.body.innerHTML = html;
  document.title = `${data.client} Paid Media Case Study | Akshay Chandel`;

  // Lightbox Logic
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const zoomableImages = document.querySelectorAll(".zoomable-image");

  zoomableImages.forEach(img => {
    img.addEventListener('click', function() {
      lightbox.style.display = "flex";
      // Small timeout to allow display:flex to apply before opacity transition
      setTimeout(() => lightbox.classList.add('show'), 10);
      lightboxImg.src = this.src;
      document.body.style.overflow = 'hidden'; // prevent scrolling behind
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('show');
    setTimeout(() => {
      lightbox.style.display = "none";
      document.body.style.overflow = 'auto';
    }, 300);
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });

  // Custom Cursor Logic
  const cursor = document.getElementById('custom-cursor');
  if (cursor && matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .zoomable-image, .case-nav-btn, .lightbox-close')) {
        cursor.classList.add('hovering');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .zoomable-image, .case-nav-btn, .lightbox-close')) {
        cursor.classList.remove('hovering');
      }
    });
  }
});
