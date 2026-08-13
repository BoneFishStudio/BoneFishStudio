/* ============================================================
   BONEFISH — Website JavaScript
   ============================================================ */

(function() {
  'use strict';

  // ============================================================
  // 1. MOD DATABASE
  // ============================================================

  // Only list assets with a public, verifiable source. Download counts, versions,
  // and dates are intentionally omitted when the source does not publish them.
  const MODS = [
    {
      id: 'cursor-2006', name: 'Classic Cursor Set (2006)', category: 'cursor',
      author: 'Bloxstrap repository', sourceLabel: 'Upstream GitHub source', icon: '🖱️', preview: '#0ea5e9',
      files: ['ArrowCursor.png', 'ArrowFarCursor.png'], status: 'Bundled in BoneFish',
      source: 'https://github.com/bloxstraplabs/bloxstrap/tree/main/Bloxstrap/Resources/Mods/Cursor/From2006',
      desc: 'The two 2006 cursor assets included by the upstream Bloxstrap project and bundled in this repository.'
    },
    {
      id: 'cursor-2013', name: 'Classic Cursor Set (2013)', category: 'cursor',
      author: 'Bloxstrap repository', sourceLabel: 'Upstream GitHub source', icon: '🖱️', preview: '#14b8a6',
      files: ['ArrowCursor.png', 'ArrowFarCursor.png'], status: 'Bundled in BoneFish',
      source: 'https://github.com/bloxstraplabs/bloxstrap/tree/main/Bloxstrap/Resources/Mods/Cursor/From2013',
      desc: 'The two 2013 cursor assets included by the upstream Bloxstrap project and bundled in this repository.'
    },
    {
      id: 'old-avatar', name: 'Old Avatar Background', category: 'place',
      author: 'Bloxstrap repository', sourceLabel: 'Upstream GitHub source', icon: '🏗️', preview: '#10b981',
      files: ['OldAvatarBackground.rbxl'], status: 'Bundled in BoneFish',
      source: 'https://github.com/bloxstraplabs/bloxstrap/blob/main/Bloxstrap/Resources/Mods/OldAvatarBackground.rbxl',
      downloadUrl: 'https://raw.githubusercontent.com/bloxstraplabs/bloxstrap/main/Bloxstrap/Resources/Mods/OldAvatarBackground.rbxl',
      desc: 'The original place asset shipped by Bloxstrap for its old avatar background preset.'
    },
    {
      id: 'old-sounds', name: 'Classic Character Sounds', category: 'sound',
      author: 'Bloxstrap repository', sourceLabel: 'Upstream GitHub source', icon: '🔊', preview: '#f59e0b',
      files: ['OldWalk.mp3', 'OldJump.mp3', 'OldGetUp.mp3', 'Empty.mp3'], status: 'Bundled in BoneFish',
      source: 'https://github.com/bloxstraplabs/bloxstrap/tree/main/Bloxstrap/Resources/Mods/Sounds',
      desc: 'The four sound assets used by the built-in classic character sounds preset.'
    },
    {
      id: 'catmoji', name: 'Catmoji', category: 'font',
      author: 'pizzaboxer / rbxcustom-fontemojis', sourceLabel: 'Community GitHub release', icon: '🐱', preview: '#ec4899',
      files: ['Catmoji.ttf'], status: 'External asset',
      source: 'https://github.com/bloxstraplabs/rbxcustom-fontemojis/releases/tag/my-phone-is-78-percent',
      downloadUrl: 'https://github.com/bloxstraplabs/rbxcustom-fontemojis/releases/download/my-phone-is-78-percent/Catmoji.ttf',
      desc: 'A real emoji font release used by BoneFish through its emoji preset support.'
    },
    {
      id: 'emoji-windows-8', name: 'Windows 8.1 Emoji', category: 'font',
      author: 'pizzaboxer / rbxcustom-fontemojis', sourceLabel: 'Community GitHub release', icon: '🔤', preview: '#6366f1',
      files: ['Win8.1SegoeUIEmoji.ttf'], status: 'External asset',
      source: 'https://github.com/bloxstraplabs/rbxcustom-fontemojis/releases/tag/my-phone-is-78-percent',
      downloadUrl: 'https://github.com/bloxstraplabs/rbxcustom-fontemojis/releases/download/my-phone-is-78-percent/Win8.1SegoeUIEmoji.ttf',
      desc: 'The Windows 8.1 emoji font published in the community release used by BoneFish.'
    },
    {
      id: 'emoji-windows-10', name: 'Windows 10 Emoji', category: 'font',
      author: 'pizzaboxer / rbxcustom-fontemojis', sourceLabel: 'Community GitHub release', icon: '🔤', preview: '#8b5cf6',
      files: ['Win10April2018SegoeUIEmoji.ttf'], status: 'External asset',
      source: 'https://github.com/bloxstraplabs/rbxcustom-fontemojis/releases/tag/my-phone-is-78-percent',
      downloadUrl: 'https://github.com/bloxstraplabs/rbxcustom-fontemojis/releases/download/my-phone-is-78-percent/Win10April2018SegoeUIEmoji.ttf',
      desc: 'The Windows 10 emoji font published in the community release used by BoneFish.'
    },
    {
      id: 'emoji-windows-11', name: 'Windows 11 Emoji', category: 'font',
      author: 'pizzaboxer / rbxcustom-fontemojis', sourceLabel: 'Community GitHub release', icon: '🔤', preview: '#a855f7',
      files: ['Win1122H2SegoeUIEmoji.ttf'], status: 'External asset',
      source: 'https://github.com/bloxstraplabs/rbxcustom-fontemojis/releases/tag/my-phone-is-78-percent',
      downloadUrl: 'https://github.com/bloxstraplabs/rbxcustom-fontemojis/releases/download/my-phone-is-78-percent/Win1122H2SegoeUIEmoji.ttf',
      desc: 'The Windows 11 emoji font published in the community release used by BoneFish.'
    }
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
  // 5. REPOSITORY FACTS
  // ============================================================

  async function initRepoStats() {
    const entries = qsa('[data-repo-stat]');
    if (!entries.length) return;

    const verifiedEntries = MODS.length;
    const bundledEntries = MODS.filter(mod => mod.status === 'Bundled in BoneFish').length;

    const setStat = (name, value) => {
      entries.filter(entry => entry.dataset.repoStat === name)
        .forEach(entry => { entry.textContent = value; });
    };

    setStat('entries', verifiedEntries);
    setStat('bundled', bundledEntries);

try {
      const [repoResponse, releaseResponse] = await Promise.all([
        fetch('https://api.github.com/repos/BoneFishStudio/BoneFish', {
          headers: { Accept: 'application/vnd.github+json' }
        }),
        fetch('https://api.github.com/repos/BoneFishStudio/BoneFish/releases/latest', {
          headers: { Accept: 'application/vnd.github+json' }
        })
      ]);
      if (!repoResponse.ok) throw new Error(`GitHub returned ${repoResponse.status}`);

      const repository = await repoResponse.json();
      setStat('stars', repository.stargazers_count);

      if (releaseResponse.ok) {
        const release = await releaseResponse.json();
        setStat('release', release.tag_name);
      }
    } catch (error) {
      console.warn('Repository stats unavailable:', error);
      setStat('stars', '—');
    }
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

    // Show a small, source-backed selection rather than invented popularity data.
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
          <p>${mod.desc.substring(0, 90)}${mod.desc.length > 90 ? '...' : ''}</p>
          <div class="mod-card-footer">
            <span class="mod-card-author">
              <span class="mod-card-author-avatar">${mod.author[0]}</span>
              ${mod.author}
            </span>
            <span class="mod-card-status">${mod.status}</span>
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
          <p>${mod.desc.substring(0, 100)}${mod.desc.length > 100 ? '...' : ''}</p>
          <div class="mod-card-footer">
            <span class="mod-card-author">
              <span class="mod-card-author-avatar">${mod.author[0]}</span>
              ${mod.author}
            </span>
            <span class="mod-card-status">${mod.status}</span>
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
    document.getElementById('modalSourceLabel').textContent = mod.sourceLabel;
    document.getElementById('modalCategoryMeta').textContent = capitalize(mod.category);
    document.getElementById('modalStatus').textContent = mod.status;

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
    if (mod.downloadUrl) {
      downloadBtn.href = mod.downloadUrl;
      downloadBtn.style.display = 'inline-flex';
    } else {
      downloadBtn.href = '#';
      downloadBtn.style.display = 'none';
    }

    const githubBtn = document.getElementById('modalGithubBtn');
    if (mod.source) {
      githubBtn.href = mod.source;
      githubBtn.textContent = '📂 View source';
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
    initRepoStats();
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
