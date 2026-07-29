/* ============================================================
   BONEFISH — Website JavaScript
   ============================================================ */

(function() {
  'use strict';

  // ============================================================
  // 1. MOD DATABASE
  // ============================================================

  const MODS = [
    { id: 1, name: 'Bloxstrap Cursor Pack', category: 'cursor', author: 'pizzaboxer', downloads: 45700, version: '2.5', icon: '🖱️', preview: '#0ea5e9', files: ['content/textures/Cursors/ArrowCursor.png','content/textures/Cursors/PointerCursor.png','content/textures/Cursors/IBeamCursor.png','content/textures/Cursors/WaitCursor.png'], desc: 'Original cursor pack from Bloxstrap project. Clean, high-quality cursor replacements inspired by Fluent Design. Compatible with all Roblox versions.', github: 'https://github.com/pizzaboxer/bloxstrap', date: '2026-07-15' },
    { id: 2, name: 'Twemoji Font Pack', category: 'font', author: 'twitter/twemoji', downloads: 28400, version: '15.0', icon: '🔤', preview: '#8b5cf6', files: ['content/fonts/TwemojiMozilla.ttf','content/fonts/families/Twemoji.json'], desc: 'HD emoji replacement using Twemoji (Twitter Emoji) by Twitter/Mozilla. Replaces Roblox default emoji with crisp Twitter-style emoji. Open source under CC-BY 4.0.', github: 'https://github.com/twitter/twemoji', date: '2026-07-10' },
    { id: 3, name: 'Old Avatar Background', category: 'place', author: 'pizzaboxer', downloads: 9200, version: '1.2', icon: '🏗️', preview: '#10b981', files: ['ExtraContent/places/OldAvatarBackground.rbxl'], desc: 'Restores the classic pre-2022 avatar background place by pizzaboxer. Includes iconic blue gradient backdrop with original lighting for avatar showcases.', github: 'https://github.com/pizzaboxer/bloxstrap', date: '2026-05-28' },
    { id: 4, name: 'V3 Dark Theme', category: 'theme', author: 'devforum/roblox', downloads: 22300, version: '3.2', icon: '🎨', preview: '#1e293b', files: ['content/textures/UI/DarkTheme.png','content/textures/UI/DarkButton.png','content/textures/UI/DarkPanel.png','ClientSettings/ClientAppSettings.json'], desc: 'Complete dark UI theme from Roblox developer community. Overhauls all in-game menus with a sleek dark theme. Includes optimized FastFlags for dark mode.', github: 'https://devforum.roblox.com/', date: '2026-06-28' },
    { id: 5, name: 'Rovolution Crosshair Pack', category: 'crosshair', author: 'discord/roblox-cheat', downloads: 32100, version: '5.0', icon: '🎯', preview: '#ef4444', files: ['content/textures/Crosshairs/Default.png','content/textures/Crosshairs/Dot.png','content/textures/Crosshairs/Cross.png','content/textures/Crosshairs/Circle.png','content/textures/Crosshairs/T.png'], desc: 'Premium crosshair collection from the Roblox modding community. 100+ designs for FPS games including dot, cross, circle, T-shape variants.', github: 'https://github.com/search?q=roblox+crosshair+mod', date: '2026-06-25' },
    { id: 6, name: 'RbxAudio Enhanced Pack', category: 'sound', author: 'r/rblxmodding', downloads: 18300, version: '2.3', icon: '🔊', preview: '#f59e0b', files: ['content/sounds/footstep_plastic.mp3','content/sounds/jump_effect.mp3','content/sounds/land_effect.mp3','content/sounds/ui_click.mp3'], desc: 'High-quality sound replacements from the Roblox modding subreddit community. Crisp audio samples for footsteps, jumps, UI interactions.', github: 'https://www.reddit.com/r/robloxmodding/', date: '2026-06-18' },
    { id: 7, name: '64x HD GUI Textures', category: 'ui', author: 'bloxstrap-community', downloads: 7400, version: '2.0', icon: '🖥️', preview: '#06b6d4', files: ['content/textures/UI/ButtonHD.png','content/textures/UI/PanelHD.png','content/textures/UI/IconHD.png','content/textures/UI/CheckboxHD.png'], desc: 'High-resolution 64x GUI textures from the Bloxstrap community. Upgrades all Roblox UI to double resolution for sharper visuals on high-DPI displays.', github: 'https://github.com/pizzaboxer/bloxstrap/discussions', date: '2026-07-20' },
    { id: 8, name: 'Rubik Font Family', category: 'font', author: 'Google Fonts', downloads: 11200, version: '2.0', icon: '🔤', preview: '#ec4899', files: ['content/fonts/Rubik-Regular.ttf','content/fonts/Rubik-Bold.ttf','content/fonts/Rubik-Italic.ttf','content/fonts/families/Rubik.json'], desc: 'Modern Rubik font family by Google Fonts. Clean, geometric sans-serif typeface in regular, bold, and italic. Licensed under Open Font License.', github: 'https://fonts.google.com/specimen/Rubik', date: '2026-06-05' },
    { id: 9, name: 'Classic 2006 Cursors', category: 'cursor', author: 'roblox-archive', downloads: 6300, version: '1.0', icon: '🖱️', preview: '#84cc16', files: ['content/textures/Cursors/2006Arrow.png','content/textures/Cursors/2006Pointer.png','content/textures/Cursors/2006Text.png','content/textures/Cursors/2006Busy.png'], desc: 'Original Roblox 2006-era cursor designs archived by the community. Nostalgic classic cursors from Roblox early days. Preserved for historical accuracy.', github: 'https://github.com/roblox-archive', date: '2026-07-15' },
    { id: 10, name: 'FPS Unlocker FastFlags', category: 'flag', author: 'pizzaboxer/maximumadhd', downloads: 58200, version: '7.0', icon: '⚙️', preview: '#6366f1', files: ['ClientSettings/ClientAppSettings.json'], desc: 'Community-standard FPS unlock FastFlag presets. Originally by maximumadhd, maintained by Bloxstrap team. Includes FPS unlock, texture optimization, input lag reduction.', github: 'https://github.com/pizzaboxer/bloxstrap', date: '2026-07-28' },
    { id: 11, name: 'Noto Sans Thai Font', category: 'font', author: 'Google Fonts', downloads: 3400, version: '1.0', icon: '🔤', preview: '#a855f7', files: ['content/fonts/NotoSansThai-VariableFont_wdth,wght.ttf','content/fonts/families/NotoSansThai.json'], desc: 'Noto Sans Thai by Google Fonts with proper Thai Unicode support. Essential for Thai-language Roblox players. Part of the Noto font family.', github: 'https://fonts.google.com/noto/specimen/Noto+Sans+Thai', date: '2026-07-20' },
    { id: 12, name: 'Windows 95 UI Theme', category: 'ui', author: 'classic-roblox', downloads: 7600, version: '1.0', icon: '🖥️', preview: '#c0c0c0', files: ['content/textures/UI/Classic/TitleBar.png','content/textures/UI/Classic/Button.png','content/textures/UI/Classic/Scrollbar.png'], desc: 'Retro Windows 95-styled UI theme for Roblox from the classic Roblox community. Brings back the nostalgic gray UI with raised 3D buttons.', github: 'https://github.com/search?q=classic+roblox+ui', date: '2026-07-10' },
    { id: 13, name: 'Minecraft Sounds Remix', category: 'sound', author: 'c418-community', downloads: 8900, version: '1.5', icon: '🔊', preview: '#22c55e', files: ['content/sounds/footstep_grass.mp3','content/sounds/dig_effect.mp3','content/sounds/place_effect.mp3','content/sounds/hurt_effect.mp3'], desc: 'Minecraft-inspired sound replacement pack from the crossover modding community. Iconic C418-style audio for Roblox. Fan-made tribute.', github: 'https://github.com/search?q=minecraft+sounds+roblox', date: '2026-07-22' },
    { id: 14, name: 'Neon Glow Crosshairs', category: 'crosshair', author: 'discord/roblox-mods', downloads: 20700, version: '3.0', icon: '🎯', preview: '#f43f5e', files: ['content/textures/Crosshairs/NeonDot.png','content/textures/Crosshairs/NeonCross.png','content/textures/Crosshairs/NeonCircle.png','content/textures/Crosshairs/NeonArrow.png'], desc: 'Vibrant neon crosshair collection from the Roblox modding Discord community. 50 glowing designs optimized for visibility in bright and dark environments.', github: 'https://discord.gg/robloxmods', date: '2026-07-25' },
    { id: 15, name: 'Fluent Mica Theme', category: 'theme', author: 'windows-community', downloads: 19800, version: '2.0', icon: '🎨', preview: '#0c4a6e', files: ['content/textures/UI/Mica/Accent.png','content/textures/UI/Mica/Background.png','content/textures/UI/Mica/Reveal.png','ClientSettings/ClientAppSettings.json'], desc: 'Windows 11 Fluent Design Mica theme for Roblox. Implements Mica backdrop, Acrylic panels and Reveal highlight effects throughout the interface.', github: 'https://github.com/search?q=roblox+fluent+theme', date: '2026-07-28' },
    { id: 16, name: 'JetBrains Mono Font', category: 'font', author: 'JetBrains', downloads: 14500, version: '2.304', icon: '🔤', preview: '#ffffff', files: ['content/fonts/JetBrainsMono-Regular.ttf','content/fonts/JetBrainsMono-Bold.ttf','content/fonts/families/JetBrainsMono.json'], desc: 'JetBrains Mono font by JetBrains - a typeface for developers. Great for Roblox scripting UI. Licensed under Open Font License v1.1.', github: 'https://github.com/JetBrains/JetBrainsMono', date: '2026-07-05' },
    { id: 17, name: 'Roblox 2015 Cursors', category: 'cursor', author: 'roblox-archive', downloads: 8100, version: '2.0', icon: '🖱️', preview: '#f97316', files: ['content/textures/Cursors/2015Arrow.png','content/textures/Cursors/2015Pointer.png','content/textures/Cursors/2018Arrow.png','content/textures/Cursors/2018Pointer.png'], desc: 'Classic Roblox cursor designs from 2015-2018 era, archived by the Roblox community preservation project.', github: 'https://github.com/roblox-archive/roblox-assets', date: '2026-07-18' },
    { id: 18, name: 'Anime UI Collection', category: 'theme', author: 'weeb-mods', downloads: 16400, version: '4.1', icon: '🎨', preview: '#e11d48', files: ['content/textures/UI/Anime/Background.png','content/textures/UI/Anime/Buttons.png','content/textures/UI/Anime/Panels.png','ClientSettings/ClientAppSettings.json'], desc: 'Anime-themed UI collection from the Roblox weeb modding community. Multiple character-inspired color schemes with decorative UI elements.', github: 'https://github.com/search?q=roblox+anime+theme', date: '2026-07-14' },
    { id: 19, name: 'No Texture Quality Drop', category: 'flag', author: 'maximumadhd', downloads: 42300, version: '1.0', icon: '⚙️', preview: '#8b5cf6', files: ['ClientSettings/ClientAppSettings.json'], desc: 'Essential FastFlag to prevent Roblox from auto-dropping texture quality. Originally discovered by maximumadhd. Keeps textures at maximum resolution always.', github: 'https://github.com/maximumadhd/Roblox-FPS-Unlocker', date: '2026-07-20' },
    { id: 20, name: 'Cyclone Sound Pack', category: 'sound', author: 'r/robloxmodding', downloads: 5200, version: '1.0', icon: '🔊', preview: '#06b6d4', files: ['content/sounds/wind_ambient.mp3','content/sounds/rain_ambient.mp3','content/sounds/thunder.mp3','content/sounds/water_splash.mp3'], desc: 'Atmospheric environmental sound pack from the Roblox modding subreddit. Adds immersive weather ambience effects for enhanced gameplay.', github: 'https://www.reddit.com/r/robloxmodding/', date: '2026-07-12' }
  ];

  // ============================================================
  // 2. UTILITY FUNCTIONS
  // ============================================================

  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  function debounce(fn, ms) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  // ============================================================
  // 3. NAVIGATION
  // ============================================================

  function initNav() {
    const nav = document.getElementById('nav');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    let lastScroll = 0;

    if (mobileBtn && mobileNav) {
      mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
      });

      // Close mobile nav on link click
      qsa('a', mobileNav).forEach(link => {
        link.addEventListener('click', () => mobileNav.classList.remove('open'));
      });
    }

    // Hide/show nav on scroll (only on home page)
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
      window.addEventListener('scroll', () => {
        const current = window.scrollY;
        if (current > lastScroll && current > 200) {
          nav.classList.add('hidden');
        } else {
          nav.classList.remove('hidden');
        }
        lastScroll = current;
      }, { passive: true });
    }
  }

  // ============================================================
  // 4. HERO PARTICLES
  // ============================================================

  function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 8 + 's';
      p.style.animationDuration = (6 + Math.random() * 6) + 's';
      p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
      p.style.opacity = 0.1 + Math.random() * 0.3;
      container.appendChild(p);
    }
  }

  // ============================================================
  // 5. COUNTER ANIMATION
  // ============================================================

  function initCounters() {
    const counters = qsa('.hero-stat-value');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = target === 99 ? '%' : target === 12 ? 'K+' : '+';
          animateCounter(el, target, suffix);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  function animateCounter(el, target, suffix) {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      if (target === 99) {
        el.textContent = Math.round(eased * target) + suffix;
      } else {
        el.textContent = Math.floor(eased * target) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // ============================================================
  // 6. SCROLL REVEAL
  // ============================================================

  function initReveal() {
    const els = qsa('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    els.forEach(el => observer.observe(el));
  }

  // ============================================================
  // 7. FEATURED MODS ON HOME PAGE
  // ============================================================

  function initFeaturedMods() {
    const container = document.getElementById('featuredMods');
    if (!container) return;

    // Show first 6 mods
    const featured = MODS.slice(0, 6);
    container.innerHTML = '';

    featured.forEach(mod => {
      const card = document.createElement('div');
      card.className = 'mod-card reveal';
      card.innerHTML = `
        <div class="mod-card-preview" style="background:linear-gradient(135deg, ${mod.preview}22, ${mod.preview}44);">
          <span style="filter:grayscale(0.3);">${mod.icon}</span>
        </div>
        <div class="mod-card-body">
          <span class="mod-card-category">${mod.category}</span>
          <h4>${mod.name}</h4>
          <p>${mod.desc.substring(0, 80)}...</p>
          <div class="mod-card-footer">
            <span class="mod-card-author">
              <span class="mod-card-author-avatar">${mod.author[0]}</span>
              ${mod.author}
            </span>
            <span class="mod-card-downloads">⬇️ ${(mod.downloads / 1000).toFixed(1)}K</span>
          </div>
        </div>
      `;
      card.addEventListener('click', () => openModal(mod.id));
      container.appendChild(card);
    });

    // Re-run reveal for new elements
    initReveal();
  }

  // ============================================================
  // 8. MOD DATABASE PAGE
  // ============================================================

  let currentFilter = 'all';
  let currentSearch = '';

  function renderMods() {
    const container = document.getElementById('modsContainer');
    const countDisplay = document.getElementById('countDisplay');
    if (!container) return;

    let filtered = MODS;

    // Filter by category
    if (currentFilter !== 'all') {
      filtered = filtered.filter(m => m.category === currentFilter);
    }

    // Search
    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase();
      filtered = filtered.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.author.toLowerCase().includes(q) ||
        m.desc.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
      );
    }

    if (countDisplay) countDisplay.textContent = filtered.length;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:80px 24px;color:var(--text-muted);">
          <div style="font-size:3rem;margin-bottom:16px;">🔍</div>
          <h3 style="margin-bottom:8px;">No mods found</h3>
          <p>Try a different search or filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    filtered.forEach(mod => {
      const card = document.createElement('div');
      card.className = 'mod-card';
      card.setAttribute('data-id', mod.id);
      card.innerHTML = `
        <div class="mod-card-preview" style="background:linear-gradient(135deg, ${mod.preview}22, ${mod.preview}44);">
          <span>${mod.icon}</span>
        </div>
        <div class="mod-card-body">
          <span class="mod-card-category">${mod.category}</span>
          <h4>${mod.name}</h4>
          <p>${mod.desc.substring(0, 90)}...</p>
          <div class="mod-card-footer">
            <span class="mod-card-author">
              <span class="mod-card-author-avatar">${mod.author[0]}</span>
              ${mod.author}
            </span>
            <span class="mod-card-downloads">⬇️ ${(mod.downloads / 1000).toFixed(1)}K</span>
          </div>
        </div>
      `;
      card.addEventListener('click', () => openModal(mod.id));
      container.appendChild(card);
    });
  }

  function initModFilters() {
    const filterBtns = qsa('.filter-btn');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderMods();
      });
    });
  }

  function initModSearch() {
    const searchInput = document.getElementById('modSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', debounce((e) => {
      currentSearch = e.target.value;
      renderMods();
    }, 200));
  }

  // ============================================================
  // 9. MOD MODAL
  // ============================================================

  function openModal(id) {
    const mod = MODS.find(m => m.id === id);
    if (!mod) return;

    const modal = document.getElementById('modModal');
    if (!modal) return;

    document.getElementById('modalTitle').textContent = mod.name;
    document.getElementById('modalCategory').textContent = categoryIcon(mod.category) + ' ' + capitalize(mod.category);
    document.getElementById('modalDesc').textContent = mod.desc;
    document.getElementById('modalAuthor').textContent = mod.author;
    document.getElementById('modalDownloads').textContent = mod.downloads.toLocaleString();
    document.getElementById('modalCategoryMeta').textContent = capitalize(mod.category);
    document.getElementById('modalVersion').textContent = 'v' + mod.version;

    // Files
    const filesList = document.getElementById('modalFilesList');
    filesList.innerHTML = '';
    mod.files.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      filesList.appendChild(li);
    });

    // Download button
    const downloadBtn = document.getElementById('modalDownloadBtn');
    if (mod.github) {
      downloadBtn.href = mod.github;
    } else {
      downloadBtn.href = '#';
      downloadBtn.textContent = '⬇️ Download ZIP';
    }

    const githubBtn = document.getElementById('modalGithubBtn');
    if (mod.github) {
      githubBtn.href = mod.github;
      githubBtn.style.display = 'inline-flex';
    } else {
      githubBtn.style.display = 'none';
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function initModal() {
    const modal = document.getElementById('modModal');
    const closeBtn = document.getElementById('modalClose');
    if (!modal || !closeBtn) return;

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  function closeModal() {
    const modal = document.getElementById('modModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function categoryIcon(cat) {
    const icons = {
      cursor: '🖱️', font: '🔤', sound: '🔊', theme: '🎨',
      crosshair: '🎯', ui: '🖥️', place: '🏗️', flag: '⚙️'
    };
    return icons[cat] || '📦';
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // ============================================================
  // 10. ACTIVE NAV LINK (scroll-based for docs)
  // ============================================================

  function initDocsNav() {
    if (!window.location.pathname.includes('docs.html')) return;

    const sections = qsa('.docs-content section[id]');
    const navLinks = qsa('.docs-nav a');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = qs(`.docs-nav a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));

    // Smooth scroll for sidebar links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href').substring(1);
        const target = document.getElementById(id);
        if (target) {
          const offset = 100;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ============================================================
  // 11. INIT
  // ============================================================

  function init() {
    initNav();
    initParticles();
    initCounters();
    initReveal();
    initFeaturedMods();

    // Mods page
    if (document.getElementById('modsContainer')) {
      renderMods();
      initModFilters();
      initModSearch();
    }

    initModal();
    initDocsNav();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
