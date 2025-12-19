# HeroCarousel Visual Architecture

## Component Layout

```
HeroCarousel (Full-Width Banner)
│
├─ Swiper Container (Carousel Control)
│  ├─ Navigation (Prev/Next buttons)
│  ├─ Pagination (Bullet dots)
│  └─ Autoplay (6-second interval)
│
└─ SwiperSlides (4 Slides)
   │
   ├─ SLIDE 1: Firefighters
   │  ├─ Background: firefighters.svg
   │  ├─ Overlay: Dark gradient
   │  ├─ Title: "Your Safety is Our Priority"
   │  ├─ Badge: "Fire Safety Excellence" (pulsing)
   │  ├─ Icon: 🔥 (bouncing)
   │  └─ CTA: "Explore Products" button
   │
   ├─ SLIDE 2: Fire Cylinders
   │  ├─ Background: fire-cylinders.svg
   │  ├─ Overlay: Red-toned gradient
   │  ├─ Title: "Expert Fire Safety Services"
   │  ├─ Badge: "24/7 Support Available" (pulsing)
   │  ├─ Icon: 🛠️ (bouncing)
   │  └─ CTA: "Our Services" button
   │
   ├─ SLIDE 3: Gas Suppression
   │  ├─ Background: gas-suppression.svg
   │  ├─ Overlay: Dark blue gradient
   │  ├─ Title: "Advanced Gas Suppression Systems"
   │  ├─ Badge: "Next-Gen Protection" (pulsing)
   │  ├─ Icon: ⚡ (bouncing)
   │  └─ CTA: "View Technology" button
   │
   └─ SLIDE 4: Control Room
      ├─ Background: fire-control-room.svg
      ├─ Overlay: Dark maroon gradient
      ├─ Title: "Real-Time Fire Monitoring"
      ├─ Badge: "Smart Fire Detection" (pulsing)
      ├─ Icon: 📊 (bouncing)
      └─ CTA: "Request Quote" button

```

## CSS Layer Stack (Z-Index Order)

```
Top to Bottom:
└─ z-10: Content Layer (Text, Buttons, Icons)
   └─ z-5: Overlay Gradient (Dark semi-transparent)
      └─ z-0: Background Image (SwiperSlide background)
```

## Responsive Breakpoints

### Desktop (1024px+)
- 100vh height per slide
- 2-column layout (content + icon side-by-side)
- Large text (5xl-7xl titles)
- Full-size icons (text-9xl)
- Navigation buttons visible

### Tablet (640px-1024px)
- 100vh height per slide
- 2-column layout still visible
- Medium text (3xl-5xl titles)
- Navigation buttons visible

### Mobile (<640px)
- 500px minimum height (responsive)
- 1-column layout (icon hidden)
- Small text (2xl-3xl titles)
- Stacked buttons
- Touch-optimized navigation

## Animation Timeline

### Slide Transition
```
Time: 0ms      1000ms     2000ms     3000ms     4000ms
      │          │          │          │          │
Fade: 0%  →    25%   →    50%   →    75%   →   100%
      ├─ Slide out (opacity decrease)
      └─ Slide in (opacity increase)
      Duration: ~500-800ms (smooth crossfade)
```

### Badge Pulse Animation
```
Time: 0ms      500ms     1000ms     1500ms     2000ms
      │         │         │          │         │
Pulse:100% →  80%  →  100%  →   80%  →  100%
      └─ Repeats continuously every 2 seconds
```

### Icon Bounce Animation
```
Time: 0ms      500ms     1000ms     1500ms     2000ms
      │         │         │          │         │
Bounce:0px → -10px  →   0px  →  -10px  →   0px
      └─ Vertical bounce continuously
```

### Button Hover Effect
```
Normal State:     Hover State:
scale: 100%   →   scale: 105%
opacity: 100% →   opacity: 100%
shadow: md    →   shadow: lg
```

## Content Positioning

### Desktop Layout (md and above)
```
┌─────────────────────────────────────┐
│                                     │
│  Left Content          Right Icon   │
│  (Grid Col 1)          (Grid Col 2) │
│                                     │
│  - Badge                    🔥      │
│  - Title                  HUGE      │
│  - Subtitle                BOUNCE   │
│  - Buttons                          │
│                                     │
└─────────────────────────────────────┘
```

### Mobile Layout
```
┌──────────────┐
│              │
│  Badge       │
│              │
│  Title       │
│              │
│  Subtitle    │
│              │
│  Buttons     │
│  (Stacked)   │
│              │
└──────────────┘
(Icon hidden)
```

## Color Scheme

### Overlay Gradients by Slide

**Slide 1 (Firefighters)**
- Start: rgba(31, 41, 55, 0.7) - Dark blue-gray
- End: rgba(220, 38, 38, 0.6) - Fire red

**Slide 2 (Fire Cylinders)**
- Start: rgba(185, 28, 28, 0.7) - Dark red
- End: rgba(220, 38, 38, 0.6) - Bright red

**Slide 3 (Gas Suppression)**
- Start: rgba(31, 41, 55, 0.7) - Dark blue-gray
- End: rgba(220, 38, 38, 0.6) - Fire red

**Slide 4 (Control Room)**
- Start: rgba(153, 27, 27, 0.7) - Deep maroon
- End: rgba(220, 38, 38, 0.6) - Fire red

### Text Colors
- Titles: White (#FFF)
- Subtitles: Light gray (#F3F4F6)
- Badges: White on Fire Red background

## Interactive Elements

### Navigation Buttons
```
Normal State:
┌─────┐
│  ❮  │  50px circle
│ RED │  rgba(220, 38, 38, 0.7)
│  75%│  opacity
└─────┘

Hover State:
┌─────┐
│  ❮  │  Scale 110%
│ RED │  Full red
│ 100%│  rgba(220, 38, 38, 1)
└─────┘
```

### Pagination Bullets
```
Inactive: ◯ (12px, 70% white, semi-transparent)
Active:   ● (12px, 100% white, fully opaque)

Position: Bottom center of slide
```

## Accessibility Features

- ✅ Semantic HTML (proper heading hierarchy)
- ✅ Color contrast meets WCAG AA standards
- ✅ Keyboard navigation (arrow keys, Tab)
- ✅ Touch-friendly buttons (50px minimum)
- ✅ Readable font sizes (16px+ for body text)
- ✅ ARIA labels on navigation buttons
- ✅ Sufficient touch targets on mobile

## Performance Considerations

### Asset Loading
- SVG files: 10-20KB each (cached by browser)
- Total carousel assets: ~60-80KB
- Load time: Instant (local assets)

### Animation Performance
- Fade effect: GPU-accelerated (60fps)
- Bounce effect: CSS animation (hardware accelerated)
- Pulse effect: CSS animation (minimal repaints)
- Hover effects: CSS transform (no layout recalculation)

### Browser Rendering
- No JavaScript animation overhead
- Pure CSS animations (better performance)
- Swiper library handles DOM updates efficiently
- Minimal reflows and repaints

---

**Document Version**: 1.0
**Last Updated**: December 19, 2025
