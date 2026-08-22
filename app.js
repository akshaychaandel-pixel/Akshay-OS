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
    { id: 'work', title: 'Portfolio', iconClass: 'icon-folder', content: generatePortfolioContent() },
    { id: 'certifications', title: 'Certifications', iconClass: 'icon-folder', content: generateCertificationsContent() },
    { id: 'about', title: 'About Me', iconClass: 'icon-folder', content: generateAboutContent() },
    { id: 'resume', title: 'Resume 2.0.pdf', iconClass: 'icon-folder', content: generateResumeContent() },
    { id: 'linkedin', title: 'LinkedIn', iconClass: 'icon-linkedin', isLink: true, url: PORTFOLIO_DATA.linkedinUrl, externalTarget: '_blank' },
    { id: 'mail', title: 'Mail', iconClass: 'icon-mail', isLink: true, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=akshaychaandel@gmail.com&su=Connecting%20regarding%20a%20Paid%20Media%20Opportunity&body=Hi%20Akshay%2C%0A%0AI%20recently%20reviewed%20your%20Paid%20Media%20portfolio%20and%20was%20impressed%20by%20your%20case%20studies%20and%20results.%20%0A%0AWe%20are%20currently%20looking%20for%20a%20%5BRole%2C%20e.g.%2C%20Performance%20Marketer%20%2F%20Paid%20Media%20Manager%5D%20and%20would%20love%20to%20discuss%20how%20your%20expertise%20might%20align%20with%20our%20team%27s%20goals.%0A%0APlease%20let%20me%20know%20your%20availability%20for%20a%20quick%20chat.%0A%0ABest%20regards%2C%0A%5BYour%20Name%20%2F%20Company%5D', externalTarget: '_blank', hideFromMobile: true },
    { id: 'recycle', title: 'Recycle Bin', iconClass: 'icon-recycle', content: '<div style="text-align:center; padding: 40px; font-family:var(--font-primary);"><h2 style="font-size:24px; font-weight:600; margin-bottom:10px;">0 items</h2><p style="color:#888;">Bad leads removed successfully.</p></div>', hideFromStartMenu: true }
  ];

  // Initialize Desktop & Mobile Icons
  let selectedIcon = null;
  const mobileAppGrid = document.getElementById('mobile-app-grid');

  apps.forEach(app => {
    // --- Desktop Icon ---
    const iconDiv = document.createElement(app.isLink ? 'a' : 'div');
    iconDiv.className = 'desktop-icon';
    if (app.isLink) {
      iconDiv.href = app.url;
      iconDiv.target = app.externalTarget || '_blank';
      if (iconDiv.target === '_blank') iconDiv.rel = 'noopener noreferrer';
      iconDiv.style.textDecoration = 'none';
      iconDiv.style.color = 'inherit';
    }
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
    
    if (!app.isLink) {
      iconDiv.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (window.innerWidth > 768) {
          openWindow(app.id, app.title, app.content, app.iconClass);
          iconDiv.classList.remove('selected');
          selectedIcon = null;
        }
      });
    }
    
    desktop.appendChild(iconDiv);

    // --- Mobile Grid Icon ---
    if (mobileAppGrid && !app.hideFromStartMenu && !app.hideFromMobile) {
      const mobIcon = document.createElement(app.isLink ? 'a' : 'div');
      mobIcon.className = 'desktop-icon'; 
      if (app.isLink) {
        mobIcon.href = app.url;
        mobIcon.target = app.externalTarget || '_blank';
        if (mobIcon.target === '_blank') mobIcon.rel = 'noopener noreferrer';
        mobIcon.style.textDecoration = 'none';
        mobIcon.style.color = 'inherit';
      }
      mobIcon.innerHTML = `
        <div class="icon-img ${app.iconClass}" style="margin: 0 auto;"></div>
        <div class="icon-text-container" style="text-align:center;">${app.title}</div>
      `;
      if (!app.isLink) {
        mobIcon.addEventListener('click', (e) => {
          openWindow(app.id, app.title, app.content, app.iconClass);
        });
      }
      mobileAppGrid.appendChild(mobIcon);
    }

    // Start Menu Item
    if (!app.hideFromStartMenu) {
      const menuItem = document.createElement(app.isLink ? 'a' : 'div');
      menuItem.className = 'start-menu-item';
      if (app.isLink) {
        menuItem.href = app.url;
        menuItem.target = app.externalTarget || '_blank';
        if (menuItem.target === '_blank') menuItem.rel = 'noopener noreferrer';
        menuItem.style.textDecoration = 'none';
        menuItem.style.color = 'inherit';
        menuItem.style.display = 'flex';
      }
      menuItem.innerHTML = `<div class="menu-icon ${app.iconClass}"></div><span>${app.title}</span>`;
      
      menuItem.addEventListener('click', () => {
        if (!app.isLink) {
          openWindow(app.id, app.title, app.content, app.iconClass);
        }
        closeStartMenu();
      });
      startMenuList.appendChild(menuItem);
    }
  });

  // Desktop click deselects icons
  desktop.addEventListener('mousedown', () => {
    if(selectedIcon) {
      selectedIcon.classList.remove('selected');
      selectedIcon = null;
    }
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
  const urlParams = new URLSearchParams(window.location.search);
  const fromCase = urlParams.get('from') === 'case';
  
  if (fromCase) {
    // Clear the parameter from the URL so a manual refresh will show the popup again
    window.history.replaceState({}, document.title, window.location.pathname);
    
    // Automatically open the work folder since they just came from there
    setTimeout(() => {
      openWindow('work', 'Portfolio', generatePortfolioContent(), 'icon-folder');
    }, 100);
  } else if (window.innerWidth > 768) {
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
              openWindow('work', 'Portfolio', generatePortfolioContent(), 'icon-folder');
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
      const offset = (Object.keys(windows).length % 10) * 40;
      winElement.style.left = `${120 + offset}px`;
      winElement.style.top = `${80 + offset}px`;
    }
    
    // Override if mobile
    if (window.innerWidth <= 768) {
      if (id === 'about' || id === 'resume') {
        // Do not inject !important rules for these apps; let their specific CSS handle their full-screen/centered layouts.
      } else {
        // Use setProperty with !important to bust mobile CSS caching for standard modal windows
        winElement.style.setProperty('width', '90vw', 'important');
        winElement.style.setProperty('height', 'max-content', 'important');
        winElement.style.setProperty('min-height', '0px', 'important');
        winElement.style.setProperty('max-height', '85vh', 'important');
        
        const winBody = winElement.querySelector('.window-body');
        if (winBody) {
          winBody.style.setProperty('flex', '1', 'important');
          winBody.style.setProperty('height', 'auto', 'important');
          winBody.style.setProperty('min-height', '0px', 'important');
        }
        
        // Use absolute margins instead of CSS transform to prevent WebKit rendering bugs with backdrop-filter
        winElement.style.setProperty('left', '5vw', 'important');
        winElement.style.setProperty('top', '15vh', 'important');
        winElement.style.setProperty('transform', 'none', 'important');
        winElement.style.setProperty('border-radius', '16px', 'important');
      }
    }
    
    const winObj = { element: winElement, minimized: false, iconClass: iconClass };
    windows[id] = winObj;
    
    setupWindowBehaviors(winElement, id);
    createTaskbarItem(id, title, iconClass);
    
    requestAnimationFrame(() => {
      winElement.classList.add('active');
      focusWindow(id);
      
      if (window.innerWidth <= 768) {
        history.pushState({ windowId: id }, "");
      }
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
      
      if (window.innerWidth <= 768 && history.state && history.state.windowId === id) {
        window._ignoreNextPopState = true;
        history.back();
      }
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
    return `
      <style>
        #win-about { width: 85vw !important; max-width: 1200px !important; height: 85vh !important; }
        #win-about .window-body { padding: 0 !important; display: flex !important; flex-direction: column !important; overflow: hidden !important; background: #f8f9ff !important; }
        #win-about .maximize-btn { display: none !important; }
        @media (max-width: 768px) {
          #win-about { width: 100% !important; height: 100% !important; max-height: 100% !important; border-radius: 0 !important; top: 0 !important; left: 0 !important; transform: none !important; }
          #win-about .window-body { height: 100% !important; flex: 1 !important; padding: 0 !important; }
        }
      </style>
      <iframe src="public/about.html" style="flex: 1; width: 100%; height: 100%; border: none; display: block;"></iframe>
    `;
  }

  function generatePortfolioContent() {
    return `
      <div class="file-explorer">
        <div class="file-item" 
             onclick="if(window.innerWidth <= 768) openWindow('cases', 'Case Studies', generateCaseStudiesContent(), 'icon-folder', { width: '550px', height: '450px' })"
             ondblclick="if(window.innerWidth > 768) openWindow('cases', 'Case Studies', generateCaseStudiesContent(), 'icon-folder', { width: '550px', height: '450px' })">
          <div class="icon-folder"></div>
          <span>Case Studies</span>
        </div>
        <div class="file-item" 
             onclick="if(window.innerWidth <= 768) openWindow('creatives', 'Ad Creatives', generateCreativesContent(), 'icon-creatives', { width: '680px', height: '550px' })"
             ondblclick="if(window.innerWidth > 768) openWindow('creatives', 'Ad Creatives', generateCreativesContent(), 'icon-creatives', { width: '680px', height: '550px' })">
          <div class="icon-folder"></div>
          <span>Ad Creatives</span>
        </div>
        <div class="file-item" 
             onclick="if(window.innerWidth <= 768) openWindow('landingpages', 'Landing Pages', generateLandingPagesContent(), 'icon-landing', { width: '700px', height: '550px' })"
             ondblclick="if(window.innerWidth > 768) openWindow('landingpages', 'Landing Pages', generateLandingPagesContent(), 'icon-landing', { width: '700px', height: '550px' })">
          <div class="icon-folder"></div>
          <span>Landing Pages</span>
        </div>
      </div>
    `;
  }

  function generateCaseStudiesContent() {
    const cases = PORTFOLIO_DATA.caseStudies;
    window.openCaseStudyRoute = function(id, title) {
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
      
      requestAnimationFrame(() => overlay.style.opacity = '1');
      
      setTimeout(() => {
        window.location.href = `work/${id}/index.html`;
      }, 400); 
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
    `;
  }

  window.openLightbox = function(imgSrc, title, platform) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(17, 27, 33, 0.85);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;transition:opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);padding:20px;';
    
    overlay.innerHTML = `
      <div style="position:absolute;top:25px;right:35px;color:white;font-size:40px;cursor:pointer;font-family:sans-serif;line-height:1;transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" onclick="this.parentElement.style.opacity='0';setTimeout(()=>this.parentElement.remove(),400)">&times;</div>
      <img src="${imgSrc}" style="max-width:95%;max-height:85vh;object-fit:contain;border-radius:12px;box-shadow:0 20px 50px rgba(0,0,0,0.5);transform:scale(0.95);transition:transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);">
      <div style="color:white;margin-top:25px;text-align:center;font-family:var(--font-primary, 'Inter', sans-serif);transform:translateY(15px);opacity:0;transition:all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;">
        <strong style="font-size:22px;display:block;margin-bottom:8px;font-weight:600;letter-spacing:-0.5px;">${title}</strong>
        <span style="font-size:15px;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:1px;font-weight:500;">${platform}</span>
      </div>
    `;
    
    overlay.onclick = function(e) {
      if(e.target === overlay) {
        overlay.style.opacity = '0';
        overlay.querySelector('img').style.transform = 'scale(0.95)';
        setTimeout(() => overlay.remove(), 400);
      }
    };
    
    document.body.appendChild(overlay);
    
    // Trigger animations
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      overlay.querySelector('img').style.transform = 'scale(1)';
      const textDiv = overlay.querySelector('div:last-child');
      textDiv.style.transform = 'translateY(0)';
      textDiv.style.opacity = '1';
    });
  };

  function generateCreativesContent() {
    return `
      <div style="padding: 15px; display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px;">
        ${PORTFOLIO_DATA.adCreatives.map(c => `
          <div class="gallery-thumb" style="cursor: pointer; aspect-ratio: 1; background-color: #eee; background-image: url('${c.thumb}'); background-size: cover; background-position: center; border: 1px solid rgba(0,0,0,0.1); border-radius: var(--radius-sm); overflow: hidden; position: relative; transition: transform 0.2s, box-shadow 0.2s;" 
               onclick="openLightbox('${c.thumb}', '${c.client}', '${c.platform}')"
               onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.2)';"
               onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none';">
            <div style="position:absolute;bottom:0;left:0;width:100%;background:linear-gradient(transparent, rgba(0,0,0,0.8));color:white;padding:15px 8px 8px;font-size:11px;opacity:0;transition:opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'">
              ${c.client}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function generateCertificationsContent() {
    return `
      <div style="padding: 15px; display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 15px;">
        ${PORTFOLIO_DATA.certifications.map(cert => `
          <div class="gallery-thumb" style="cursor: pointer; aspect-ratio: 4/3; background-color: #eee; background-image: url('${cert.thumb}'); background-size: cover; background-position: center; border: 1px solid rgba(0,0,0,0.1); border-radius: var(--radius-sm); overflow: hidden; position: relative; transition: transform 0.2s, box-shadow 0.2s;" 
               onclick="window.open('${cert.link}', '_blank')"
               onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.2)';"
               onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none';">
            <div style="position:absolute;bottom:0;left:0;width:100%;background:linear-gradient(transparent, rgba(0,0,0,0.8));color:white;padding:20px 10px 10px;font-size:12px;opacity:0;transition:opacity 0.2s;text-align:center;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'">
              ${cert.title}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function generateLandingPagesContent() {
    return `
      <div style="padding: 15px; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
        <div style="grid-column: 1 / -1; margin-bottom: 5px;">
          <p style="font-style: italic; color: #555;">I design high-converting landing pages using AI tools. Click any hero section to view the live page.</p>
        </div>
        ${PORTFOLIO_DATA.landingPages.map(lp => `
          <div style="display: flex; flex-direction: column; background: white; border: 1px solid rgba(0,0,0,0.08); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(0,0,0,0.12)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='var(--shadow-sm)';">
            <div style="height: 180px; background-image: url('${lp.image}'); background-size: cover; background-position: top center; cursor: pointer; position: relative;" onclick="window.open('${lp.url}', '_blank')">
              <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.0); transition: background 0.2s;" onmouseover="this.style.background='rgba(0,0,0,0.15)'" onmouseout="this.style.background='rgba(0,0,0,0)'"></div>
              <div style="position: absolute; top: 10px; left: 10px; background: var(--os-accent); color: white; padding: 3px 8px; border-radius: 3px; font-size: 10px; font-weight: 600; pointer-events: none;">${lp.industry || ''}</div>
              <div style="position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.75); color: white; padding: 5px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; pointer-events: none; backdrop-filter: blur(4px); display: flex; align-items: center; gap: 4px;">↗ View Live Page</div>
            </div>
            <div style="padding: 15px; flex: 1; display: flex; flex-direction: column;">
              <h3 style="margin-bottom: 6px; font-size: 14px; color: #111; line-height: 1.3;">${lp.title}</h3>
              <p style="font-size: 11px; color: #666; margin-bottom: 10px; line-height: 1.5; flex: 1;">${lp.description}</p>
              <div style="font-size: 10px; color: var(--os-accent); font-weight: 500; border-top: 1px solid rgba(0,0,0,0.06); padding-top: 8px;">${lp.role || ''}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function generateResumeContent() {
    return `
      <style>
        #win-resume { 
          width: 63vh !important; 
          max-width: 95vw !important; 
          height: 85vh !important; 
          max-height: 85vh !important; 
        }
        #win-resume .window-body { padding: 0 !important; display: flex !important; flex-direction: column !important; overflow: hidden !important; }
        #win-resume .maximize-btn { display: none !important; }
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
    `;
  }
  
  window.forceDownloadResume = function(e, url, filename) {
    e.preventDefault();
    const btn = e.target;
    const originalText = btn.innerText;
    btn.innerText = 'Downloading...';
    btn.style.pointerEvents = 'none';
    
    // Helper to fallback to standard download if fetch fails (like on local file://)
    const fallbackDownload = () => {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename;
        // Some browsers require target blank for pdfs if download attribute fails
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        btn.innerText = 'Downloaded!';
        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.pointerEvents = 'auto';
        }, 2000);
    };

    if (window.location.protocol === 'file:') {
       fallbackDownload();
       return;
    }
    
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
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
        console.error('Download fetch failed, using fallback:', err);
        fallbackDownload();
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
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .desktop-icon, .title-bar-controls button, .win-btn, .start-menu-item, .title-bar')) {
        cursor.classList.remove('hovering');
      }
    });
  }

  window.addEventListener('popstate', (e) => {
    if (window._ignoreNextPopState) {
      window._ignoreNextPopState = false;
      return;
    }
    
    if (window.innerWidth <= 768) {
      const windowIds = Object.keys(windows);
      if (windowIds.length > 0) {
        let topWin = null;
        let maxZ = -1;
        windowIds.forEach(wid => {
          let z = parseInt(windows[wid].element.style.zIndex || 0);
          if (z > maxZ) { maxZ = z; topWin = wid; }
        });
        if (topWin && windows[topWin]) {
          windows[topWin].element.querySelector('.close-btn').click();
        }
      }
    }
  });

});
