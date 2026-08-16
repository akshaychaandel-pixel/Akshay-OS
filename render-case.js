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
  const nextCase = PORTFOLIO_DATA.caseStudies[nextIndex];

  // Build the HTML
  const html = `
    <nav class="back-nav">
      <a href="../../index.html">← Back to Desktop</a>
    </nav>
    
    <main class="container">
      <div class="metadata-grid">
        <div class="meta-item">
          <span class="meta-label">Client</span>
          <span class="meta-value">${data.client}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Industry</span>
          <span class="meta-value">${data.industry}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Platforms</span>
          <span class="meta-value">${data.platforms}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Spend</span>
          <span class="meta-value">${data.spend}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Period</span>
          <span class="meta-value">${data.period}</span>
        </div>
      </div>

      <h1 class="hero-headline">${data.heroHeadline}</h1>
      <p class="hero-summary">${data.heroSummary}</p>

      <div class="performance-snapshot">
        ${data.metrics.map(m => `
          <div class="metric">
            <span class="metric-value">${m.value}</span>
            <span class="metric-label">${m.label}</span>
          </div>
        `).join('')}
      </div>

      <section class="section">
        <h2 class="section-title">The Real Problem</h2>
        <div class="section-content">
          <p>${data.problem}</p>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">What I Did</h2>
        <ul class="actions-list">
          ${data.actions.map(a => `
            <li class="action-item">
              <div class="action-title">${a.title}</div>
              <div>${a.desc}</div>
            </li>
          `).join('')}
        </ul>
      </section>

      <section class="section">
        <h2 class="section-title">Results</h2>
        <div class="section-content">
          <p>${data.resultsText}</p>
        </div>
      </section>

      ${data.image ? `
      <section class="section">
        <h2 class="section-title">Evidence</h2>
        <div class="screenshot-frame">
          <div class="browser-chrome">
            <div class="chrome-dot"></div>
            <div class="chrome-dot"></div>
            <div class="chrome-dot"></div>
          </div>
          <img src="${data.image}" alt="${data.client} Performance Screenshot" loading="lazy">
        </div>
      </section>
      ` : ''}

      <div class="interpretation-box">
        <strong>What the numbers actually mean:</strong><br>
        ${data.interpretation}
      </div>

      <section class="section">
        <h2 class="section-title">Looking Back</h2>
        <div class="section-content">
          <p>${data.lookingBack}</p>
        </div>
      </section>

      <nav class="next-nav">
        <a href="../../index.html">← Back to Selected Work</a>
        <a href="../${nextCase.id}/index.html">Next Case Study: ${nextCase.client} →</a>
      </nav>
    </main>
  `;

  document.body.innerHTML = html;
  document.title = `${data.client} Paid Media Case Study | Akshay Chandel`;
});
