# Maverick's Website 🐕

A sleek, modern photo gallery website for Maverick the dog!

## Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🖼️ Beautiful grid gallery layout
- 🔍 Lightbox viewer with keyboard navigation
- ⚡ Fast loading
- 🎨 Modern, clean design
- ✨ **Super simple - no API keys, no cloud services!**

## Quick Start (3 Easy Steps!)

### Step 1: Add Your Photos

1. Save Maverick's best photos from your iPhone to your computer
2. Put them in the `images` folder (rename them if you want!)
3. That's it!

### Step 2: Update Config

Open `config.js` and add your photo filenames:

```javascript
const MAVERICK_PHOTOS = [
    'maverick-1.jpg',
    'maverick-2.jpg',
    'maverick-beach.jpg',
    // ... add more!
];
```

### Step 3: Deploy to the Web

**Option A: GitHub Pages (Free & Easy)**
1. Push to GitHub
2. Go to Settings → Pages
3. Select your branch
4. Done! Your site is live at `https://yourusername.github.io/Maverick-/`

**Option B: Netlify (Fastest)**
1. Go to https://app.netlify.com/drop
2. Drag the entire folder onto the page
3. Get instant URL!

**Option C: Any other host**
- Just upload all the files - no build process needed!

## Testing Locally

Open `index.html` in your browser, or run:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`

## Customization

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
}
```

### Change Title/Subtitle
Edit `index.html`:
```html
<h1 class="hero-title">Maverick</h1>
<p class="hero-subtitle">Living his best life, one adventure at a time</p>
```

## Structure

```
Maverick-/
├── index.html          # Main page
├── style.css           # Styling
├── app.js              # Gallery functionality
├── config.js           # Photo list (edit this!)
├── images/             # Put your photos here!
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   └── ...
└── README.md
```

## Features in Detail

### Lightbox Navigation
- Click any photo to open full-screen view
- Use arrow keys (← →) to navigate
- Press ESC to close
- Click background to close

### Responsive Design
- Desktop: Multi-column grid
- Tablet: 2-column grid
- Mobile: Single column

## License

Personal use - Maverick's photos are copyrighted to his owner! 🐾
