/**
 * KVGCE Random Image Gallery — pure fullscreen images
 * Shows a random fullscreen image on every page load.
 * Images are embedded to work with no server needed.
 */

const IMAGES = [
  {"url":"https://picsum.photos/id/1015/1920/1080","author":"Harshith D S","caption":"Mountain Lake Vista"},
  {"url":"https://picsum.photos/id/1018/1920/1080","author":"Harshith D S","caption":"Misty Mountain Range"},
  {"url":"https://picsum.photos/id/1016/1920/1080","author":"Harshith D S","caption":"Road Through Autumn Woods"},
  {"url":"https://picsum.photos/id/1011/1920/1080","author":"Harshith D S","caption":"Man with Canoe at Sunset"},
  {"url":"https://picsum.photos/id/1012/1920/1080","author":"Harshith D S","caption":"Bird on Fountain Edge"},
  {"url":"https://picsum.photos/id/1013/1920/1080","author":"Harshith D S","caption":"Mountain Fisherman"},
  {"url":"https://picsum.photos/id/1014/1920/1080","author":"Harshith D S","caption":"Coastal Pine Tree"},
  {"url":"https://picsum.photos/id/1019/1920/1080","author":"Harshith D S","caption":"Alpine Lake Reflection"},
  {"url":"https://picsum.photos/id/1020/1920/1080","author":"Harshith D S","caption":"Dog on Boat"},
  {"url":"https://picsum.photos/id/1021/1920/1080","author":"Harshith D S","caption":"Black and White Flower"},
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