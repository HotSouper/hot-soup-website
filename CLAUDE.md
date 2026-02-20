# Hot Soup Website

Marketing site for Hot Soup agency. Hosted on Railway, replacing Squarespace.

## Tech Stack
- Next.js 16 with App Router
- TypeScript
- Tailwind CSS 4
- Framer Motion for animations

## Project Structure
```
src/
  app/
    page.tsx          # Main page composing all sections
    layout.tsx        # Root layout with metadata
    globals.css       # CSS variables and theme
  components/
    Hero.tsx          # Hero section with animated gradients
    Services.tsx      # Three service cards
    About.tsx         # About section with stats
    Contact.tsx       # CTA section
    Footer.tsx        # Footer with wavy animated surface
    SoupBackground.tsx # THE KEY ANIMATION - floating soup blobs
```

## The Soup Animation (SoupBackground.tsx)

This is the signature design element. Liquid soup blobs fall from the top of the page and splash into the footer.

### Current Implementation
- 6 blobs spawn with staggered delays (800ms apart)
- Each blob is an SVG with morphing bezier paths for liquid wobble
- Blobs fall with gravity physics, slight horizontal drift
- When blob reaches footer, it disappears and triggers splash particles + ripple rings
- Click anywhere to spawn new blobs

### Key Technical Details
- Blob Y position is in **document coordinates** (pixels from page top)
- Footer collision uses `getBoundingClientRect().top + window.scrollY` for document position
- This prevents scroll from interfering with collision timing
- Splash Y position converts back to viewport coordinates for fixed positioning

### Current Issue Being Debugged
The splash animation timing - we want each blob to splash independently when it hits the footer, not all at once. The scroll interference has been addressed by using document coordinates consistently.

## Services (for copy reference)
1. **Product Management** - AI-enhanced digital transformation
2. **Coaching** - Sessions for PMs, leaders, executives
3. **Rapid Builds** - AI-driven development for early-stage projects

## Target Audience
- Product teams embracing AI
- SMBs and entrepreneurs with ideas
- Larger orgs needing innovation/incubator projects

## Linear Ticket
HOS-112 - Build Hot Soup marketing site for Railway deployment

## Commands
```bash
npm run dev    # Development server on localhost:3000
npm run build  # Production build
npm run start  # Start production server
```

## Deployment
Push to GitHub (HotSouper/hot-soup-website) → Railway auto-deploys
