/* ============================================================
   BONEFISH — Website JavaScript
   ============================================================ */

(function() {
  'use strict';

  // ============================================================
  // 1. MOD DATABASE
  // ============================================================

  const MODS = [
    { id: 1, name: 'Fluent Cursor Pack', category: 'cursor', author: 'BoneFish Studio', downloads: 12500, version: '2.1', icon: '🖱️', preview: '#0ea5e9', files: ['content/textures/Cursors/ArrowCursor.png','content/textures/Cursors/PointerCursor.png','content/textures/Cursors/IBeamCursor.png','content/textures/Cursors/WaitCursor.png'], desc: 'Modern Fluent Design cursor set with smooth animations. Replaces all default Roblox cursors with crisp, high-resolution Fluent-style cursors inspired by Windows 11 design language.', github: 'https://github.com/BoneFishStudio/mods-fluent-cursors', date: '2026-06-15' },
    { id: 2, name: 'Twemoji Font Pack', category: 'font', author: 'Twitter Community', downloads: 28400, version: '15.0', icon: '🔤', preview: '#8b5cf6', files: ['content/fonts/TwemojiMozilla.ttf','content/fonts/families/Twemoji.json'], desc: 'HD emoji replacement using Twemoji (Twitter Emoji) design. Replaces Roblox default emoji with crisp, detailed Twitter-style emoji with proper color rendering.', github: 'https://github.com/BoneFishStudio/mods-twemoji', date: '2026-06-10' },
    { id: 3, name: 'Old Avatar Background', category: 'place', author: 'BoneFish Studio', downloads: 9200, version: '1.0', icon: '🏗️', preview: '#10b981', files: ['ExtraContent/places/OldAvatarBackground.rbxl'], desc: 'Restores the classic pre-2022 avatar background place. Includes the iconic blue gradient backdrop with the original lighting setup for avatar showcases.', github: 'https://github.com/BoneFishStudio/BoneFish', date: '2026-05-28' },
    { id: 4, name: 'Dark UI Theme', category: 'theme', author: 'Community Member', downloads: 15600, version: '3.2', icon: '🎨', preview: '#1e293b', files: ['content/textures/UI/DarkTheme.png','content/textures/UI/ButtonHover.png','content/textures/UI/ScrollbarDark.png','ClientSettings/ClientAppSettings.json'], desc: 'Complete dark UI overhaul for Roblox menus. Changes all in-game UI elements, menus, and dialogs to a sleek dark theme with accent color customization.', github: 'https://github.com/BoneFishStudio/mods-dark-ui', date: '2026-06-20' },
    { id: 5, name: 'HD Crosshair Pack', category: 'crosshair', author: 'Pro Gamer Community', downloads: 32100, version: '5.0', icon: '🎯', preview: '#ef4444', files: ['content/textures/Crosshairs/Default.png','content/textures/Crosshairs/Dot.png','content/textures/Crosshairs/Cross.png','content/textures/Crosshairs/Circle.png','content/textures/Crosshairs/T.png','content/textures/Crosshairs/Plus.png'], desc: '100+ premium crosshair designs for FPS games. Includes dot, cross, circle, T-shape, and custom designs in multiple colors. Compatible with BoneFish Crosshair Overlay.', github: 'https://github.com/BoneFishStudio/mods-crosshairs', date: '2026-06-25' },
    { id: 6, name: 'Enhanced Sound Pack', category: 'sound', author: 'Audio Modders', downloads: 18300, version: '2.3', icon: '🔊', preview: '#f59e0b', files: ['content/sounds/action_footsteps_plastic.mp3','content/sounds/action_jump.mp3','content/sounds/action_land.mp3','content/sounds/action_click.mp3','content/sounds/action_notification.mp3'], desc: 'Crisp, immersive sound replacements for Roblox. Enhances footstep, jump, land, UI click, and notification sounds with higher quality audio samples.', github: 'https://github.com/BoneFishStudio/mods-enhanced-sounds', date: '2026-06-18' },
    { id: 7, name: '64x GUI Textures', category: 'ui', author: 'HD Community', downloads: 7400, version: '1.1', icon: '🖥️', preview: '#06b6d4', files: ['content/textures/UI/Button_64x.png','content/textures/UI/Panel_64x.png','content/textures/UI/Icon_64x.png','content/textures/UI/Checkbox_64x.png','content/textures/UI/Slider_64x.png'], desc: 'High-resolution 64x GUI texture replacements. Upgrades all Roblox UI elements to double resolution for sharper visuals on high-DPI displays.', github: 'https://github.com/BoneFishStudio/mods-64x-gui', date: '2026-05-20' },
    { id: 8, name: 'Rubik Font Family', category: 'font', author: 'Font Community', downloads: 11200, version: '2.0', icon: '🔤', preview: '#ec4899', files: ['content/fonts/Rubik-Regular.ttf','content/fonts/Rubik-Bold.ttf','content/fonts/Rubik-Italic.ttf','content/fonts/families/Rubik.json'], desc: 'Modern Rubik font family replacement. Replaces Roblox default font with the clean, modern Rubik typeface in regular, bold, and italic variants.', github: 'https://github.com/BoneFishStudio/mods-rubik-font', date: '2026-06-05' },
    { id: 9, name: 'Classic Cursor Collection', category: 'cursor', author: 'Retro Community', downloads: 6300, version: '1.0', icon: '🖱️', preview: '#84cc16', files: ['content/textures/Cursors/ClassicArrow.png','content/textures/Cursors/ClassicPointer.png','content/textures/Cursors/ClassicText.png','content/textures/Cursors/ClassicBusy.png'], desc: 'Retro Windows 95/98 classic cursor set for Roblox. Nostalgic pointer designs for those who miss the classic Windows aesthetic.', date: '2026-04-15' },
    { id: 10, name: 'FPS Performance Flags', category: 'flag', author: 'BoneFish Studio', downloads: 45200, version: '6.3', icon: '⚙️', preview: '#6366f1', files: ['ClientSettings/ClientAppSettings.json'], desc: 'Optimized FastFlag presets for maximum FPS and performance. Includes FPS unlocker, texture quality fixes, reduced input lag, and memory optimization flags.', github: 'https://github.com/BoneFishStudio/BoneFish', date: '2026-06-30' },
    { id: 11, name: 'Minecraft Sound Pack', category: 'sound', author: 'Crossover Mods', downloads: 8900, version: '1.5', icon: '🔊', preview: '#22c55e', files: ['content/sounds/action_footsteps_grass.mp3','content/sounds/action_dig.mp3','content/sounds/action_place.mp3','content/sounds/action_hurt.mp3','content/sounds/action_eat.mp3'], desc: 'Minecraft-inspired sound replacements for Roblox. Replaces various Roblox sounds with iconic Minecraft-style audio for a nostalgic crossover experience.', github: 'https://github.com/BoneFishStudio/mods-minecraft-sounds', date: '2026-06-12' },
    { id: 12, name: 'Neon Crosshair Pro', category: 'crosshair', author: 'Esports Community', downloads: 20700, version: '3.0', icon: '🎯', preview: '#f43f5e', files: ['content/textures/Crosshairs/NeonDot.png','content/textures/Crosshairs/NeonCross.png','content/textures/Crosshairs/NeonCircle.png','content/textures/Crosshairs/NeonArrow.png','content/textures/Crosshairs/NeonPrecision.png'], desc: 'Neon-styled crosshair collection with glow effects. 50 vibrant, glowing crosshair designs optimized for visibility in bright and dark environments.', github: 'https://github.com/BoneFishStudio/mods-neon-crosshairs', date: '2026-06-22' },
    { id: 13, name: 'Fluent Design Theme', category: 'theme', author: 'Design Community', downloads: 19800, version: '2.0', icon: '🎨', preview: '#0c4a6e', files: ['content/textures/UI/Fluent/Accent.png','content/textures/UI/Fluent/Mica.png','content/textures/UI/Fluent/Acrylic.png','content/textures/UI/Fluent/Reveal.png','ClientSettings/ClientAppSettings.json'], desc: 'Full Windows 11 Fluent Design theme for Roblox. Implements Mica, Acrylic, and Reveal effects throughout the Roblox interface.', github: 'https://github.com/BoneFishStudio/mods-fluent-theme', date: '2026-06-28' },
    { id: 14, name: 'Noto Sans Thai Font', category: 'font', author: 'International Community', downloads: 3400, version: '1.0', icon: '🔤', preview: '#a855f7', files: ['content/fonts/NotoSansThai-VariableFont_wdth,wght.ttf','content/fonts/families/NotoSansThai.json'], desc: 'Noto Sans Thai font with proper Thai character support. Essential for Thai-language Roblox players who need proper Unicode rendering.', date: '2026-05-10' },
    { id: 15, name: 'Vaporwave UI Theme', category: 'ui', author: 'Aesthetic Mods', downloads: 5600, version: '1.2', icon: '🖥️', preview: '#d946ef', files: ['content/textures/UI/Vaporwave/Background.png','content/textures/UI/Vaporwave/Button.png','content/textures/UI/Vaporwave/Panel.png','content/textures/UI/Vaporwave/Icons.png'], desc: 'Retro synthwave/vaporwave aesthetic UI overhaul. Pink and purple neon gradients with grid patterns and 80s retro-futuristic design elements.', github: 'https://github.com/BoneFishStudio/mods-vaporwave-ui', date: '2026-05-30' },
    { id: 16, name: 'Minimal Crosshair Set', category: 'crosshair', author: 'Minimalist Community', downloads: 14500, version: '2.0', icon: '🎯', preview: '#ffffff', files: ['content/textures/Crosshairs/MinimalDot.png','content/textures/Crosshairs/MinimalCross.png','content/textures/Crosshairs/MinimalCircle.png'], desc: 'Ultra-minimal crosshair designs for competitive players. Tiny, precise, and distraction-free aim indicators for serious gameplay.', date: '2026-06-08' },
    { id: 17, name: 'Fantasy Soundscape', category: 'sound', author: 'Audio Artists', downloads: 4200, version: '1.0', icon: '🔊', preview: '#8b5cf6', files: ['content/sounds/ambient_forest.mp3','content/sounds/ambient_cave.mp3','content/sounds/ambient_castle.mp3','content/sounds/action_magic.mp3'], desc: 'Fantasy RPG-inspired ambient sound replacements. Immersive forest, cave, castle ambience and magical sound effects for adventure games.', github: 'https://github.com/BoneFishStudio/mods-fantasy-sounds', date: '2026-05-25' },
    { id: 18, name: 'High Contrast Accessibility', category: 'ui', author: 'Accessibility Team', downloads: 2100, version: '1.3', icon: '🖥️', preview: '#000000', files: ['content/textures/UI/Accessible/HighContrast.png','content/textures/UI/Accessible/LargeText.png','content/textures/UI/Accessible/ButtonFocus.png','ClientSettings/ClientAppSettings.json'], desc: 'High-contrast UI for visually impaired players. Bold outlines, large text, and clear focus indicators make Roblox more accessible.', github: 'https://github.com/BoneFishStudio/mods-accessibility', date: '2026-06-01' },
    { id: 19, name: 'Old Roblox Cursors', category: 'cursor', author: 'Nostalgia Mods', downloads: 8100, version: '2.0', icon: '🖱️', preview: '#f97316', files: ['content/textures/Cursors/2016Arrow.png','content/textures/Cursors/2016Pointer.png','content/textures/Cursors/2018Arrow.png','content/textures/Cursors/2018Pointer.png','content/textures/Cursors/OriginalHand.png'], desc: 'Classic Roblox cursor designs from 2016-2020. Bring back the nostalgic cursor designs from different eras of Roblox history.', date: '2026-05-18' },
    { id: 20, name: 'Anime Theme Pack', category: 'theme', author: 'Anime Community', downloads: 16400, version: '4.1', icon: '🎨', preview: '#e11d48', files: ['content/textures/UI/Anime/Background.png','content/textures/UI/Anime/Buttons.png','content/textures/UI/Anime/Panels.png','content/textures/UI/Anime/Icons.png','ClientSettings/ClientAppSettings.json'], desc: 'Anime-themed UI with popular character aesthetics. Multiple anime-inspired color schemes and decorative elements for the Roblox interface.', github: 'https://github.com/BoneFishStudio/mods-anime-theme', date: '2026-06-14' }
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
