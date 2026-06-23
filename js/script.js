/**
 * KVGCE Random Image Gallery — pure fullscreen images
 * Shows a random fullscreen image on every page load.
 * Images are embedded to work with no server needed.
 */

const IMAGES = [
  {"url":"https://picsum.photos/id/10/1920/1080","author":"Paul Jarvis","id":10,"caption":"Mountain landscape with lake"},
  {"url":"https://picsum.photos/id/11/1920/1080","author":"Paul Jarvis","id":11,"caption":"Beach shore at sunset"},
  {"url":"https://picsum.photos/id/14/1920/1080","author":"Paul Jarvis","id":14,"caption":"Rocky shoreline"},
  {"url":"https://picsum.photos/id/16/1920/1080","author":"Paul Jarvis","id":16,"caption":"Forest path with green moss"},
  {"url":"https://picsum.photos/id/18/1920/1080","author":"Paul Jarvis","id":18,"caption":"Calm ocean waves"},
  {"url":"https://picsum.photos/id/20/1920/1080","author":"Paul Jarvis","id":20,"caption":"Bird's eye view of coastline"},
  {"url":"https://picsum.photos/id/21/1920/1080","author":"Paul Jarvis","id":21,"caption":"Vintage building architecture"},
  {"url":"https://picsum.photos/id/22/1920/1080","author":"Paul Jarvis","id":22,"caption":"Bridge over river"},
  {"url":"https://picsum.photos/id/23/1920/1080","author":"Paul Jarvis","id":23,"caption":"Mountain peaks at dawn"},
  {"url":"https://picsum.photos/id/24/1920/1080","author":"Paul Jarvis","id":24,"caption":"Autumn forest stream"},
  {"url":"https://picsum.photos/id/25/1920/1080","author":"Paul Jarvis","id":25,"caption":"Coastal cliff view"},
  {"url":"https://picsum.photos/id/26/1920/1080","author":"Paul Jarvis","id":26,"caption":"Desert dunes at sunset"},
  {"url":"https://picsum.photos/id/27/1920/1080","author":"Paul Jarvis","id":27,"caption":"Misty mountain valley"},
  {"url":"https://picsum.photos/id/28/1920/1080","author":"Paul Jarvis","id":28,"caption":"City skyline at dusk"},
  {"url":"https://picsum.photos/id/29/1920/1080","author":"Paul Jarvis","id":29,"caption":"Waterfall in tropical forest"},
  {"url":"https://picsum.photos/id/30/1920/1080","author":"Paul Jarvis","id":30,"caption":"Red brick pathway"},
  {"url":"https://picsum.photos/id/31/1920/1080","author":"Paul Jarvis","id":31,"caption":"Lavender field panorama"},
  {"url":"https://picsum.photos/id/32/1920/1080","author":"Paul Jarvis","id":32,"caption":"Mountain cabin in woods"},
  {"url":"https://picsum.photos/id/33/1920/1080","author":"Paul Jarvis","id":33,"caption":"Sunset over river delta"},
  {"url":"https://picsum.photos/id/34/1920/1080","author":"Paul Jarvis","id":34,"caption":"Industrial harbour at night"},
  {"url":"https://picsum.photos/id/35/1920/1080","author":"Paul Jarvis","id":35,"caption":"Ancient temple ruins"},
  {"url":"https://picsum.photos/id/36/1920/1080","author":"Paul Jarvis","id":36,"caption":"Foggy forest road"},
  {"url":"https://picsum.photos/id/37/1920/1080","author":"Paul Jarvis","id":37,"caption":"Terrace farmland hills"},
  {"url":"https://picsum.photos/id/38/1920/1080","author":"Paul Jarvis","id":38,"caption":"Snow-capped mountain range"},
  {"url":"https://picsum.photos/id/39/1920/1080","author":"Paul Jarvis","id":39,"caption":"Lake reflection at dawn"},
  {"url":"https://picsum.photos/id/40/1920/1080","author":"Paul Jarvis","id":40,"caption":"Cherry blossom pathway"},
  {"url":"https://picsum.photos/id/41/1920/1080","author":"Paul Jarvis","id":41,"caption":"Ocean pier at golden hour"},
  {"url":"https://picsum.photos/id/42/1920/1080","author":"Paul Jarvis","id":42,"caption":"Tropical beach palm trees"},
  {"url":"https://picsum.photos/id/43/1920/1080","author":"Paul Jarvis","id":43,"caption":"Mountain waterfall close-up"},
  {"url":"https://picsum.photos/id/44/1920/1080","author":"Paul Jarvis","id":44,"caption":"Rolling green hills"}
];

const img = document.getElementById('fullscreen-image');
const captionEl = document.getElementById('image-caption');
const authorEl = document.getElementById('image-author');
const idEl = document.getElementById('image-id');

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * IMAGES.length);
  return IMAGES[randomIndex];
}

function displayImage(image) {
  img.src = image.url;
  img.alt = `Photo by ${image.author}`;
  if (captionEl) captionEl.textContent = image.caption;
  if (authorEl) authorEl.textContent = `Photo by ${image.author}`;
  if (idEl) idEl.textContent = `#${image.id}`;
}

// Show a random fullscreen image immediately
const image = getRandomImage();
displayImage(image);