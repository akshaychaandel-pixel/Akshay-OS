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
    { id: 'about', title: 'About Me', iconClass: 'icon-about', content: generateAboutContent() },
    { id: 'resume', title: 'Resume.pdf', iconClass: 'icon-file', content: generateResumeContent() },
    { id: 'linkedin', title: 'LinkedIn', iconClass: 'icon-linkedin', isLink: true, url: PORTFOLIO_DATA.linkedinUrl, externalTarget: '_blank' },
    { id: 'mail', title: 'Mail', iconClass: 'icon-mail', isLink: true, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=akshaychaandel@gmail.com&su=Connecting%20regarding%20a%20Paid%20Media%20Opportunity&body=Hi%20Akshay%2C%0A%0AI%20recently%20reviewed%20your%20Paid%20Media%20portfolio%20and%20was%20impressed%20by%20your%20case%20studies%20and%20results.%20%0A%0AWe%20are%20currently%20looking%20for%20a%20%5BRole%2C%20e.g.%2C%20Performance%20Marketer%20%2F%20Paid%20Media%20Manager%5D%20and%20would%20love%20to%20discuss%20how%20your%20expertise%20might%20align%20with%20our%20team%27s%20goals.%0A%0APlease%20let%20me%20know%20your%20availability%20for%20a%20quick%20chat.%0A%0ABest%20regards%2C%0A%5BYour%20Name%20%2F%20Company%5D', externalTarget: '_blank' },
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
    if (mobileAppGrid && !app.hideFromStartMenu) {
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
        <div style="width: 80px; height: 80px; background-image: url('public/images/avatar.png'); background-size: cover; border: 2px inset var(--border-dark);"></div>
        <div>
          <h2 style="margin-bottom: 5px; font-size: 16px;">${data.name}</h2>
          <p style="font-weight: bold; margin-bottom: 5px;">${data.title}</p>
          <p style="color: #666; font-size: 10px;">Location: ${data.location}</p>
        </div>
      </div>
      <p style="line-height: 1.5; margin-bottom: 15px;">${data.bio}</p>
      
      <div style="margin-bottom: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="win-btn primary-btn" onclick="openWindow('work', 'Portfolio', generatePortfolioContent(), 'icon-folder')">View Portfolio</button>
        <button class="win-btn" onclick="openWindow('resume', 'Resume.pdf', generateResumeContent(), 'icon-file')">Download Resume</button>
        <a class="win-btn" href="${PORTFOLIO_DATA.linkedinUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: inline-block;">LinkedIn</a>
        <a class="win-btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=akshaychaandel@gmail.com&su=Connecting%20regarding%20a%20Paid%20Media%20Opportunity&body=Hi%20Akshay%2C%0A%0AI%20recently%20reviewed%20your%20Paid%20Media%20portfolio%20and%20was%20impressed%20by%20your%20case%20studies%20and%20results.%20%0A%0AWe%20are%20currently%20looking%20for%20a%20%5BRole%2C%20e.g.%2C%20Performance%20Marketer%20%2F%20Paid%20Media%20Manager%5D%20and%20would%20love%20to%20discuss%20how%20your%20expertise%20might%20align%20with%20our%20team%27s%20goals.%0A%0APlease%20let%20me%20know%20your%20availability%20for%20a%20quick%20chat.%0A%0ABest%20regards%2C%0A%5BYour%20Name%20%2F%20Company%5D" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: inline-block;">Email Me</a>
      </div>

      <div style="border-top: 1px solid #ccc; padding-top: 10px;">
        <h3 style="margin-bottom: 15px;">What I work across</h3>
        <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px; padding-left: 20px; line-height: 1.4;">
          <li>Google Ads</li>
          <li>Meta Ads</li>
          <li>LinkedIn Ads</li>
          <li>Paid Search</li>
          <li>Lead Generation</li>
          <li>Performance Max</li>
          <li>GA4</li>
          <li>Google Tag Manager</li>
          <li>Looker Studio</li>
          <li>Conversion Tracking</li>
          <li>Landing Page Optimization</li>
          <li>Lead Quality</li>
          <li>Search Intent</li>
          <li>Campaign Optimization</li>
        </ul>
      </div>
    `;
  }

  function generatePortfolioContent() {
    return `
      <div class="file-explorer">
        <div class="file-item" 
             onclick="if(window.innerWidth <= 768) openWindow('cases', 'Case Studies', generateCaseStudiesContent(), 'icon-folder')"
             ondblclick="if(window.innerWidth > 768) openWindow('cases', 'Case Studies', generateCaseStudiesContent(), 'icon-folder')">
          <div class="icon-folder"></div>
          <span>Case Studies</span>
        </div>
        <div class="file-item" 
             onclick="if(window.innerWidth <= 768) openWindow('creatives', 'Ad Creatives', generateCreativesContent(), 'icon-creatives')"
             ondblclick="if(window.innerWidth > 768) openWindow('creatives', 'Ad Creatives', generateCreativesContent(), 'icon-creatives')">
          <div class="icon-folder"></div>
          <span>Ad Creatives</span>
        </div>
        <div class="file-item" 
             onclick="if(window.innerWidth <= 768) openWindow('landingpages', 'Landing Pages', generateLandingPagesContent(), 'icon-landing')"
             ondblclick="if(window.innerWidth > 768) openWindow('landingpages', 'Landing Pages', generateLandingPagesContent(), 'icon-landing')">
          <div class="icon-folder"></div>
          <span>Landing Pages</span>
        </div>
      </div>
      <div style="border-top: 1px solid var(--border-dark); margin-top: 15px; padding-top: 5px; font-size: 10px; color: #555;">
        Status: Loaded | Type: Directory
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
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;transition:opacity 0.3s;padding:20px;';
    
    overlay.innerHTML = `
      <div style="position:absolute;top:20px;right:30px;color:white;font-size:30px;cursor:pointer;font-family:sans-serif;" onclick="this.parentElement.remove()">&times;</div>
      <img src="${imgSrc}" style="max-width:90%;max-height:80vh;object-fit:contain;border-radius:4px;box-shadow:0 10px 30px rgba(0,0,0,0.5);">
      <div style="color:white;margin-top:20px;text-align:center;font-family:'Inter',sans-serif;">
        <strong style="font-size:18px;display:block;margin-bottom:5px;">${title}</strong>
        <span style="font-size:14px;color:#aaa;">${platform}</span>
      </div>
    `;
    
    overlay.onclick = function(e) {
      if(e.target === overlay) {
        overlay.remove();
      }
    };
    
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.style.opacity = '1');
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

  function generateLandingPagesContent() {
    return `
      <div style="padding: 10px; display: flex; flex-direction: column; gap: 20px; max-height: 450px; overflow-y: auto;">
        <p style="font-style: italic; color: #555; margin-bottom: 10px; padding: 0 10px;">Getting the click is only part of the job. The ads and landing experience need to work together.</p>
        ${PORTFOLIO_DATA.landingPages.map(lp => `
          <div style="display: flex; gap: 15px; background: rgba(0,0,0,0.02); padding: 15px; border: 1px solid rgba(0,0,0,0.1); border-radius: var(--radius-md); flex-wrap: wrap;">
            <div style="flex: 0 0 200px; height: 150px; background-image: url('${lp.image}'); background-size: cover; background-position: top center; border: 1px solid rgba(0,0,0,0.1); border-radius: var(--radius-sm);"></div>
            <div style="flex: 1; min-width: 200px; font-size: 12px; line-height: 1.5;">
              <h3 style="margin-bottom: 5px; font-size: 16px;">${lp.client}</h3>
              <div style="margin-bottom: 10px; color: #555;"><strong>${lp.purpose}</strong> | Traffic: ${lp.traffic}</div>
              <p style="margin-bottom: 5px;"><strong>The Goal:</strong> ${lp.goal}</p>
              <p style="margin-bottom: 5px;"><strong>The Audience:</strong> ${lp.audience}</p>
              <p style="margin-bottom: 5px;"><strong>What I worked on:</strong> ${lp.whatIWorkedOn}</p>
              <p style="margin-top: 10px; font-style: italic; color: #666;">My role: ${lp.role}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
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
  
  window.openWindow = openWindow;
  window.generatePortfolioContent = generatePortfolioContent;
  window.generateResumeContent = generateResumeContent;
  window.generateCaseStudiesContent = generateCaseStudiesContent;
  window.generateCreativesContent = generateCreativesContent;
  window.generateLandingPagesContent = generateLandingPagesContent;

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
});
