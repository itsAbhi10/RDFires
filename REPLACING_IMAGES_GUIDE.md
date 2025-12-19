# Guide: Replacing SVG Background Images with Real Photos

## Overview

The hero carousel is currently using professional SVG illustrations as placeholder background images. This guide explains how to replace them with real photographs or actual images from your company.

## Current SVG Images

| Slide | File | Current Content |
|-------|------|---|
| 1 | `firefighters.svg` | Firefighters silhouettes + water spray |
| 2 | `fire-cylinders.svg` | Fire extinguisher cylinders display |
| 3 | `gas-suppression.svg` | Ceiling-mounted gas suppression system |
| 4 | `fire-control-room.svg` | Fire monitoring station with controls |

## Step-by-Step Replacement Guide

### Step 1: Prepare Your Images

1. **Choose Images** - Select 4 professional photos representing:
   - Firefighters in action / Team at work
   - Fire extinguishers / Products
   - Fire suppression systems / Equipment
   - Control room / Monitoring / Operations

2. **Image Requirements:**
   - Minimum resolution: 1920×1080px (Full HD)
   - Recommended: 1920×1440px or higher (for quality)
   - File format: JPG (compressed) or PNG
   - File size: Keep under 500KB per image for fast loading
   - Aspect ratio: 16:9 or compatible

3. **Optimize Images:**
   ```bash
   # Recommended tools:
   - TinyPNG/Compress.jpg (online)
   - ImageMagick (command line)
   - Adobe Photoshop / Lightroom
   - Preview (Mac) / Photos app (Windows)
   ```

### Step 2: Add Images to Project

1. **Copy images to asset folder:**
   ```
   src/assets/hero/
   ├── firefighters.svg → firefighters.jpg (REPLACE)
   ├── fire-cylinders.svg → fire-cylinders.jpg (REPLACE)
   ├── gas-suppression.svg → gas-suppression.jpg (REPLACE)
   └── fire-control-room.svg → fire-control-room.jpg (REPLACE)
   ```

2. **Option A: Direct File Replacement**
   - Delete the `.svg` files
   - Copy your `.jpg` files with the SAME names
   - Done! (No code changes needed)

3. **Option B: Keep Both Formats**
   ```
   src/assets/hero/
   ├── firefighters.svg (backup)
   ├── firefighters.jpg (new)
   ├── fire-cylinders.svg (backup)
   ├── fire-cylinders.jpg (new)
   ├── gas-suppression.svg (backup)
   ├── gas-suppression.jpg (new)
   ├── fire-control-room.svg (backup)
   └── fire-control-room.jpg (new)
   ```

### Step 3: Update Image Paths (If File Types Changed)

If you changed from `.svg` to `.jpg` with the same filename, no code changes needed.

If using different filenames, update `HeroCarousel.jsx`:

```jsx
// BEFORE (SVG)
const slides = [
  {
    bgImage: '/src/assets/hero/firefighters.svg',
    // ...
  },
  // ...
];

// AFTER (JPG)
const slides = [
  {
    bgImage: '/src/assets/hero/firefighters.jpg',
    // ...
  },
  // ...
];
```

**File:** `src/components/HeroCarousel.jsx` (Lines 23, 32, 41, 50)

### Step 4: Adjust Overlay Opacity (Optional)

Depending on your image brightness, you may need to adjust the overlay darkness.

**Current Overlay Gradients:**
```javascript
overlayGradient: 'linear-gradient(135deg, rgba(31, 41, 55, 0.7) 0%, rgba(220, 38, 38, 0.6) 100%)'
//                                                      ↑                              ↑
//                                                   opacity 0.7                   opacity 0.6
```

**Opacity Scale:**
- `0` = Fully transparent (invisible)
- `0.3` = Very light overlay (bright images only)
- `0.5` = Medium overlay (balanced)
- `0.7` = Dark overlay (light images)
- `1.0` = Fully opaque (very dark)

**Adjustment Guide:**
- **If text is hard to read**: Increase opacity values (0.7 → 0.8)
- **If overlay is too dark**: Decrease opacity values (0.7 → 0.5)
- **If background image looks washed out**: Try 0.4-0.5

**Example: Making overlay lighter**
```javascript
{
  title: 'Expert Fire Safety Services',
  subtitle: 'Installation, maintenance, and fire audits...',
  bgImage: '/src/assets/hero/fire-cylinders.jpg',
  overlayGradient: 'linear-gradient(135deg, rgba(185, 28, 28, 0.5) 0%, rgba(220, 38, 38, 0.4) 100%)',
  // Changed from 0.7/0.6 to 0.5/0.4 for lighter overlay
  badge: '24/7 Support Available',
}
```

### Step 5: Test in Browser

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Open browser:**
   - URL: `http://localhost:5175/`
   - Check the hero carousel on the home page

3. **Verify:**
   - ✅ Images display correctly
   - ✅ Text is readable on all slides
   - ✅ Fade transitions work smoothly
   - ✅ Mobile responsiveness works
   - ✅ Buttons are clickable
   - ✅ Auto-rotation working

4. **Test on mobile:**
   - Use browser DevTools (F12)
   - Toggle device toolbar (Ctrl+Shift+M)
   - Test on multiple screen sizes

### Step 6: Deploy to Production

Once satisfied with the changes:

```bash
# Build for production
npm run build

# Output will be in dist/ folder
# Upload dist/ contents to your web server
```

## Image Recommendations

### For Each Slide

**Slide 1: Firefighters**
- **Best Options:**
  - Action shot of firefighters with equipment
  - Team photo in fire safety uniforms
  - Emergency response scenario
  - Firefighters training/demo
- **Avoid:** Dark images (text won't show)
- **Ideal:** Bright/daylight scenes or well-lit

**Slide 2: Fire Extinguishers**
- **Best Options:**
  - Product lineup/gallery
  - Extinguisher cylinders (close-up or arranged)
  - Showroom display
  - Product installation demo
- **Avoid:** Too busy/cluttered
- **Ideal:** Clear product visibility

**Slide 3: Gas Suppression System**
- **Best Options:**
  - Ceiling-mounted sprinkler/nozzle system
  - Control panel/equipment
  - Industrial fire suppression setup
  - High-tech safety system
- **Avoid:** Dark or unclear images
- **Ideal:** Professional industrial setting

**Slide 4: Control Room / Monitoring**
- **Best Options:**
  - Operations center/command room
  - Control panels and monitoring stations
  - Alarm system/display boards
  - 24/7 monitoring setup
- **Avoid:** Too technical or confusing
  - **Ideal:** Professional, organized space

## CSS Background Properties Reference

The component uses these CSS properties for background images:

```css
.hero-carousel {
  backgroundImage: url('...')      /* Path to image */
  backgroundSize: cover            /* Image fills entire slide */
  backgroundPosition: center       /* Image centered */
  backgroundRepeat: no-repeat      /* No tiling */
  backgroundAttachment: fixed      /* Parallax effect */
}
```

**To change behavior:**

1. **Remove Parallax Effect:**
   ```jsx
   // BEFORE:
   backgroundAttachment: 'fixed',
   
   // AFTER (Mobile-friendly):
   backgroundAttachment: 'scroll',
   ```

2. **Change Positioning:**
   ```jsx
   // Center (default):
   backgroundPosition: 'center',
   
   // Top-left:
   backgroundPosition: 'top left',
   
   // Bottom-right:
   backgroundPosition: 'bottom right',
   ```

3. **Change Size:**
   ```jsx
   // Cover (default):
   backgroundSize: 'cover',
   
   // Contain (full image visible):
   backgroundSize: 'contain',
   
   // Specific size:
   backgroundSize: '100% 100%',
   ```

## Troubleshooting

### Images Not Loading

1. **Check file path:**
   - Path is case-sensitive on Linux/Mac
   - Use forward slashes: `/src/assets/hero/` ✓
   - Never use backslashes: `\src\assets\hero\` ✗

2. **Verify file exists:**
   ```bash
   ls -la src/assets/hero/  # Linux/Mac
   dir src\assets\hero\     # Windows PowerShell
   ```

3. **Check browser console:**
   - Press F12 → Console tab
   - Look for 404 errors
   - Check network tab for failed requests

### Text Not Readable

1. **Increase overlay opacity:**
   - Change `0.6` → `0.8` in overlayGradient

2. **Add more contrast:**
   - Ensure image has light areas where text appears
   - Darken image if too bright

3. **Check text size:**
   - Headings: `text-5xl` to `text-7xl`
   - Very large and readable

### Images Look Blurry

1. **Check image resolution:**
   - Minimum 1920×1080px required
   - Larger is better (2560×1440+)

2. **Check file quality:**
   - Don't over-compress images
   - Use quality setting 85-95% in JPG

3. **Browser caching:**
   - Hard refresh: Ctrl+Shift+R
   - Clear browser cache
   - Close and reopen browser

### Performance Issues

1. **Optimize image size:**
   - Max 500KB per image
   - Use JPG format (smaller than PNG)
   - Use online compression tool

2. **Disable parallax on mobile:**
   ```jsx
   backgroundAttachment: 'scroll', // Instead of 'fixed'
   ```

3. **Use smaller versions for mobile:**
   - Detect device size
   - Load different image for mobile/desktop

## Advanced: Different Images for Mobile

To use different images on mobile/desktop:

```jsx
const slides = [
  {
    title: 'Your Safety is Our Priority',
    bgImage: window.innerWidth > 768 
      ? '/src/assets/hero/firefighters-desktop.jpg'
      : '/src/assets/hero/firefighters-mobile.jpg',
    // ... rest of config
  },
  // ... other slides
];
```

## Advanced: Using CDN Images

To use images from a CDN instead of local files:

```jsx
{
  title: 'Your Safety is Our Priority',
  bgImage: 'https://cdn.yoursite.com/images/firefighters.jpg',
  // ... rest of config
}
```

## Backup & Version Control

Always keep backups:

```bash
# Create backup branch
git checkout -b feature/hero-carousel-images

# Save original SVGs
mkdir backup/
cp src/assets/hero/*.svg backup/

# Add new images and test
# Commit when satisfied
git add src/assets/hero/
git commit -m "Update: Replace SVG images with real photographs"
```

## File Size Optimization Tips

1. **Use JPG for photos:** 40-60% smaller than PNG
2. **Set quality to 85%:** Good balance of quality/size
3. **Resize to exact dimensions:** Don't let browser scale large files
4. **Use WebP format:** 30% smaller than JPG (modern browsers)
5. **Compress first:** Use online tools before uploading

## Recommended Tools

| Tool | Purpose | Website |
|------|---------|---------|
| TinyPNG | Image compression | tinypng.com |
| Imagemin | Batch compression | github.com/imagemin |
| CloudConvert | Format conversion | cloudconvert.com |
| Canva | Image editing | canva.com |
| Pexels | Stock photos | pexels.com |
| Unsplash | Stock photos | unsplash.com |
| Pixabay | Stock photos | pixabay.com |

## Next Steps

1. ✅ Gather 4 high-quality images
2. ✅ Optimize image file sizes
3. ✅ Copy to `/src/assets/hero/`
4. ✅ Update paths in HeroCarousel.jsx (if needed)
5. ✅ Adjust overlay opacity for readability
6. ✅ Test in browser (all devices)
7. ✅ Deploy to production

---

**Version:** 1.0
**Last Updated:** December 19, 2025
**Status:** Ready for image replacement
