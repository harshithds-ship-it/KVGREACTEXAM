# 🎲 Random Image Gallery

A **GitHub Pages** static site that displays a random image every time you visit. It includes a built-in JSON API that serves random image data.

## 🚀 Live Demo

Once deployed to GitHub Pages, your site will be available at:
```
https://<your-username>.github.io/random-image-gallery/
```

## 📁 Project Structure

```
random-image-gallery/
├── index.html          # Main page
├── css/
│   └── style.css       # Styles
├── js/
│   └── script.js       # Fetch & display logic + hash-based API
├── api/
│   └── images.json     # Image data "API" (static JSON)
└── README.md
```

## 🌐 API Endpoints

Since GitHub Pages only serves static files, the "API" is implemented via:

| Endpoint | Description | How to access |
|---|---|---|
| `/api/images.json` | Returns **all** image metadata as JSON | `https://<user>.github.io/random-image-gallery/api/images.json` |
| `/api/images/random` | Returns **one random** image as JSON | `https://<user>.github.io/random-image-gallery/#random` (hash-based) |

### Random Image JSON Response Example

Access `index.html#random` to get:
```json
{
  "id": 23,
  "url": "https://picsum.photos/id/23/800/600",
  "author": "Paul Jarvis",
  "width": 800,
  "height": 600,
  "download_url": "https://picsum.photos/id/23/800/600"
}
```

## 🔧 Local Development

You can run the site locally with any static file server:

```bash
# Using Python
cd random-image-gallery
python -m http.server 8000

# Using Node.js (npx)
npx serve random-image-gallery
```

Then open `http://localhost:8000` in your browser.

## 📦 Deploy to GitHub Pages

### Option 1: Deploy from `/docs` folder

1. Copy the entire `random-image-gallery` folder into your repository
2. Rename it to `docs`
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch**
5. Branch: `main`, folder: `/docs`
6. Click **Save**

### Option 2: Deploy from root

1. Copy all files inside `random-image-gallery/` to the root of your repository
2. Go to **Settings → Pages**
3. Under "Source", select **Deploy from a branch**
4. Branch: `main`, folder: `/ (root)`
5. Click **Save**

## 🖼️ Image Source

All images are sourced from [Picsum Photos](https://picsum.photos) — the Lorem Ipsum of photography.

## 📄 License

MIT