# RJR Consultancy Website

A modern, responsive Next.js website for RJR Consultancy - a performance-driven business growth consultancy serving Delhi NCR businesses.

## 🚀 Features

- **Modern Next.js 14 App Router** - Latest Next.js architecture
- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Interactive Delhi NCR Map** - Leaflet.js integration with service area markers
- **HubSpot Lead Capture** - Professional form integration
- **WhatsApp Integration** - Floating chat widget with quick actions
- **Dark/Light Mode** - Theme toggle with persistence
- **SEO Optimized** - Meta tags and structured data for Delhi NCR targeting
- **Performance Optimized** - Fast loading with optimized images and code splitting

## 📂 Project Structure

```
rjr-consultancy-website/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Route groups
│   │   ├── about/page.js         # About page
│   │   ├── services/page.js      # Services page
│   │   ├── contact/page.js       # Contact page
│   │   └── blog/page.js          # Blog page
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Home page
├── components/                   # Reusable components
│   ├── Navigation.js             # Main navigation
│   ├── HeroSection.js            # Hero section
│   ├── ServicesSection.js        # Services showcase
│   ├── TestimonialsSection.js    # Client testimonials
│   ├── StatsSection.js           # Statistics display
│   ├── ContactCTA.js             # Call-to-action section
│   ├── Footer.js                 # Site footer
│   ├── WhatsAppWidget.js         # Floating WhatsApp chat
│   ├── InteractiveMap.js         # Leaflet.js map component
│   └── HubSpotForm.js            # Lead capture form
├── public/                       # Static assets
├── styles/                       # Additional styles
└── lib/                          # Utility functions
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- GitHub account
- Vercel account (for deployment)

### Local Development

1. **Extract and navigate to the project:**
   ```bash
   unzip rjr-consultancy-website.zip
   cd rjr-consultancy-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# HubSpot Configuration (optional)
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id_here
NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🚀 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/rjr-consultancy-website.git
   git push -u origin main
   ```

2. **Deploy with Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Add environment variables if needed
   - Click "Deploy"

### Method 2: Direct Upload

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   npx vercel --prod
   ```

## 🔧 Configuration

### HubSpot Form Setup

1. **Get your HubSpot credentials:**
   - Portal ID: Found in HubSpot settings
   - Form ID: From your form's embed code

2. **Update the HubSpotForm component:**
   ```javascript
   // In components/HubSpotForm.js, replace:
   portalId: 'YOUR_PORTAL_ID', // Your actual Portal ID
   formId: 'YOUR_FORM_ID',     // Your actual Form ID
   ```

### Map Customization

The InteractiveMap component uses OpenStreetMap (free) and includes:
- Service area markers for Delhi NCR locations
- Clickable popups with business information
- Service area circle visualization

To customize locations, edit the `locations` array in `components/InteractiveMap.js`.

### WhatsApp Integration

The WhatsApp widget is pre-configured with number `9599863263`. To change:
1. Update the number in `components/WhatsAppWidget.js`
2. Update footer and contact page references

## 📱 Mobile Optimization

- Responsive design works on all screen sizes
- Touch-friendly navigation and interactions
- Optimized images and fonts
- Fast loading with code splitting

## 🎨 Customization

### Colors and Branding

Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... add your brand colors
  },
}
```

### Content Updates

- **Services:** Edit `components/ServicesSection.js` and `app/(pages)/services/page.js`
- **Testimonials:** Update the testimonials array in `components/TestimonialsSection.js`
- **About Page:** Modify `app/(pages)/about/page.js`
- **Contact Info:** Update contact details across components

## 📊 Performance

The website is optimized for:
- **Core Web Vitals** - Fast loading and good user experience
- **SEO** - Proper meta tags and structured data
- **Accessibility** - ARIA labels and semantic HTML
- **Mobile Performance** - Optimized for mobile devices

## 🐛 Troubleshooting

### Common Issues

1. **Map not loading:**
   - Check browser console for errors
   - Ensure Leaflet CSS is loaded
   - Verify internet connection

2. **HubSpot form not working:**
   - Check Portal ID and Form ID are correct
   - Verify HubSpot script loads in network tab
   - Use fallback form if needed

3. **Build errors:**
   - Run `npm install` to ensure all dependencies
   - Check for syntax errors in components
   - Verify all imports are correct

### Support

For technical support:
- 📱 WhatsApp: [+91 9599863263](https://wa.me/919599863263)
- 📧 Email: ixglobal012345@gmail.com
- 📸 Instagram: [@realjeetsingh](https://instagram.com/realjeetsingh)

## 📄 License

This project is created for RJR Consultancy. All rights reserved.

---

**Built with ❤️ for Delhi NCR businesses by RJR Consultancy**
