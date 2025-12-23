# Romantic Apology Website - 3D Sunflower Experience

A deeply romantic and immersive apology website featuring photorealistic 3D graphics and emotional storytelling through visual elements.

## Features

### Stage 1: Landing Page - Single Sunflower Blooming
- **Realistic 3D sunflower** that blooms from a bud over 4-5 seconds
- **Soft gradient background** (warm cream to gentle yellow)
- **Animated golden sparkles** floating upward
- **Breathing animation** on the flower
- **Cursor follow effect** - flower slightly rotates toward cursor
- **Hover glow effect** with golden light
- **Click hint** appears after bloom completes

### Stage 2: Sunflower Field Scene
- **Vast 3D sunflower field** with hundreds of flowers
- **Wind animation** - flowers sway naturally
- **Blue sky with moving clouds**
- **Ground with grass patches**
- **Camera controls** for 360° view
- **Smooth transition** from single flower to field

### Apology Message
- **Elegant glassmorphism card** with backdrop blur
- **Beautiful typography** using Playfair Display font
- **Floating animation** for emotional impact
- **Appears 2-3 seconds** after field loads

### Additional Features
- **Loading screen** with progress bar
- **Background music player** (optional, add audio file at `/public/audio/background.mp3`)
- **Start Over button** to restart the experience
- **Mobile responsive** design
- **Film grain overlay** for cinematic feel
- **Vignette effect** for focus

## Technical Stack

- **Next.js 14+** (App Router)
- **React Three Fiber** - 3D graphics
- **@react-three/drei** - 3D helpers (Sky, Cloud, OrbitControls)
- **Three.js** - 3D library
- **Framer Motion** - UI animations
- **GSAP** - Timeline animations
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## Optional: Add Background Music

1. Place your audio file at: `/public/audio/background.mp3`
2. The music player will automatically detect and enable the audio

## Customization

### Change Apology Message
Edit `app/components/ApologyMessage.tsx` to customize the message text.

### Adjust Flower Count
In `app/page.tsx`, modify the `flowerCount` prop:
```tsx
<SunflowerField flowerCount={200} windStrength={0.5} />
```

### Change Colors
Update colors in `tailwind.config.js` or directly in component files.

### Modify Bloom Duration
In `app/page.tsx`, change the GSAP timeline duration:
```tsx
timeline.to({}, {
  duration: 5, // Change this value
  ...
})
```

## Performance

- Uses optimized 3D rendering
- Lazy loading for heavy components
- Mobile-optimized flower count
- 60fps target on modern devices

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

Private project - Created with love ❤️
