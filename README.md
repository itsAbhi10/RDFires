# RD Fires - Fire Extinguisher Company Website

A modern, responsive, production-ready website for a fire safety company built with React, Vite, Tailwind CSS, and React Router.

## 🔥 Features

- **Complete Fire Safety Solutions**: Display products, services, and expertise
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI/UX**: Clean and professional design with fire safety theme
- **Interactive Components**: Product filtering, form validation, smooth navigation
- **SEO-Friendly**: Semantic HTML structure and accessible components
- **Performance Optimized**: Built with Vite for fast development and production builds

## 📋 Pages Included

1. **Home** - Hero section, company intro, product types, services overview, testimonials
2. **About Us** - Company history, mission, vision, certifications, timeline
3. **Products** - Browse fire extinguishers with filtering by type
4. **Services** - Installation, refilling, maintenance, fire audit, training
5. **Fire Safety AMC** - Annual maintenance contract plans with pricing
6. **Contact Us** - Contact form with validation, map, business hours
7. **Quote/Enquiry** - Request custom quotes for fire safety solutions

## 🛠 Tech Stack

- **React 18** - UI library
- **Vite** - Lightning-fast frontend build tool
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library (FA, FI icons)
- **JavaScript (ES6+)** - Modern JavaScript

## 📦 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer with links
│   ├── ProductCard.jsx # Product display card
│   └── ServiceCard.jsx # Service card
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   ├── Services.jsx
│   ├── AMC.jsx
│   ├── Contact.jsx
│   └── Quote.jsx
├── routes/
│   └── Routes.jsx      # Router configuration
├── data/
│   └── productsData.js # Sample data
├── assets/             # Static assets
├── App.jsx            # Main app component
├── main.jsx           # Entry point
├── index.css          # Global styles with Tailwind
└── App.css            # App-specific styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The application will start on `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Fire Red (#DC2626)
- **Dark**: Fire Dark (#1F2937)
- **Light**: Fire Light (#F9FAFB)
- **Accents**: White, Gray shades

### Tailwind Components
- Custom button styles: `.btn-primary`, `.btn-secondary`, `.btn-outline`
- Section titles: `.section-title`, `.section-subtitle`
- Card styling: `.card-shadow`

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📱 Key Components

### ProductCard
Displays fire extinguisher details with type, capacity, usage area, and standards.

### ServiceCard
Shows service offerings with icons and descriptions.

### Header
Sticky navigation with responsive mobile menu and call-to-action button.

### Footer
Company information, quick links, services, contact details, and social media icons.

## 🔧 Configuration

### Environment Variables
Create a `.env` file if needed:
```
VITE_API_BASE_URL=your_api_url
```

### Customize Company Details
Edit `src/data/productsData.js` to update:
- Company information
- Product list
- Services
- Certifications
- Social media links

## 📝 Form Validation

The application includes form validation for:
- **Contact Form**: Name, email, phone, subject, message
- **Quote Form**: Type selection, quantity, location, property type, contact info
- Real-time error messages and visual feedback

## 🌐 SEO Optimization

- Semantic HTML structure
- Meta tags ready (add to index.html)
- Accessible navigation and buttons
- Fast page load with Vite optimization
- Mobile-friendly responsive design

## 🔗 Routes

| Route | Page | Purpose |
|-------|------|---------|
| / | Home | Landing page |
| /about | About | Company information |
| /products | Products | Browse fire extinguishers |
| /services | Services | Service offerings |
| /amc | AMC | Maintenance contracts |
| /contact | Contact | Get in touch |
| /quote | Quote | Request quotation |

## 🎯 Color Usage

- **Red (#DC2626)**: Buttons, highlights, emergency alerts
- **Dark (#1F2937)**: Text, backgrounds, professional look
- **Light (#F9FAFB)**: Section backgrounds, contrast
- **White**: Cards, clean sections

## 🔄 State Management

- React Hooks (useState) for component state
- Form data management with controlled components
- Success/error message handling

## 📞 Contact Features

- Multiple contact methods (phone, email, location)
- Working hours display
- Embedded Google Map
- Contact form with validation
- FAQ section

## 💼 Services Offered

1. **Installation** - Professional setup
2. **Refilling** - Quick service
3. **Maintenance & AMC** - Regular care
4. **Fire Audit** - Safety assessment
5. **Training** - Employee education

## 🔒 Security Notes

- Form submissions should be sent to a secure backend
- Email validation included
- Input sanitization recommended for production

## 📊 AMC Plans

| Plan | Price | Features |
|------|-------|----------|
| Silver | ₹5,000 | Quarterly inspections |
| Gold | ₹8,000 | Monthly inspections, audit |
| Platinum | ₹12,000 | Weekly monitoring, free training |

## 🐛 Troubleshooting

### PostCSS Error
If you see "module is not defined", ensure:
- `postcss.config.js` uses ES module syntax (export default)
- `package.json` has `"type": "module"`

### Port Already in Use
```bash
npm run dev -- --port 3000
```

## 🚀 Deployment

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Deploy to GitHub Pages
Update `vite.config.js`:
```javascript
export default {
  base: '/repository-name/',
}
```

## 📄 License

This project is created for educational and commercial purposes.

## 📧 Support

For issues or customization, contact the development team.

---

**Built with ❤️ for Fire Safety Excellence**
