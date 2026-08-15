/**
 * Jaya Restaurant (జయ రెస్టారెంట్) - Main Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMenuSection();
  initModals();
  initToast();
  initScrollAnimations();
  initCurrentStatus();
});

/* ----------------------------------------------------
   1. Navbar & Mobile Menu Controller
----------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav-drawer');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky navbar shadow and compact mode on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveNavLink();
  }, { passive: true });

  // Mobile menu open / close
  function toggleMobileMenu(open) {
    const isOpen = open !== undefined ? open : !mobileNav.classList.contains('active');
    if (isOpen) {
      mobileNav.classList.add('active');
      mobileBackdrop.classList.add('active');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNav.classList.remove('active');
      mobileBackdrop.classList.remove('active');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => toggleMobileMenu(false));
  }

  // Close mobile nav on click of any link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  });
}

function highlightActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPosition >= top && scrollPosition < top + height) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

/* ----------------------------------------------------
   2. Menu Section & Live Filter Controller
----------------------------------------------------- */
let activeMenuCategory = 'all';
let searchMenuQuery = '';

function initMenuSection() {
  const menuGrid = document.getElementById('menu-items-grid');
  const categoryTabs = document.querySelectorAll('.menu-tab-btn');
  const searchInput = document.getElementById('menu-search-input');
  const searchClear = document.getElementById('menu-search-clear');

  if (!menuGrid || typeof MENU_DATA === 'undefined') return;

  renderMenuItems();

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeMenuCategory = tab.getAttribute('data-category');
      renderMenuItems();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchMenuQuery = e.target.value.trim().toLowerCase();
      if (searchClear) {
        searchClear.style.display = searchMenuQuery.length > 0 ? 'flex' : 'none';
      }
      renderMenuItems();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchMenuQuery = '';
      searchClear.style.display = 'none';
      renderMenuItems();
      searchInput.focus();
    });
  }
}

function renderMenuItems() {
  const menuGrid = document.getElementById('menu-items-grid');
  const menuCountEl = document.getElementById('menu-results-count');
  if (!menuGrid) return;

  let items = MENU_DATA;

  // Filter by category
  if (activeMenuCategory !== 'all') {
    items = items.filter(item => item.category === activeMenuCategory);
  }

  // Filter by search query
  if (searchMenuQuery) {
    items = items.filter(item => {
      const matchName = item.name.toLowerCase().includes(searchMenuQuery);
      const matchTelugu = item.teluguName.toLowerCase().includes(searchMenuQuery);
      const matchDesc = item.description.toLowerCase().includes(searchMenuQuery);
      const matchCategory = item.categoryLabel.toLowerCase().includes(searchMenuQuery);
      return matchName || matchTelugu || matchDesc || matchCategory;
    });
  }

  if (menuCountEl) {
    menuCountEl.textContent = `Showing ${items.length} dishes`;
  }

  if (items.length === 0) {
    menuGrid.innerHTML = `
      <div class="menu-empty-state">
        <div class="empty-icon">🍽️</div>
        <h3>No dishes matched your search</h3>
        <p>Try searching for "Dosa", "Thali", "Idli", "Grape Juice", or browse categories above.</p>
        <button class="btn btn-outline" onclick="resetMenuFilter()">Reset Filters</button>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = items.map(item => `
    <div class="menu-item-card" data-category="${item.category}">
      <div class="menu-item-image-holder">
        <img src="${item.image}" alt="${item.name} - Jaya Restaurant" loading="lazy" class="menu-item-img">
        <span class="dietary-badge-veg" title="100% Pure Vegetarian">
          <span class="veg-dot"></span>
        </span>
        ${item.tag ? `<span class="menu-item-tag">${item.tag}</span>` : ''}
      </div>
      <div class="menu-item-body">
        <div class="menu-item-header">
          <div class="menu-title-wrap">
            <h3 class="menu-item-name">${item.name}</h3>
            <span class="menu-item-telugu">${item.teluguName}</span>
          </div>
          <div class="menu-item-price-wrap">
            <span class="menu-item-price" title="Official restaurant tariff available on-site">${item.price}</span>
            <span class="price-subtext">Tariff Inquire</span>
          </div>
        </div>
        <p class="menu-item-desc">${item.description}</p>
        <div class="menu-item-footer">
          <div class="dietary-pills">
            ${(item.dietary || []).map(d => `<span class="diet-pill">${d}</span>`).join('')}
          </div>
          <a href="tel:08842372314" class="menu-order-btn" title="Call restaurant for takeaway or queries">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Order / Ask</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

window.resetMenuFilter = function() {
  const searchInput = document.getElementById('menu-search-input');
  const searchClear = document.getElementById('menu-search-clear');
  const categoryTabs = document.querySelectorAll('.menu-tab-btn');

  if (searchInput) searchInput.value = '';
  if (searchClear) searchClear.style.display = 'none';
  searchMenuQuery = '';
  activeMenuCategory = 'all';

  categoryTabs.forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-category') === 'all');
  });

  renderMenuItems();
};

/* ----------------------------------------------------
   3. Modals (Download Menu, Schedule, etc.)
----------------------------------------------------- */
function initModals() {
  // Download Menu Modal
  const downloadBtns = document.querySelectorAll('.trigger-download-modal');
  const downloadModal = document.getElementById('download-menu-modal');
  const scheduleModal = document.getElementById('schedule-modal');
  const scheduleTriggers = document.querySelectorAll('.trigger-schedule-modal');
  const modalCloses = document.querySelectorAll('.modal-close, .modal-backdrop');

  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (downloadModal) {
        downloadModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  scheduleTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (scheduleModal) {
        scheduleModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalCloses.forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.app-modal').forEach(m => m.classList.remove('active'));
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.app-modal').forEach(m => m.classList.remove('active'));
      document.body.style.overflow = '';
    }
  });
}

/* ----------------------------------------------------
   4. Current Live Status & Hours
----------------------------------------------------- */
function initCurrentStatus() {
  const statusBadge = document.getElementById('live-status-pill');
  if (!statusBadge) return;

  const now = new Date();
  const currentHour = now.getHours();
  // Standard restaurant operating hours (approx 7:00 AM - 10:00 PM)
  const isOpen = currentHour >= 7 && currentHour < 22;

  if (isOpen) {
    statusBadge.className = 'status-pill status-open';
    statusBadge.innerHTML = '<span class="status-indicator"></span> Open Now · Until 10:00 PM';
  } else {
    statusBadge.className = 'status-pill status-closed';
    statusBadge.innerHTML = '<span class="status-indicator"></span> Currently Closed · Opens Tomorrow 7:00 AM';
  }
}

/* ----------------------------------------------------
   5. Copy Address & Toast Notifications
----------------------------------------------------- */
function initToast() {
  const copyBtns = document.querySelectorAll('.copy-address-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const addressText = "Jaya Restaurant, Hotel Jaya Residency, Vallabhai St, Surya Rao Peta, Kakinada, Andhra Pradesh 533001";
      navigator.clipboard.writeText(addressText).then(() => {
        showToast("Address copied to clipboard!");
      }).catch(() => {
        showToast("Address: Hotel Jaya Residency, Surya Rao Peta, Kakinada");
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ----------------------------------------------------
   6. Scroll Animations via IntersectionObserver
----------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}
