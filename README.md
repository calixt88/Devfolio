# Glow with Chlo - Esthetician Website

A beautiful, modern website for Chlo's esthetician business built with **Next.js**, **React**, and **Tailwind CSS**.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with beautiful gradients and smooth interactions
- **Fast Performance**: Built with Next.js for optimal performance
- **Easy to Customize**: Simple component structure for easy modifications
- **Navigation**: Smooth scrolling navigation with mobile menu support

## 📋 Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main homepage component
└── globals.css         # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /Users/calixtcharlebois/GlowWithChlo
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Sections

### Navigation
- Sticky header with logo and navigation links
- Mobile-responsive hamburger menu
- "Book Now" call-to-action button

### Hero Section
- Eye-catching headline with gradient text
- Professional tagline
- Two primary call-to-action buttons

### Services Section
Three main service categories:
- **Facial Treatments**: Hydrating facials, anti-aging, chemical peels, microdermabrasion
- **Body Treatments**: Body facials, exfoliating treatments, waxing, massages
- **Skincare Packages**: Monthly plans, customized regimens, product recommendations

### About Section
Customizable section describing Chlo's experience and philosophy

### Contact Section
Contact information including:
- Phone (placeholder - customize with actual number)
- Email: contact@glowwithchlo.com
- Social media: @glowwithchlo

### Footer
Copyright information and tagline

## 🎨 Customization

### Colors
The site uses a beautiful blue and amber gradient color scheme inspired by the logo. To customize:

Edit the Tailwind color classes in [app/page.tsx](app/page.tsx):
- `text-amber-*` - Change to your preferred amber shade
- `text-blue-*` - Change to your preferred blue shade
- `bg-gradient-to-*` - Modify gradient directions

### Content
Update text content directly in [app/page.tsx](app/page.tsx):
- Services descriptions
- About section text
- Contact information
- Links and social media handles

### Adding a Logo Image
Place your logo image in the `public/` folder and add it to the navbar:

```tsx
<Image src="/logo.png" alt="Glow with Chlo" width={40} height={40} />
```

### Adding a Booking System
Consider integrating:
- Calendly
- Acuity Scheduling
- Mindbody
- Custom booking form

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📦 Dependencies

- **next**: 16.1.6 - React framework
- **react**: 19.2.3 - UI library
- **tailwindcss**: 4.x - Utility-first CSS framework
- **lucide-react**: 0.577.0 - Beautiful icons
- **framer-motion**: 12.35.0 - Animation library (ready to use)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🚀 Deployment

This project is ready to deploy to:
- **Vercel** (recommended - free tier available)
- **Netlify**
- **AWS Amplify**
- Any standard Node.js hosting

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📞 Next Steps

1. **Add a booking system** - Integrate Calendly or similar
2. **Add contact form** - Enable actual email submissions
3. **Add images** - Upload professional photos to `/public`
4. **SEO optimization** - Add meta tags and structured data
5. **Analytics** - Add Google Analytics for tracking
6. **Social media links** - Link to Instagram, Facebook, etc.

## 💡 Tips for Improvement

- Add a gallery section with before/after treatment photos
- Include customer testimonials/reviews
- Create a blog for skincare tips
- Add a pricing page with service costs
- Implement email notifications for bookings
- Add a FAQ section
- Create a loyalty/rewards program section

## 📄 License

This project is custom-built for Glow with Chlo.

---

**Built with ❤️ using Next.js and React**


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
