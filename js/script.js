/**
 * Random Image Gallery — pure fullscreen images
 * Shows a random fullscreen image on every page load.
 * Images are embedded to work with no server needed.
 */

const IMAGES = [
  {"url":"https://picsum.photos/id/10/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/11/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/14/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/16/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/18/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/20/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/21/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/22/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/23/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/24/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/25/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/26/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/27/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/28/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/29/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/30/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/31/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/32/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/33/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/34/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/35/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/36/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/37/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/38/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/39/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/40/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/41/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/42/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/43/1920/1080","author":"Paul Jarvis"},
  {"url":"https://picsum.photos/id/44/1920/1080","author":"Paul Jarvis"}
];

const img = document.getElementById('fullscreen-image');

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * IMAGES.length);
  return IMAGES[randomIndex];
}

// Show a random fullscreen image immediately
const image = getRandomImage();
img.src = image.url;
img.alt = `Photo by ${image.author}`;