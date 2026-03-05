# Glow with Chlo - Project Guidelines

## Project Overview
A professional esthetician website built with Next.js, React, and Tailwind CSS for Chlo's skincare business.

## Technology Stack
- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components using Tailwind
- **Icons**: Lucide React
- **Animations**: Framer Motion (installed, ready to use)

## Project Structure
```
/
├── app/
│   ├── page.tsx          # Main homepage with all sections
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets (add images here)
├── tailwind.config.ts    # Tailwind configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies
```

## Key Features Implemented
✓ Responsive navigation with mobile menu
✓ Hero section with gradient text
✓ Services section (3 cards)
✓ About section
✓ Contact information section
✓ Footer
✓ Mobile-responsive design
✓ Smooth scrolling navigation

## Color Scheme
- Primary Amber: #f9a320 and gradients
- Primary Blue: #1e3a8a and #0369a1
- Background: Gradient from blue-50 to amber-50

## Customization Areas

### To Update Services
Edit the services grid in [app/page.tsx](app/page.tsx) around line 120. Each service card includes:
- Icon (from lucide-react)
- Title
- List of offerings

### To Add Images
1. Place images in `/public` folder
2. Import using Next.js Image component
3. Update navbar with logo or add gallery section

### To Change Colors
Update Tailwind classes in [app/page.tsx](app/page.tsx):
- Search for `text-amber-500`, `text-blue-900`, etc.
- Replace with preferred colors

### To Add Booking Integration
Popular options:
- Calendly (embed)
- Acuity Scheduling
- Custom form with Nodemailer

## Development Commands
```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## Important Notes
- Site is fully responsive and mobile-friendly
- All links are placeholder links - update with actual URLs
- Contact email needs to be connected to actual email system
- Phone number is placeholder - add real phone number
- Social media handles (@glowwithchlo) are placeholders

## Future Enhancement Ideas
- Add testimonials/reviews section
- Create gallery with treatment photos
- Add pricing table
- Implement working contact form
- Add blog for skincare tips
- Create FAQ section
- Add before/after photo gallery
- Implement appointment booking system

## Deployment
Ready to deploy to Vercel, Netlify, or AWS Amplify. Vercel recommended for optimal Next.js performance.

## Performance Notes
- Uses server-side rendering by default
- Images should be optimized before adding
- Mobile-first responsive design
- Lighthouse-friendly configuration
