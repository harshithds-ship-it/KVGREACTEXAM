# 🎲 KVGCE Random Image Gallery

A random fullscreen image gallery for **KVG College of Engineering (KVGCE)**. Every refresh shows a random scenic image with caption, author, and ID overlayed at the bottom.

## 🚀 Live Demo

```
https://harshithds-ship-it.github.io/KVGREACTEXAM/
```

## 📁 Project Structure

```
KVGREACTEXAM/
├── index.html          # Main page
├── css/
│   └── style.css       # Styles
├── js/
│   └── script.js       # Embedded images & display logic
├── api/
│   └── images.json     # Image data (static JSON backup)
└── README.md
```

## ✨ Features

- **Fullscreen random image** on every page load/refresh
- No server required — works directly from `file://` or any static host
- Images embedded directly in JavaScript — no fetch/CORS issues
- Overlay shows **Image ID**, **Caption**, and **Author** at the bottom
- 30 high-quality landscape images at 1920×1080

## 🔧 Local Development

Run with any static file server:

```bash
# Using Python
cd KVGREACTEXAM
python -m http.server 8000

# Using Node.js
npx serve KVGREACTEXAM
```

Then open **http://localhost:8000** in your browser.

## 🖼️ Image Source

Images are sourced from [Picsum Photos](https://picsum.photos).

## 📄 License

MIT — KVG College of Engineering