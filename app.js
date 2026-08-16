document.addEventListener('DOMContentLoaded', () => {
  const desktop = document.getElementById('desktop');
  const taskbarWindows = document.getElementById('taskbar-windows');
  const startMenu = document.getElementById('start-menu');
  const startMenuList = document.getElementById('start-menu-list');
  const startButton = document.getElementById('start-button');
  const windowTemplate = document.getElementById('window-template');
  
  let zIndexCounter = 100;
  const windows = {};

  const apps = [
    { id: 'work', title: 'Selected Work', iconClass: 'icon-folder', content: generateWorkContent() },
    { id: 'about', title: 'About Me', iconClass: 'icon-about', content: generateAboutContent() },
    { id: 'whatido', title: 'What I Do', iconClass: 'icon-file', content: '<h3>What I Do</h3><p>Focus on demand generation, customer acquisition, and improving efficiency.</p>' },
    { id: 'experiments', title: 'Experiments', iconClass: 'icon-experiments', content: generateExperimentsContent() },
    { id: 'results', title: 'Results', iconClass: 'icon-results', content: generateResultsContent() },
    { id: 'resume', title: 'Resume.pdf', iconClass: 'icon-file', content: generateResumeContent() },
    { id: 'contact', title: 'Contact', iconClass: 'icon-contact', content: generateContactContent() }
  ];

  // Initialize Desktop & Mobile Icons
  let selectedIcon = null;
  const mobileAppGrid = document.getElementById('mobile-app-grid');

  apps.forEach(app => {
    // --- Desktop Icon ---
    const iconDiv = document.createElement('div');
    iconDiv.className = 'desktop-icon';
    iconDiv.innerHTML = `
      <div class="icon-img ${app.iconClass}"></div>
      <div class="icon-text-container">${app.title}</div>
    `;
    
    iconDiv.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      if(selectedIcon) selectedIcon.classList.remove('selected');
      iconDiv.classList.add('selected');
      selectedIcon = iconDiv;
    });
    
    iconDiv.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      if (window.innerWidth > 768) {
        openWindow(app.id, app.title, app.content, app.iconClass);
        iconDiv.classList.remove('selected');
        selectedIcon = null;
      }
    });
    
    desktop.appendChild(iconDiv);

    // --- Mobile Grid Icon ---
    if (mobileAppGrid) {
      const mobIcon = document.createElement('div');
      mobIcon.className = 'desktop-icon'; // Reuse style for grid layout
      mobIcon.innerHTML = `
        <div class="icon-img ${app.iconClass}" style="margin: 0 auto;"></div>
        <div class="icon-text-container" style="text-align:center;">${app.title}</div>
      `;
      mobIcon.addEventListener('click', (e) => {
        openWindow(app.id, app.title, app.content, app.iconClass);
      });
      mobileAppGrid.appendChild(mobIcon);
    }

    // Start Menu Item
    const menuItem = document.createElement('div');
    menuItem.className = 'start-menu-item';
    menuItem.innerHTML = `<div class="menu-icon ${app.iconClass}"></div><span>${app.title}</span>`;
    menuItem.addEventListener('click', () => {
      openWindow(app.id, app.title, app.content, app.iconClass);
      closeStartMenu();
    });
    startMenuList.appendChild(menuItem);
  });

  // Desktop click deselects icons
  desktop.addEventListener('mousedown', () => {
    if(selectedIcon) {
      selectedIcon.classList.remove('selected');
      selectedIcon = null;
    }
  });

  // Mobile Dock Bindings
  const dockWork = document.getElementById('dock-work');
  if (dockWork) dockWork.addEventListener('click', () => {
    openWindow('work', 'Selected Work', generateWorkContent(), 'icon-folder');
  });

  const dockResume = document.getElementById('dock-resume');
  if (dockResume) dockResume.addEventListener('click', () => {
    openWindow('resume', 'Resume.pdf', generateResumeContent(), 'icon-file');
  });

  const dockContact = document.getElementById('dock-contact');
  if (dockContact) dockContact.addEventListener('click', () => {
    openWindow('contact', 'Contact', generateContactContent(), 'icon-contact');
  });

  // Start Menu Toggle
  startButton.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    if (startMenu.classList.contains('show')) {
      closeStartMenu();
    } else {
      startMenu.classList.add('show');
      startButton.classList.add('active');
    }
  });

  document.addEventListener('mousedown', (e) => {
    if (!startMenu.contains(e.target) && e.target !== startButton && !startButton.contains(e.target)) {
      closeStartMenu();
    }
  });

  function closeStartMenu() {
    startMenu.classList.remove('show');
    startButton.classList.remove('active');
  }

  // Clock
  setInterval(() => {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }, 1000);

  // Welcome Window Logic (Desktop Only Hero)
  if (window.innerWidth > 768) {
    setTimeout(() => {
      
      const welcomeContent = document.getElementById('welcome-template').innerHTML;
      openWindow('welcome', 'Akshay_OS / Welcome', welcomeContent, 'icon-about', { center: true, customClass: 'hero-window' });
      
      setTimeout(() => {
        const winEl = document.getElementById('win-welcome');
        if (winEl) {
          const btnWork = winEl.querySelector('#btn-welcome-work');
          const btnAbout = winEl.querySelector('#btn-welcome-about');
          
          if(btnWork) btnWork.addEventListener('click', () => {
            // Close the welcome window
            winEl.querySelector('.close-btn').click();
            // Open the work window after a short delay for a satisfying transition
            setTimeout(() => {
              openWindow('work', 'Selected Work', generateWorkContent(), 'icon-folder');
            }, 200);
          });
          
          if(btnAbout) btnAbout.addEventListener('click', () => {
             winEl.querySelector('.close-btn').click();
             setTimeout(() => {
                openWindow('about', 'About Me', generateAboutContent(), 'icon-about');
             }, 200);
          });
        }
      }, 100);
    }, 500);
  }

  // Window Management
  function openWindow(id, title, contentHtml, iconClass, options = {}) {
    if (windows[id]) {
      focusWindow(id);
      return;
    }

    const clone = windowTemplate.content.cloneNode(true);
    const winElement = clone.querySelector('.window');
    winElement.id = `win-${id}`;
    
    // Add icon to title bar
    const titleText = winElement.querySelector('.title-bar-text');
    titleText.innerHTML = `<span class="taskbar-icon ${iconClass}" style="margin-right:4px; vertical-align:middle;"></span>${title}`;
    
    winElement.querySelector('.window-body').innerHTML = contentHtml;
    
    if (options.customClass) winElement.classList.add(options.customClass);
    if (options.width) winElement.style.width = options.width;
    if (options.height) winElement.style.height = options.height;

    document.body.appendChild(winElement);
    
    // Make visible temporarily to calculate dimensions
    winElement.classList.add('active');
    
    if (options.center) {
      const x = (window.innerWidth - winElement.offsetWidth) / 2;
      const y = (window.innerHeight - winElement.offsetHeight) / 2 - 20; 
      winElement.style.left = `${Math.max(0, x)}px`;
      winElement.style.top = `${Math.max(0, y)}px`;
    } else {
      const offset = (Object.keys(windows).length % 10) * 25;
      winElement.style.left = `${100 + offset}px`;
      winElement.style.top = `${50 + offset}px`;
    }
    
    // Override if mobile
    if (window.innerWidth <= 768) {
      winElement.style.left = '0';
      winElement.style.top = '0';
    }
    
    const winObj = { element: winElement, minimized: false, iconClass: iconClass };
    windows[id] = winObj;
    
    setupWindowBehaviors(winElement, id);
    createTaskbarItem(id, title, iconClass);
    
    requestAnimationFrame(() => {
      winElement.classList.add('active');
      focusWindow(id);
    });
  }

  function setupWindowBehaviors(winElement, id) {
    const titleBar = winElement.querySelector('.title-bar');
    const closeBtn = winElement.querySelector('.close-btn');
    const minBtn = winElement.querySelector('.minimize-btn');
    const maxBtn = winElement.querySelector('.maximize-btn');

    winElement.addEventListener('mousedown', () => focusWindow(id));

    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      winElement.remove();
      const taskbarItem = document.getElementById(`taskbar-item-${id}`);
      if(taskbarItem) taskbarItem.remove();
      delete windows[id];
      // Focus another window if any
      const remainingIds = Object.keys(windows);
      if(remainingIds.length > 0) focusWindow(remainingIds[remainingIds.length-1]);
    });

    minBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      winElement.classList.remove('active');
      windows[id].minimized = true;
      updateTaskbarItemState(id, false);
    });
    
    let isMaximized = false;
    let preMaxRect = {};
    
    maxBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      focusWindow(id);
      if (!isMaximized) {
        preMaxRect = { left: winElement.style.left, top: winElement.style.top, width: winElement.style.width, height: winElement.style.height };
        winElement.style.left = '0';
        winElement.style.top = '0';
        winElement.style.width = '100%';
        winElement.style.height = '100%';
        isMaximized = true;
      } else {
        winElement.style.left = preMaxRect.left;
        winElement.style.top = preMaxRect.top;
        winElement.style.width = preMaxRect.width || 'auto';
        winElement.style.height = preMaxRect.height || 'auto';
        isMaximized = false;
      }
    });

    // Dragging logic
    let isDragging = false;
    let offsetX, offsetY;

    titleBar.addEventListener('mousedown', (e) => {
      if(e.target.tagName === 'BUTTON') return;
      isDragging = true;
      offsetX = e.clientX - winElement.getBoundingClientRect().left;
      offsetY = e.clientY - winElement.getBoundingClientRect().top;
      
      // If dragged while maximized, un-maximize
      if (isMaximized) {
        isMaximized = false;
        winElement.style.width = preMaxRect.width || 'auto';
        winElement.style.height = preMaxRect.height || 'auto';
        // Adjust offset so mouse is centered on title bar
        offsetX = winElement.offsetWidth / 2;
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;
      
      // Basic bounds clamping to prevent getting lost completely off screen
      newY = Math.max(0, newY); 
      
      winElement.style.left = `${newX}px`;
      winElement.style.top = `${newY}px`;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }

  function focusWindow(id) {
    const winObj = windows[id];
    if (!winObj) return;
    
    if (winObj.minimized) {
      winObj.element.classList.add('active');
      winObj.minimized = false;
    }
    
    zIndexCounter++;
    winObj.element.style.zIndex = zIndexCounter;
    
    // Update active visual state for all windows
    Object.keys(windows).forEach(winId => {
       const isFocused = (winId === id);
       if (isFocused) {
         windows[winId].element.classList.remove('inactive');
       } else {
         windows[winId].element.classList.add('inactive');
       }
       updateTaskbarItemState(winId, isFocused);
    });
  }

  function createTaskbarItem(id, title, iconClass) {
    const item = document.createElement('div');
    item.className = 'taskbar-item active';
    item.id = `taskbar-item-${id}`;
    item.innerHTML = `<span class="taskbar-icon ${iconClass}"></span> <span>${title}</span>`;
    item.title = title;
    
    item.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      const isActiveAndTop = (windows[id].element.style.zIndex == zIndexCounter && !windows[id].element.classList.contains('inactive') && !windows[id].minimized);
      
      if (isActiveAndTop) {
        // Minimize
        windows[id].element.classList.remove('active');
        windows[id].minimized = true;
        updateTaskbarItemState(id, false);
      } else {
        focusWindow(id);
      }
    });
    taskbarWindows.appendChild(item);
  }

  function updateTaskbarItemState(id, isActive) {
    const item = document.getElementById(`taskbar-item-${id}`);
    if (item) {
      if (isActive && !windows[id].minimized) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  }

  // --- Content Generators ---
  function generateAboutContent() {
    const data = PORTFOLIO_DATA.personal;
    return `
      <div style="display: flex; gap: 15px; align-items: flex-start; margin-bottom: 15px;">
        <div style="width: 80px; height: 80px; background-image: url('../profile-pic%20(2).png'); background-size: cover; border: 2px inset var(--border-dark);"></div>
        <div>
          <h2 style="margin-bottom: 5px; font-size: 16px;">${data.name}</h2>
          <p style="font-weight: bold; margin-bottom: 5px;">${data.title}</p>
          <p style="color: #666; font-size: 10px;">Location: ${data.location}</p>
        </div>
      </div>
      <p style="line-height: 1.5; margin-bottom: 15px;">${data.bio}</p>
      <div style="border-top: 1px solid #ccc; padding-top: 10px;">
        <h3 style="margin-bottom: 8px;">Technical Proficiencies</h3>
        <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px; font-size: 11px;">
          ${data.skills.slice(0,10).map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  function generateWorkContent() {
    const cases = PORTFOLIO_DATA.caseStudies;
    // Note: The click handler redirects to the modern UI, showing a loading message first
    window.openCaseStudyRoute = function(id, title) {
      // Modern smooth transition overlay
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(17, 27, 33, 0.85);backdrop-filter:blur(8px);z-index:9999;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.3s;';
      overlay.innerHTML = `
        <div style="color:white; font-family:'Inter', sans-serif; font-size:16px; font-weight:500; display:flex; flex-direction:column; align-items:center; gap:15px;">
          <div style="width:30px;height:30px;border:3px solid rgba(255,255,255,0.2);border-top-color:#008080;border-radius:50%;animation:spin 1s linear infinite;"></div>
          Opening case file: ${title}...
        </div>
        <style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>
      `;
      document.body.appendChild(overlay);
      
      // trigger animation
      requestAnimationFrame(() => overlay.style.opacity = '1');
      
      setTimeout(() => {
        window.location.href = `work/${id}/index.html`;
      }, 700); 
    };

    return `
      <div class="file-explorer">
        ${cases.map(c => `
          <div class="file-item" 
               onclick="if(window.innerWidth <= 768) window.openCaseStudyRoute('${c.id}', '${c.client}')"
               ondblclick="if(window.innerWidth > 768) window.openCaseStudyRoute('${c.id}', '${c.client}')">
            <div class="icon-folder"></div>
            <span>${c.folder}</span>
          </div>
        `).join('')}
      </div>
      <div style="border-top: 1px solid var(--border-dark); margin-top: 15px; padding-top: 5px; font-size: 10px; color: #555;">
        Status: Loaded | Type: Directory
      </div>
    `;
  }

  function generateExperimentsContent() {
    return `
      <div class="file-explorer">
        ${PORTFOLIO_DATA.experiments.map(e => `
          <div class="file-item">
            <div class="icon-file"></div>
            <span>${e.filename}</span>
          </div>
        `).join('')}
      </div>
      <p style="margin-top: 10px; color: #666; font-size: 10px;">System Status: Optimizing...</p>
    `;
  }

  function generateResultsContent() {
    return `
      <h3 style="margin-bottom: 15px;">Performance Highlights</h3>
      <div class="metric-grid">
      ${PORTFOLIO_DATA.results.map(r => `
        <div class="metric-card">
          <div style="font-size: 18px; margin-bottom: 5px;">${r.icon}</div>
          <div class="value">${r.value}</div>
          <div style="font-size:10px; color:#555;">${r.label}</div>
        </div>
      `).join('')}
    </div>`;
  }

  function generateResumeContent() {
    return `
      <div style="padding: 10px; max-width: 500px;">
        <h2 style="border-bottom: 2px solid #000; padding-bottom: 5px; margin-bottom: 10px;">Experience</h2>
        ${PORTFOLIO_DATA.resume.experience.map(e => `
          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <strong>${e.title}</strong>
              <span style="font-size: 10px; color: #666;">${e.period}</span>
            </div>
            <div style="margin-bottom: 5px;"><em>${e.company}</em></div>
            <ul style="padding-left: 20px; line-height: 1.4;">${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
          </div>
        `).join('')}
        
        <div style="margin-top: 20px;">
          <button class="win-btn">Download PDF</button>
        </div>
      </div>
    `;
  }

  function generateContactContent() {
    return `
      <div style="padding: 10px;">
        <h3 style="margin-bottom: 10px;">Let's talk paid media.</h3>
        <form style="display:flex;flex-direction:column;gap:5px;">
          <label style="font-weight: bold;">Name:</label>
          <input type="text" style="width:100%; max-width: 300px;">
          
          <label style="font-weight: bold;">Email:</label>
          <input type="email" style="width:100%; max-width: 300px;">
          
          <label style="font-weight: bold;">Message:</label>
          <textarea style="width:100%; max-width: 300px; height:80px;"></textarea>
          
          <div style="margin-top: 10px;">
            <button type="button" class="win-btn" onclick="this.innerHTML='Sending...'; setTimeout(() => alert('Conversion recorded ✓'), 800)">Send Message</button>
          </div>
        </form>
      </div>
    `;
  }
});
