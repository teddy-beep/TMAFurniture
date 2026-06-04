# Tilahun Metal Art Furniture

A premium e-commerce and portfolio website for bespoke luxury metal furniture, custom ironwork, and modern industrial interior decor.

## Features

- **Premium Design**: Sleek, artisanal aesthetic with matte black and burnished gold color palette
- **Responsive Layout**: Fully responsive design optimized for mobile, tablet, and desktop
- **Gallery System**: Filterable masonry grid portfolio with lightbox functionality
- **Shop Catalog**: Product listings with multi-criteria filtering (category, metal type, price, room)
- **Custom Orders**: Contact form with file upload for sketches and WhatsApp integration
- **Smooth Animations**: Scroll animations, hover transitions, and interactive elements
- **SEO Optimized**: Semantic HTML, meta tags, and proper alt texts

## Pages

- **Home**: Hero section, featured collections, craftsmanship showcase
- **Gallery**: Filterable portfolio with lightbox popup
- **Shop**: Product catalog with advanced filtering and sorting
- **About**: Heritage story, values, timeline, and team section
- **Contact**: Inquiry form with file upload and WhatsApp integration

## Tech Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN for immediate use)
- **Vanilla JavaScript**: No frameworks required
- **Google Fonts**: Montserrat and Inter typography

## Quick Start

### Option 1: Using Tailwind CDN (Recommended for immediate use)

The website is already configured to use Tailwind CSS via CDN. Simply open `index.html` in a browser to view the site.

```bash
# Open the website
open index.html
# or
start index.html  # Windows
```

### Option 2: Build with npm (For production)

1. Install dependencies:
```bash
npm install
```

2. Compile CSS:
```bash
npm run build
```

3. Update HTML files to use compiled CSS:
Replace the Tailwind CDN script with:
```html
<link rel="stylesheet" href="css/output.css">
```

## Project Structure

```
TMAFurniture/
├── css/
│   ├── input.css          # Tailwind input file
│   └── output.css         # Compiled CSS (generated)
├── js/
│   ├── main.js            # Main functionality
│   ├── gallery.js         # Gallery filtering & lightbox
│   ├── shop.js            # Shop filtering & sorting
│   └── contact.js         # Form handling
├── image/                 # Image assets
├── index.html             # Home page
├── gallery.html           # Gallery page
├── shop.html              # Shop page
├── about.html             # About page
├── contact.html           # Contact page
├── package.json           # Project configuration
├── tailwind.config.js     # Tailwind configuration
└── README.md              # This file
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
    'matte-black': '#1A1A1A',
    'deep-charcoal': '#2D2D2D',
    'burnished-gold': '#C5A059',
    'brushed-bronze': '#B8956F',
    'off-white': '#F5F5F5',
}
```

### Images

Replace the Unsplash placeholder images with your own product images. Update the `src` attributes in the HTML files.

### Contact Information

Update the contact details in the footer and contact page:
- Phone number in WhatsApp link
- Email address
- Physical address

## Scripts

- `npm run dev` - Watch for changes and compile CSS (requires npm setup)
- `npm run build` - Compile CSS for production (requires npm setup)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Images use placeholder URLs (replace with optimized images for production)
- CSS minified in production build
- Lazy loading recommended for large image galleries
- Consider implementing a CDN for static assets

## SEO

Each page includes:
- Meta description
- Meta keywords
- Proper heading hierarchy
- Alt text for images
- Semantic HTML structure

## Contact

For customizations or support, update the contact information in the footer or reach out via the contact form.

## License

© 2024 Tilahun Metal Art Furniture. All rights reserved.
