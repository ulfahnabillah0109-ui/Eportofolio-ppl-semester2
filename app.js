/**
 * OVERTAKE FRAMER THEME - INTERACTION ENGINE
 * Ulfah Nabillah, S.Ds. | Portofolio PPL Mandiri & Terbimbing PPG Calon Guru 2026
 * Bidang Studi Desain Komunikasi Visual (DKV) - SMKS Koperasi Yogyakarta
 * Faithful 1:1 Overtake Theme Interaction Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initDropdownMenu();
  initMatrixDots();
  initHeaderScroll();
  initDisciplinesTabs();
  initBentoBars();
  initStackCardsEffect();
  initScrollReveal();
  initSmoothScroll();
  
  // PPL Specific Modules
  initCycleTabs();
  initModulSwitcher();
  initGalleryFilter();
  initLightbox();
  initDocSearch();
});

/* ==========================================================================
   1. NAVBAR DROPDOWN MENU INTERACTION (REF OVERTAKE SPEC)
   ========================================================================== */
function initDropdownMenu() {
  const dropdownWrapper = document.getElementById('navDropdown');
  const dropdownToggle = document.getElementById('dropdownToggle');
  const dropdownCard = document.getElementById('dropdownCard');

  if (!dropdownWrapper || !dropdownToggle || !dropdownCard) return;

  // Toggle on button click
  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownWrapper.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdownWrapper.contains(e.target)) {
      dropdownWrapper.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdownWrapper.classList.contains('open')) {
      dropdownWrapper.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==========================================================================
   2. MATRIX DOTS INTERACTIVE HOVER ON STATS CARD
   ========================================================================== */
function initMatrixDots() {
  const dots = document.querySelectorAll('.matrix-dot');
  if (!dots.length) return;

  dots.forEach((dot) => {
    dot.addEventListener('mouseenter', () => {
      dot.style.transform = 'scale(1.25)';
      dot.style.background = '#9EFC65';
      dot.style.boxShadow = '0 0 16px rgba(158, 252, 101, 0.8)';
    });

    dot.addEventListener('mouseleave', () => {
      dot.style.transform = '';
      if (!dot.classList.contains('active')) {
        dot.style.background = '';
        dot.style.boxShadow = '';
      } else {
        dot.style.boxShadow = '';
      }
    });
  });
}

/* ==========================================================================
   3. STICKY HEADER ELEVATION ON SCROLL
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
      header.style.borderBottomColor = 'rgba(0, 0, 0, 0.08)';
    } else {
      header.style.boxShadow = 'none';
      header.style.borderBottomColor = 'rgba(0, 0, 0, 0.05)';
    }
  });
}

/* ==========================================================================
   4. SECTION 2: DISCIPLINES INTERACTIVE TAB SWITCHER (OVERTAKE 1:1)
   ========================================================================== */
function initDisciplinesTabs() {
  const tabButtons = document.querySelectorAll('.tab-item-btn');
  const disciplineImage = document.getElementById('disciplineImage');
  const disciplineCaption = document.getElementById('disciplineCaption');

  if (!tabButtons.length || !disciplineImage || !disciplineCaption) return;

  const disciplinesData = [
    {
      image: 'assets/images/feed_instagram_showcase.jpg',
      alt: 'Tata Layout Feed Instagram & Publikasi Media Digital',
      caption: 'Merancang strategi visual publikasi media sosial berdaya pikat tinggi di kelas XI DKV SMKS Koperasi Yogyakarta: dari riset target audiens, kurasi moodboard warna, sketsa manual 1:1, hingga digitalisasi di Adobe Illustrator.'
    },
    {
      image: 'assets/images/materi_sketsa_manual.png',
      alt: 'Penguasaan Vektor Pen Tool & Observasi Objek',
      caption: 'Menerapkan pendekatan scaffolding gradual untuk melatih kepekaan motorik kurva Bezier, mentransformasikan kemampuan siswa dari sekadar menjiplak (tracing) menjadi merekonstruksi bentuk kamera secara mandiri.'
    },
    {
      image: 'assets/images/diferensiasi_creative_class.jpg',
      alt: 'Diferensiasi Pembelajaran Berbasis Gaya Belajar DKV',
      caption: 'Mengakomodasi 11 siswa kinestetik melalui hands-on micro tasks dan 9 siswa visual melalui acuan papan inspirasi, didukung pemutaran musik instrumental yang meningkatkan fokus belajar hingga 85%.'
    },
    {
      image: 'assets/images/takagi_doc_1.png',
      alt: 'Kepemimpinan Vokasi & Pengabdian Sekolah (Karnaval & TAKAGI)',
      caption: 'Menjadi tim juri penilaian estetika karnaval HUT Yogya ke-270 serta bendahara panitia inti Workshop Kampanye Visual & Peluncuran Aplikasi TAKAGI untuk siswa DKV SMKS Koperasi Yogyakarta.'
    }
  ];

  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      if (disciplinesData[index]) {
        disciplineImage.style.opacity = '0.3';
        disciplineImage.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
          disciplineImage.src = disciplinesData[index].image;
          disciplineImage.alt = disciplinesData[index].alt;
          disciplineCaption.textContent = disciplinesData[index].caption;
          disciplineImage.style.opacity = '1';
          disciplineImage.style.transform = 'scale(1)';
        }, 180);
      }
    });
  });
}

/* ==========================================================================
   5. SECTION 3: BENTO CHART BARS INTERACTIVE HOVER
   ========================================================================== */
function initBentoBars() {
  const bars = document.querySelectorAll('.bento-bars-row .chart-bar');
  if (!bars.length) return;

  bars.forEach(bar => {
    bar.addEventListener('mouseenter', () => {
      bar.style.transform = 'scaleY(1.2)';
      if (!bar.classList.contains('pink')) {
        bar.style.backgroundColor = '#9EFC65';
      }
    });

    bar.addEventListener('mouseleave', () => {
      bar.style.transform = '';
      if (!bar.classList.contains('pink')) {
        bar.style.backgroundColor = '';
      }
    });
  });
}

/* ==========================================================================
   6. SECTION 4: STICKY STACKING CARDS DEPTH ENHANCER (FRAMER OVERTAKE PHYSICS)
   ========================================================================== */
function initStackCardsEffect() {
  const cards = document.querySelectorAll('.stack-card-item');
  if (!cards.length) return;

  function updateCardScales() {
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      const nextCard = cards[i + 1];
      if (!nextCard) return;

      const nextRect = nextCard.getBoundingClientRect();
      const nextTopOffset = parseInt(window.getComputedStyle(nextCard).top, 10) || 120;

      if (nextRect.top <= nextTopOffset + 140) {
        const progress = Math.min(Math.max((nextTopOffset + 140 - nextRect.top) / 220, 0), 1);
        const scale = 1 - (progress * 0.04);
        const brightness = 1 - (progress * 0.15);
        card.style.transform = `scale(${scale})`;
        card.style.filter = `brightness(${brightness})`;
      } else {
        card.style.transform = 'scale(1)';
        card.style.filter = 'brightness(1)';
      }
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateCardScales();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateCardScales();
}

/* ==========================================================================
   7. SCROLL REVEAL OBSERVER (FRAMER-STYLE POP UP REVEAL ON SCROLL)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   8. BUTTERY SMOOTH INERTIAL SCROLL ENGINE (FRAMER OVERTAKE PHYSICS)
   ========================================================================== */
function initSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Smooth Gliding for In-Page Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      e.preventDefault();
      const rect = targetElement.getBoundingClientRect();
      const targetOffset = rect.top + window.scrollY - 80;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    });
  });
}

/* ==========================================================================
   9. PPL EXTENSION: CYCLE TABS (SIKLUS 1 - 4)
   ========================================================================== */
function initCycleTabs() {
  const cycleTabs = document.querySelectorAll('.cycle-pill-btn');
  const cyclePanels = document.querySelectorAll('.cycle-panel-content');

  cycleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cycleNum = tab.getAttribute('data-cycle');

      cycleTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      cyclePanels.forEach(panel => {
        if (panel.id === `cycle-panel-${cycleNum}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   10. PPL EXTENSION: MODUL AJAR SLIDE SWITCHER
   ========================================================================== */
function initModulSwitcher() {
  const modulNavItems = document.querySelectorAll('.modul-nav-pill-item');
  const modulStageImg = document.getElementById('modulStageImg');
  const modulStageCaption = document.getElementById('modulStageCaption');

  if (!modulNavItems.length || !modulStageImg) return;

  modulNavItems.forEach(item => {
    item.addEventListener('click', () => {
      modulNavItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const imgSrc = item.getAttribute('data-img');
      const captionText = item.getAttribute('data-caption');

      modulStageImg.style.opacity = '0.3';
      modulStageImg.style.transform = 'scale(0.98)';
      
      setTimeout(() => {
        if (imgSrc) modulStageImg.src = imgSrc;
        if (captionText && modulStageCaption) modulStageCaption.innerHTML = captionText;
        modulStageImg.style.opacity = '1';
        modulStageImg.style.transform = 'scale(1)';
      }, 160);
    });
  });
}

/* ==========================================================================
   11. PPL EXTENSION: GALLERY & SLOT FOTO CATEGORY FILTER
   ========================================================================== */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-pill');
  const galleryItems = document.querySelectorAll('.gallery-item-wrapper');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   12. PPL EXTENSION: LIGHTBOX MODAL (SUPPORTS PHOTOS & SLOT FOTO DETAILS)
   ========================================================================== */
function initLightbox() {
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');

  if (!lightboxModal || !lightboxImg || !lightboxCaption) return;

  const openLightbox = (src, title, desc) => {
    lightboxImg.src = src;
    lightboxImg.style.display = src ? 'block' : 'none';
    lightboxCaption.innerHTML = `<h4>${title || 'Dokumentasi PPL'}</h4><p>${desc || ''}</p>`;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Attach to Gallery Items with Images
  document.querySelectorAll('.gallery-item-wrapper:not(.is-slot)').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h4')?.textContent || '';
      const desc = item.querySelector('p')?.textContent || '';
      if (img) openLightbox(img.src, title, desc);
    });
  });

  // Attach to Slot Foto boxes for helpful guidance popup
  document.querySelectorAll('.photo-slot-box').forEach(slot => {
    slot.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = slot.querySelector('.photo-slot-title')?.textContent || 'Slot Foto';
      const desc = slot.querySelector('.photo-slot-desc')?.textContent || '';
      const spec = slot.querySelector('.photo-slot-spec')?.textContent || '';
      
      openLightbox(
        '', 
        `📷 ${title}`, 
        `<strong>Status:</strong> Slot foto ini disediakan untuk menampung dokumentasi visual yang belum terpasang.<br><br>${desc}<br><br><span style="color:#9EFC65; font-family:monospace;">Rekomendasi Spesifikasi: ${spec}</span>`
      );
    });
  });
}

/* ==========================================================================
   13. PPL EXTENSION: LIVE DOCUMENT SEARCH (15 BERKAS PDF)
   ========================================================================== */
function initDocSearch() {
  const docSearchInput = document.getElementById('docSearchInput');
  const docCards = document.querySelectorAll('.doc-card-overtake');

  if (!docSearchInput || !docCards.length) return;

  docSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    docCards.forEach(card => {
      const titleData = card.getAttribute('data-title') ? card.getAttribute('data-title').toLowerCase() : '';
      const cardText = card.textContent.toLowerCase();

      if (query === '' || titleData.includes(query) || cardText.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
