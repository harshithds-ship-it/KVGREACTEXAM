/**
 * Random Image Gallery — JavaScript logic
 * Fetches from the static API (api/images.json) and displays a random image.
 * The "API" is client-side since GitHub Pages only serves static files.
 */

const IMAGES_API_URL = './api/images.json';

// DOM elements
const randomImage = document.getElementById('random-image');
const loadingEl = document.getElementById('loading');
const imageId = document.getElementById('image-id');
const imageAuthor = document.getElementById('image-author');
const imageDimensions = document.getElementById('image-dimensions');
const newImageBtn = document.getElementById('new-image-btn');

let imagesCache = [];

/**
 * Fetch all images from the JSON API
 */
async function fetchImages() {
    const response = await fetch(IMAGES_API_URL);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.images;
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
 * Display a single image object in the UI
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
        return true; // API mode active
    }
    return false;
}

// ----- Initialisation -----

(async function init() {
    try {
        imagesCache = await fetchImages();

        // Check if accessed as API endpoint
        if (handleRandomApiEndpoint()) {
            return;
        }

        // Normal page load: show random image
        const image = getRandomImage();
        displayImage(image);
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