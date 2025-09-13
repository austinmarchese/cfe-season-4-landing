# CFE - Exclusive Performance Event Landing Page

A stunning, responsive landing page built with Next.js 14+ that replicates a premium event experience with countdown timer, video preview, and elegant branding.

![CFE Logo](public/cfe-logo-preview.png)

## 🚀 Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Real-time Countdown**: Dynamic countdown timer to event date
- **Interactive Video Player**: Elegant video preview with hover effects
- **Animated Background**: Smooth flowing wave animations
- **Premium Branding**: Custom CFE brand colors and luxurious design elements
- **Performance Optimized**: Built with Next.js 14+ for optimal performance
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, structured data, and social media optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Shadcn/ui components
- **Icons**: Lucide React
- **Animations**: CSS animations and Tailwind utilities
- **Deployment**: Vercel-ready configuration

## 🎨 Design Features

### Brand Identity
- **Colors**: Deep forest green, luxurious gold, gradient cyan/purple accents
- **Typography**: Modern sans-serif with monospace countdown display
- **Logo**: Custom SVG CFE medallion with ornate details
- **Effects**: Subtle animations, hover states, and glow effects

### Components
- `CFELogo`: Scalable SVG logo component with gradient effects
- `CountdownTimer`: Real-time countdown with digital display styling
- `VideoPlayer`: Interactive video preview with stage performance visualization
- `AnimatedWaves`: Flowing background animations with particles
- `Button`: Enhanced Shadcn button with gradient and hover effects

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thecfe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # Shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── CFELogo.tsx         # Custom CFE logo component
│   ├── CountdownTimer.tsx  # Countdown timer component
│   ├── VideoPlayer.tsx     # Video preview component
│   └── AnimatedWaves.tsx   # Background animations
└── lib/
    └── utils.ts            # Utility functions
```

## 🎯 Customization

### Brand Colors
The brand colors are defined in `src/app/globals.css`:

```css
/* CFE Brand Colors */
--cfe-forest-green: oklch(0.25 0.15 150);
--cfe-emerald: oklch(0.35 0.18 160);
--cfe-gold: oklch(0.75 0.18 45);
--cfe-bronze: oklch(0.65 0.15 35);
--cfe-gradient-cyan: oklch(0.6 0.25 200);
--cfe-gradient-purple: oklch(0.55 0.3 280);
```

### Countdown Timer
Update the target date in `src/components/CountdownTimer.tsx`:

```typescript
const targetDate = new Date('2024-12-31T23:59:59');
```

### Video Content
Replace the placeholder video in `src/components/VideoPlayer.tsx`:

```typescript
const videoSrc = "path/to/your/video.mp4";
const thumbnailSrc = "path/to/your/thumbnail.jpg";
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy
   - No additional configuration needed

### Other Platforms

The application is compatible with:
- Netlify
- AWS Amplify  
- Railway
- Any platform supporting Node.js

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 🎨 Design System

### Typography
- **Headers**: Geist Sans (default Next.js font)
- **Countdown**: Geist Mono for digital display effect
- **Body**: Geist Sans with optimized line heights

### Spacing
- Consistent 8px grid system
- Responsive spacing using Tailwind utilities
- Mobile-first approach with progressive enhancement

### Animations
- Subtle hover effects (scale, glow, color transitions)
- Smooth wave animations (8-10s duration)
- Floating particle effects with staggered delays
- Button shimmer effect on hover

## 🌟 Performance Optimizations

- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size
- **Font Optimization**: Optimized font loading with Next.js
- **Hydration**: Proper client-side hydration handling

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Semantic HTML structure
- Optimized page titles and descriptions
- Structured data ready

## 🎭 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact [your-email@domain.com](mailto:your-email@domain.com).

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**