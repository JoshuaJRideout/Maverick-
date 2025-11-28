# Maverick's Website 🐕

A sleek, modern photo gallery website for Maverick, powered by Cloudflare Images.

## Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🖼️ Beautiful grid gallery layout
- 🔍 Lightbox viewer with keyboard navigation
- ⚡ Fast loading with Cloudflare CDN
- 🎨 Modern, clean design

## Quick Start

### 1. Upload Photos to Cloudflare Images

**🎉 EASIEST METHOD: Use the Built-in Upload Page!**

Simply open `upload.html` in your browser (or visit it on your deployed site) and follow the simple 3-step process:
1. Enter your Cloudflare API token (one-time setup)
2. Select and upload Maverick's photos
3. Done! Photos automatically appear in the gallery

**Getting your API Token:**
1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use "Edit Cloudflare Images" template
4. Copy the token and paste it in the upload page

---

**Alternative Methods:**

#### Option A: Upload via Cloudflare Dashboard
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Images** section
3. Click **Upload Images**
4. Select your best photos of Maverick
5. Copy each image ID after upload

#### Option B: Upload via Command-Line Script
1. Get your Cloudflare API Token:
   - Go to https://dash.cloudflare.com/profile/api-tokens
   - Click "Create Token"
   - Use "Edit Cloudflare Images" template
   - Copy the token

2. Set the token as environment variable:
   ```bash
   export CLOUDFLARE_API_TOKEN="your-api-token-here"
   ```

3. Upload images:
   ```bash
   node upload-image.js path/to/maverick-photo.jpg
   ```

4. The script will output the image ID - copy it!

#### Option C: Upload via API (Advanced)
```bash
curl -X POST "https://api.cloudflare.com/client/v4/accounts/9f9fcbb3e4b19d0e0e3f2731c423c04f/images/v1" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -F "file=@/path/to/image.jpg"
```

### 2. Add Image IDs to Configuration (Only for Option A/B/C)

**Note:** If you used `upload.html`, skip this step - images are automatically configured!

For manual uploads, open `config.js` and add your uploaded image IDs:

```javascript
const MAVERICK_PHOTOS = [
    'abc123def456',
    'xyz789ghi012',
    'another-image-id',
];
```

### 3. View the Website

Simply open `index.html` in your web browser, or deploy to any hosting service!

## Deployment Options

### GitHub Pages
1. Push this repo to GitHub
2. Go to Settings > Pages
3. Select branch and save
4. Your site will be live at `https://yourusername.github.io/Maverick-/`

### Cloudflare Pages
1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your repository
4. Deploy!

### Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site is live instantly!

### Local Preview
Just open `index.html` in any web browser - no server needed!

## Cloudflare Configuration

Your Cloudflare Images setup:
- **Account ID**: `9f9fcbb3e4b19d0e0e3f2731c423c04f`
- **Hash**: `PTOr_s5zn8KwRmaOPqNskw`
- **URL Pattern**: `https://imagedelivery.net/PTOr_s5zn8KwRmaOPqNskw/<image_id>/public`

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

### Image Variants
Cloudflare Images supports different variants (sizes). Edit in `config.js`:
```javascript
variant: 'public', // or 'thumbnail', 'original', etc.
```

## Features in Detail

### Lightbox Navigation
- Click any photo to open full-screen view
- Use arrow keys (← →) to navigate
- Press ESC to close
- Click background to close
- Mobile swipe support

### Responsive Design
- Desktop: Multi-column grid
- Tablet: 2-column grid
- Mobile: Single column

### Performance
- Lazy loading images
- Optimized Cloudflare CDN delivery
- Responsive images for all screen sizes

## Support

For issues or questions:
- Cloudflare Images Docs: https://developers.cloudflare.com/images/
- Cloudflare Dashboard: https://dash.cloudflare.com/

## License

Personal use - Maverick's photos are copyrighted to his owner! 🐾
