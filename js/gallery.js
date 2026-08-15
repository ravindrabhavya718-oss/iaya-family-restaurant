/**
 * Gallery Rendering, Category Filtering, and Lightbox Functionality
 */

let currentLightboxIndex = 0;
let filteredGalleryItems = [];

function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');

  if (!galleryGrid || typeof GALLERY_DATA === 'undefined') return;

  filteredGalleryItems = [...GALLERY_DATA];
  renderGallery(filteredGalleryItems);

  // Category filter handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');
      if (filterCategory === 'all') {
        filteredGalleryItems = [...GALLERY_DATA];
      } else {
        filteredGalleryItems = GALLERY_DATA.filter(item => item.category === filterCategory);
      }
      renderGallery(filteredGalleryItems);
    });
  });

  // Lightbox key listener
  document.addEventListener('keydown', handleLightboxKeyboard);
}

function renderGallery(items) {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  if (items.length === 0) {
    galleryGrid.innerHTML = `
      <div class="gallery-empty">
        <p>No photos available in this category.</p>
      </div>
    `;
    return;
  }

  galleryGrid.innerHTML = items.map((item, index) => `
    <div class="gallery-item-card" data-index="${index}">
      <div class="gallery-img-wrapper" onclick="openLightbox(${index})">
        <img src="${item.image}" alt="${item.title}" loading="lazy" class="gallery-img">
        <div class="gallery-overlay">
          <div class="gallery-overlay-badge">${item.categoryLabel}</div>
          <h3 class="gallery-overlay-title">${item.title}</h3>
          <p class="gallery-overlay-caption">${item.caption}</p>
          <button class="gallery-view-btn" aria-label="View photo in full screen">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  updateLightboxContent();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function nextLightboxImage() {
  if (filteredGalleryItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % filteredGalleryItems.length;
  updateLightboxContent();
}

function prevLightboxImage() {
  if (filteredGalleryItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + filteredGalleryItems.length) % filteredGalleryItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = filteredGalleryItems[currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById('lightbox-image');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');
  const counterEl = document.getElementById('lightbox-counter');
  const categoryEl = document.getElementById('lightbox-category');

  if (imgEl) {
    imgEl.src = item.image;
    imgEl.alt = item.title;
  }
  if (titleEl) titleEl.textContent = item.title;
  if (captionEl) captionEl.textContent = item.caption;
  if (categoryEl) categoryEl.textContent = item.categoryLabel;
  if (counterEl) {
    counterEl.textContent = `${currentLightboxIndex + 1} / ${filteredGalleryItems.length}`;
  }
}

function handleLightboxKeyboard(e) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal || !modal.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextLightboxImage();
  if (e.key === 'ArrowLeft') prevLightboxImage();
}

document.addEventListener('DOMContentLoaded', initGallery);
