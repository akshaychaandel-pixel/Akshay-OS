const fs = require('fs');
const file = 'app.js';
let content = fs.readFileSync(file, 'utf8');

const replacement = `        #win-resume .maximize-btn { display: none !important; }
        @media (max-width: 768px) {
          #win-resume { 
            width: 95vw !important; 
            height: auto !important; 
            max-height: 90dvh !important; 
            max-width: 100vw !important; 
            border-radius: 8px !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          #win-resume iframe {
            height: auto !important;
            aspect-ratio: 1 / 1.15 !important;
          }
        }
      </style>
      <div style="flex: 1; width: 100%; background: white;">
        <iframe src="Resume%202.0.pdf#view=Fit&navpanes=0&toolbar=0&scrollbar=0" style="width: 100%; height: 100%; border: none; display: block; pointer-events: none;" scrolling="no"></iframe>
      </div>
      <div class="window-footer" style="padding: 15px; border-top: 1px solid var(--win-border); background: #f8f9ff; display: flex; justify-content: flex-end;">
        <a href="#" onclick="window.forceDownloadResume(event, 'Resume%202.0.pdf', 'Akshay_Chandel_Resume.pdf')" class="win-btn primary-btn" style="text-decoration: none; display: inline-block; font-size: 15px; padding: 10px 24px;">Download PDF</a>
      </div>
    \`;
  }
  
  window.forceDownloadResume = function(e, url, filename) {
    e.preventDefault();
    const btn = e.target;
    const originalText = btn.innerText;
    btn.innerText = 'Downloading...';
    btn.style.pointerEvents = 'none';
    
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const urlObj = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = urlObj;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(urlObj);
        document.body.removeChild(a);
        
        btn.innerText = 'Downloaded!';
        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.pointerEvents = 'auto';
        }, 2000);
      })
      .catch(err => {
        console.error('Download failed:', err);
        btn.innerText = 'Failed';
        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.pointerEvents = 'auto';
        }, 2000);
      });
  };

  window.openWindow = openWindow;
  window.generatePortfolioContent = generatePortfolioContent;
  window.generateResumeContent = generateResumeContent;
  window.generateCaseStudiesContent = generateCaseStudiesContent;
  window.generateCreativesContent = generateCreativesContent;
  window.generateLandingPagesContent = generateLandingPagesContent;
  window.generateCertificationsContent = generateCertificationsContent;

  window.openCaseStudiesFromAbout = function() {
    if (windows['about']) {
      windows['about'].element.querySelector('.close-btn').click();
    }
    setTimeout(() => {
      openWindow('work', 'Portfolio', generatePortfolioContent(), 'icon-folder');
    }, 50);
  };

  // Custom Cursor Logic
  const cursor = document.getElementById('custom-cursor');
  if (cursor && matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .desktop-icon, .title-bar-controls button, .win-btn, .start-menu-item, .title-bar')) {
        cursor.classList.add('hovering');
      }
    });`;

content = content.replace(/#win-resume \.maximize-btn \{ display: none !important; \}\r?\n\s*\}\);/, replacement);
fs.writeFileSync(file, content);
console.log('Fixed');
