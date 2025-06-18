
# AI Website Generation Prompts

## Primary Prompt: Complete Dynamic Website Generation

```
Create a complete multi-page React website with dynamic JSON-based content loading using the following specifications:

SITE ARCHITECTURE:
- Framework: React + TypeScript + Vite + TailwindCSS + shadcn/ui
- Routing: React Router DOM with BrowserRouter
- State Management: Custom hooks with React Query for data fetching
- Styling: TailwindCSS with custom animations and amber color scheme
- Icons: Lucide React icons throughout

DYNAMIC LOADING SYSTEM:
- All content loaded from JSON files in /public/pages/ directory
- Global configuration in /public/pages/config.json
- Page-specific content in /public/pages/{page-name}.json
- Custom hooks: useConfig() and usePageConfig(pageName)
- Real-time error handling and fallback mechanisms
- Loading screens with dynamic site branding

PAGES TO CREATE:
1. Home Page (home.json) - WITH CAROUSEL HERO
2. About Page (about.json)
3. Services Page (services.json)
4. Products Page (products.json)
5. Contact Page (contact.json)

GLOBAL CONFIG STRUCTURE (/public/pages/config.json):
{
  "site": {
    "name": "Company Name",
    "tagline": "Company Tagline",
    "favicon": "favicon_url"
  },
  "company": {
    "name": "Company Name",
    "tagline": "Company Tagline", 
    "logo": "logo_url",
    "description": "Company description"
  },
  "contact": {
    "address": "Full address",
    "phone": "Phone number",
    "email": "Email address",
    "timing": [
      {
        "label": "Mon - Fri",
        "hours": "9:00 AM - 6:00 PM"
      }
    ]
  },
  "header": {
    "navigation": [
      { "label": "Home", "href": "/" },
      { "label": "About Us", "href": "/about" },
      { "label": "Services", "href": "/services" },
      { "label": "Products", "href": "/products" },
      { "label": "Contact", "href": "/contact" }
    ]
  },
  "footer": {
    "navigation": [...same as header],
    "social": [
      {
        "platform": "facebook",
        "url": "social_url",
        "icon": "facebook"
      }
    ],
    "branding": {
      "text": "Made with ❤️ by",
      "company": "Your Company",
      "url": "https://yourcompany.com"
    }
  }
}

PAGE STRUCTURE TEMPLATE:
{
  "meta": {
    "title": "Page Title",
    "description": "SEO description"
  },
  "hero": {
    "type": "carousel", // NEW: carousel type for home page
    "enabled": true,
    "slides": [
      {
        "title": "Slide Title",
        "subtitle": "Slide Subtitle", 
        "backgroundImage": "image_url",
        "backgroundVideo": "video_url", // optional
        "cta": {
          "primary": "Button Text",
          "secondary": "Secondary Button"
        }
      }
    ]
  },
  "sections": {
    "sectionName": {
      "type": "section_type",
      "enabled": true,
      "title": "Section Title",
      "subtitle": "Section Subtitle",
      "items": [...]
    }
  }
}

CAROUSEL HERO SPECIFICATIONS:
- Multiple slides with smooth transitions
- Auto-play with pause on hover
- Navigation dots and arrow controls
- Background images/videos per slide
- Animated text overlays with staggered animations
- Responsive design for all screen sizes
- Built with embla-carousel-react

SUPPORTED SECTION TYPES:
1. "why-choose-us" - Feature highlights with icons
2. "about-us-intro" - Company introduction with image
3. "stats" - Animated counters and achievements
4. "expertise" - Industry sectors with applications
5. "services" - Detailed service offerings
6. "featured-products" - Product showcase
7. "testimonials" - Client reviews with ratings
8. "company-overview" - Detailed company description
9. "company-journey" - Timeline of milestones
10. "infrastructure" - Facilities and equipment
11. "manufacturing-process" - Step-by-step processes
12. "awards" - Certifications and recognition
13. "faqs" - Expandable question/answer pairs
14. "contact-form" - Dynamic contact form
15. "cta" - Call-to-action sections

FAIL-SAFE LOGIC REQUIREMENTS:
- Skip sections with "enabled": false
- Handle malformed JSON gracefully
- Show loading states during data fetch
- Display user-friendly error messages
- Console logging for debugging
- Fallback content for missing data
- Graceful degradation for missing images/videos

DYNAMIC LOADING HOOKS:
```typescript
// useConfig.ts - Global configuration
export const useConfig = () => {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Auto-update document title and favicon
  // Error handling with user-friendly messages
  // Loading states management
}

// usePageConfig.ts - Page-specific content
export const usePageConfig = (pageName: string) => {
  const [config, setConfig] = useState<PageConfig | null>(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);
  
  // Validate page structure
  // Handle missing sections gracefully
  // Error logging and recovery
}
```

COMPONENT ARCHITECTURE:
- Header.tsx - Dynamic navigation from config
- Footer.tsx - Dynamic links and branding from config
- Hero.tsx - Multi-type hero support (carousel, video, image)
- SectionRenderer.tsx - Dynamic section loading with error boundaries
- LoadingScreen.tsx - Branded loading with dynamic site info
- Individual section components for each section type

ROUTING STRUCTURE:
- App.tsx with React Router setup
- Protected routes and 404 handling
- Dynamic page loading with usePageConfig
- SEO meta tag updates per page

REQUIREMENTS:
- Use TypeScript throughout
- Implement proper error boundaries
- Add loading states for all async operations
- Use modern React patterns (hooks, functional components)
- Responsive design with mobile-first approach
- Accessibility considerations (ARIA labels, semantic HTML)
- Performance optimization (lazy loading, code splitting)
- SEO optimization (meta tags, structured data)

OUTPUT DELIVERABLES:
1. Complete React application structure
2. All page JSON files with realistic content
3. Global configuration JSON
4. Custom hooks for data management
5. Reusable component library
6. Comprehensive error handling
7. Loading states and transitions
8. Responsive carousel hero implementation
```

## Secondary Prompt: Theme and Animation Specifications

```
THEME SPECIFICATIONS:

COLOR SCHEME:
- Primary: Amber shades (amber-600, amber-700, amber-500)
- Background: White with subtle gradients (amber-50, orange-50)
- Text: Gray scale (gray-800, gray-700, gray-600)
- Accent: Black overlays (black/60, black/50)
- Interactive: Hover states with darker amber tones

TYPOGRAPHY:
- Font Family: Inter (Google Fonts)
- Headings: Bold weights (font-bold, font-semibold)
- Body: Regular and medium weights
- Sizes: Responsive text sizing (text-xl sm:text-2xl md:text-3xl)

SPACING AND LAYOUT:
- Container: max-w-6xl mx-auto with responsive padding
- Sections: py-16 md:py-20 lg:py-24 spacing
- Cards: Rounded corners (rounded-lg, rounded-xl)
- Shadows: Subtle elevation (shadow-lg, hover:shadow-xl)

ANIMATION SYSTEM:

CUSTOM KEYFRAMES:
```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
```

ANIMATION CLASSES:
- .slide-up-animation - Base slide up effect
- .slide-up-delay-1 - 0.2s delay
- .slide-up-delay-2 - 0.4s delay
- .fade-in-animation - Simple fade in
- .animate-fade-in - Tailwind fade with movement
- .animate-scale-in - Scale entrance effect

INTERACTIVE ANIMATIONS:
- hover:scale-105 - Button and card hover effects
- transition-all duration-300 - Smooth transitions
- hover:shadow-xl - Elevation on hover
- group and group-hover: for complex interactions

CAROUSEL ANIMATIONS:
- Smooth slide transitions (300ms ease-out)
- Staggered text animations for slide content
- Auto-play with 5-second intervals
- Pause on hover functionality
- Dot indicator animations

COMPONENT ANIMATIONS:
- Cards: Scale on hover with shadow increase
- Buttons: Scale and color transitions
- Images: Zoom on hover (hover:scale-110)
- Text: Fade in with upward movement
- Icons: Rotate and color changes on interaction

RESPONSIVE BREAKPOINTS:
- sm: 640px (Small tablets)
- md: 768px (Medium tablets)
- lg: 1024px (Large tablets/laptops)
- xl: 1280px (Desktop)
- 2xl: 1536px (Large desktop)
```

## Tertiary Prompt: Advanced Implementation Guidelines

```
ADVANCED IMPLEMENTATION REQUIREMENTS:

ERROR HANDLING STRATEGY:
```typescript
// Section-level error boundaries
try {
  switch (section.type) {
    case 'why-choose-us':
      return <WhyChooseUs config={{ whyChooseUs: section }} />;
    default:
      console.warn(`Unknown section type: ${section.type}`);
      return null;
  }
} catch (error) {
  console.error(`Error rendering section ${sectionKey}:`, error);
  return (
    <div className="py-8 text-center text-red-600">
      <p>Error loading section: {sectionKey}</p>
    </div>
  );
}
```

LOADING STATE MANAGEMENT:
- Global loading screen with site branding
- Section-level skeleton loaders
- Progressive loading of images and videos
- Graceful degradation for slow connections

CAROUSEL IMPLEMENTATION DETAILS:
```typescript
// Required carousel features
- embla-carousel-react integration
- Multiple slides with different content types
- Auto-play with user controls
- Touch/swipe gestures on mobile
- Keyboard navigation support
- ARIA accessibility labels
- Performance optimization for large images
```

PERFORMANCE OPTIMIZATIONS:
- Lazy loading for images and videos
- Code splitting for route-based chunks
- Memoization of expensive computations
- Debounced scroll and resize handlers
- Optimized re-renders with React.memo

SEO ENHANCEMENTS:
- Dynamic meta tag updates per page
- Structured data for business information
- Open Graph tags for social sharing
- Twitter Card meta tags
- Sitemap generation capability

ACCESSIBILITY REQUIREMENTS:
- ARIA labels for all interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG 2.1)
- Focus management for modals and carousels

VALIDATION RULES:
- JSON schema validation for configuration files
- Type checking for all component props
- Error logging for invalid data structures
- Graceful fallbacks for missing required fields

DEPLOYMENT CONSIDERATIONS:
- Environment-specific configuration
- Asset optimization for production
- CDN integration for media files
- Performance monitoring setup
- Error tracking integration

TESTING STRATEGY:
- Component unit tests
- Integration tests for data flow
- E2E tests for critical user journeys
- Performance benchmarking
- Accessibility testing
```

## Usage Instructions

1. **Choose the appropriate prompt** based on your needs:
   - Primary: Complete website generation
   - Secondary: Theme and styling focus
   - Tertiary: Advanced features and optimization

2. **Provide your specific content** by replacing placeholder data with:
   - Company/industry information
   - Actual images and media URLs
   - Real contact information
   - Specific service/product details

3. **Customize the carousel hero** by specifying:
   - Number of slides (recommended 3-5)
   - Content for each slide
   - Transition preferences
   - Auto-play settings

4. **Review generated output** for:
   - JSON structure compliance
   - Error handling implementation
   - Animation consistency
   - Responsive design
   - Accessibility features

5. **Test thoroughly** across:
   - Different browsers and devices
   - Various screen sizes
   - Network conditions
   - Accessibility tools

## Quality Checklist

- [ ] All JSON files validate against schema
- [ ] Error boundaries handle edge cases
- [ ] Loading states provide good UX
- [ ] Carousel functions smoothly
- [ ] Animations enhance rather than distract
- [ ] Mobile experience is optimized
- [ ] Site loads quickly
- [ ] Accessibility standards met
- [ ] SEO tags properly implemented
- [ ] Fail-safe logic works as expected
