/**
 * Random Image Gallery — JavaScript logic
 * Displays a random fullscreen image on every page load.
 * Images are embedded directly to work without CORS issues.
 */

// ── Embedded image data (fallback + primary source) ──
const FALLBACK_IMAGES = [
  {"id":1,"url":"https://picsum.photos/id/10/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":11,"url":"https://picsum.photos/id/11/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":14,"url":"https://picsum.photos/id/14/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":16,"url":"https://picsum.photos/id/16/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":18,"url":"https://picsum.photos/id/18/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":20,"url":"https://picsum.photos/id/20/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":21,"url":"https://picsum.photos/id/21/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":22,"url":"https://picsum.photos/id/22/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":23,"url":"https://picsum.photos/id/23/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":24,"url":"https://picsum.photos/id/24/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":25,"url":"https://picsum.photos/id/25/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":26,"url":"https://picsum.photos/id/26/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":27,"url":"https://picsum.photos/id/27/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":28,"url":"https://picsum.photos/id/28/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":29,"url":"https://picsum.photos/id/29/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":30,"url":"https://picsum.photos/id/30/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":31,"url":"https://picsum.photos/id/31/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":32,"url":"https://picsum.photos/id/32/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":33,"url":"https://picsum.photos/id/33/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":34,"url":"https://picsum.photos/id/34/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":35,"url":"https://picsum.photos/id/35/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":36,"url":"https://picsum.photos/id/36/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":37,"url":"https://picsum.photos/id/37/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":38,"url":"https://picsum.photos/id/38/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":39,"url":"https://picsum.photos/id/39/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":40,"url":"https://picsum.photos/id/40/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":41,"url":"https://picsum.photos/id/41/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":42,"url":"https://picsum.photos/id/42/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":43,"url":"https://picsum.photos/id/43/800/600","author":"Paul Jarvis","width":800,"height":600},
  {"id":44,"url":"https://picsum.photos/id/44/800/600","author":"Paul Jarvis","width":800,"height":600}
];

const IMAGES_API_URL = './api/images.json';

// DOM elements
const randomImage = document.getElementById('random-image');
const loadingEl = document.getElementById('loading');
const imageId = document.getElementById('image-id');
const imageAuthor = document.getElementById('image-author');
const imageDimensions = document.getElementById('image-dimensions');
const newImageBtn = document.getElementById('new-image-btn');

const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const fullscreenImage = document.getElementById('fullscreen-image');
const fullscreenCloseBtn = document.getElementById('fullscreen-close');

let imagesCache = [];

/**
 * Fetch all images from the JSON API (backup), fallback to embedded data
 */
async function fetchImages() {
  try {
    const response = await fetch(IMAGES_API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data.images;
  } catch {
    // If fetch fails (CORS, offline, etc.), use embedded images
    return FALLBACK_IMAGES;
  }
}

/**
 * Get a random image from the cache
 */
function getRandomImage() {
  if (imagesCache.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * imagesCache.length);
  return imagesCache[randomIndex];
}

/**
 * Display a single image object in the UI card
 */
function displayImage(image) {
  if (!image) {
    loadingEl.textContent = 'No images available.';
    loadingEl.style.display = 'block';
    randomImage.style.display = 'none';
    return;
  }

  randomImage.src = image.url;
  randomImage.alt = `Photo by ${image.author}`;
  randomImage.style.display = 'block';
  loadingEl.style.display = 'none';

  imageId.innerHTML = `ID: <code>${image.id}</code>`;
  imageAuthor.innerHTML = `Author: <code>${image.author}</code>`;
  imageDimensions.innerHTML = `Dimensions: <code>${image.width} × ${image.height}</code>`;
}

/**
 * Open the fullscreen overlay with a given image
 */
function openFullscreen(image) {
  if (!image) return;

  if (fullscreenImage) {
    fullscreenImage.src = image.url;
    fullscreenImage.alt = `Photo by ${image.author}`;
  }

  if (fullscreenOverlay) {
    fullscreenOverlay.hidden = false;
  }

  document.body.classList.add('overlay-active');
}

/**
 * Close the fullscreen overlay
 */
function closeFullscreen() {
  if (fullscreenOverlay) {
    fullscreenOverlay.hidden = true;
  }

  document.body.classList.remove('overlay-active');
}

/**
 * Load a new random image
 */
async function loadRandomImage() {
  loadingEl.textContent = 'Loading random image...';
  loadingEl.style.display = 'block';
  randomImage.style.display = 'none';

  try {
    // Fetch images if not cached
    if (imagesCache.length === 0) {
      imagesCache = await fetchImages();
    }

    const image = getRandomImage();
    displayImage(image);
    openFullscreen(image);
  } catch (error) {
    console.error('Failed to load image:', error);
    loadingEl.textContent = `Error loading image: ${error.message}`;
    loadingEl.style.display = 'block';
  }
}

/**
 * Handle the "random" API endpoint via URL hash
 * Usage: index.html#random — returns JSON of a random image
 */
function handleRandomApiEndpoint() {
  const hash = window.location.hash;
  if (hash === '#random' && imagesCache.length > 0) {
    const image = getRandomImage();
    document.body.textContent = JSON.stringify(image, null, 2);
    document.body.style.fontFamily = 'monospace';
    document.body.style.whiteSpace = 'pre';
    document.body.style.padding = '2rem';
    document.body.style.background = '#1e1e1e';
    document.body.style.color = '#d4d4d4';
    return true;
  }
  return false;
}

// ----- Initialisation -----

(async function init() {
  try {
    // Step 1: Use embedded images FIRST for instant display
    imagesCache = FALLBACK_IMAGES;

    // Step 2: Check if accessed as API endpoint
    if (handleRandomApiEndpoint()) {
      return;
    }

    // Step 3: Show random fullscreen image IMMEDIATELY (no fetch needed)
    const image = getRandomImage();
    displayImage(image);
    openFullscreen(image);

    // Step 4: In the background, try to fetch updated JSON (silent — uses embedded if fails)
    try {
      const freshImages = await fetchImages();
      if (freshImages && freshImages.length > 0) {
        imagesCache = freshImages;
      }
    } catch {
      // Keep using embedded images — already displayed
    }
  } catch (error) {
    console.error('Initialisation error:', error);
    if (loadingEl) {
      loadingEl.textContent = `Failed to load gallery: ${error.message}`;
      loadingEl.style.display = 'block';
    }
  }
})();

// Event listener for the "New Random Image" button
if (newImageBtn) {
  newImageBtn.addEventListener('click', loadRandomImage);
}

// Fullscreen close behavior
if (fullscreenCloseBtn) {
  fullscreenCloseBtn.addEventListener('click', closeFullscreen);
}

if (fullscreenOverlay) {
  fullscreenOverlay.addEventListener('click', (e) => {
    if (e.target === fullscreenOverlay) {
      closeFullscreen();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeFullscreen();
  }
});