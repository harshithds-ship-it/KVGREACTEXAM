/**
 * Random Image Gallery — pure fullscreen images
 * Shows a random fullscreen image on every page load.
 * Images are embedded to work with no server needed.
 */

const IMAGES = [
  {"url":"https://picsum.photos/1920/1080?random","author":"Harshith D S","caption":"KVG College of Engineering, Sullia"},
];

const img = document.getElementById('fullscreen-image');
const captionEl = document.getElementById('image-caption');
const authorEl = document.getElementById('image-author');

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * IMAGES.length);
  return IMAGES[randomIndex];
}

function displayImage(image) {
  img.src = image.url;
  img.alt = `Photo by ${image.author}`;
  if (captionEl) captionEl.textContent = image.caption;
  if (authorEl) authorEl.textContent = `Photo by ${image.author}`;
}

// Show a random fullscreen image immediately
const image = getRandomImage();
displayImage(image);