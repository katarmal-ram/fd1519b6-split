
# JSON Structure Guide for Multi-Page Website

## Overview
This guide outlines the standardized JSON structure for creating multi-page websites with dynamic content loading.

## Page Structure

Each page should have its own JSON file in `/public/pages/` with this structure:

```json
{
  "meta": {
    "title": "Page Title",
    "description": "Page Description for SEO"
  },
  "hero": {
    "type": "video|image|carousel|split",
    "enabled": true,
    "title": "Hero Title",
    "subtitle": "Hero Subtitle",
    "description": "Hero Description",
    "backgroundVideo": "video_url", // for type: video
    "backgroundImage": "image_url", // for type: image
    "cta": {
      "primary": "Button Text",
      "secondary": "Secondary Button Text"
    }
  },
  "sections": {
    "sectionName": {
      "type": "section_type",
      "enabled": true,
      "title": "Section Title",
      "subtitle": "Section Subtitle",
      "items": [...] // Array of items specific to section type
    }
  }
}
```

## Section Types

### 1. Why Choose Us (`why-choose-us`)
```json
{
  "type": "why-choose-us",
  "enabled": true,
  "title": "Why Choose Us",
  "subtitle": "What makes us different",
  "items": [
    {
      "id": "unique_id",
      "icon": "icon_name", // lucide-react icon
      "title": "Feature Title",
      "description": "Feature description"
    }
  ]
}
```

### 2. Services (`services`)
```json
{
  "type": "services",
  "enabled": true,
  "title": "Our Services",
  "subtitle": "What we offer",
  "items": [
    {
      "id": "service_id",
      "title": "Service Name",
      "description": "Brief description",
      "detailedDescription": "Detailed description",
      "capabilities": ["capability1", "capability2"],
      "applications": ["application1", "application2"],
      "image": "image_url"
    }
  ]
}
```

### 3. Stats (`stats`)
```json
{
  "type": "stats",
  "enabled": true,
  "title": "Our Achievements",
  "subtitle": "Numbers that matter",
  "items": [
    {
      "number": "35+",
      "label": "Years Experience"
    }
  ]
}
```

### 4. Expertise (`expertise`)
```json
{
  "type": "expertise",
  "enabled": true,
  "title": "Our Industry Expertise",
  "subtitle": "Sectors we serve",
  "description": "Optional detailed description",
  "sectors": [
    {
      "id": "sector_id",
      "name": "Sector Name",
      "description": "Sector description",
      "icon": "icon_name", // lucide-react icon
      "applications": [
        "Application 1",
        "Application 2",
        "Application 3"
      ]
    }
  ]
}
```

### 5. Testimonials (`testimonials`)
```json
{
  "type": "testimonials",
  "enabled": true,
  "title": "Client Testimonials",
  "subtitle": "What our clients say",
  "items": [
    {
      "id": "testimonial_id",
      "name": "Client Name",
      "company": "Company Name",
      "designation": "Job Title",
      "content": "Testimonial content",
      "rating": 5,
      "image": "client_image_url"
    }
  ]
}
```

### 6. Featured Products (`featured-products`)
```json
{
  "type": "featured-products",
  "enabled": true,
  "title": "Featured Products",
  "subtitle": "Our bestsellers",
  "items": ["product_id_1", "product_id_2"] // References to products.json
}
```

### 7. Company Overview (`company-overview`)
```json
{
  "type": "company-overview",
  "enabled": true,
  "title": "About Our Company",
  "subtitle": "Our story",
  "items": [
    {
      "id": "overview",
      "content": "Company description paragraph",
      "highlights": ["highlight1", "highlight2", "highlight3"]
    }
  ]
}
```

### 8. Company Journey (`company-journey`)
```json
{
  "type": "company-journey",
  "enabled": true,
  "title": "Our Journey",
  "subtitle": "Milestones and achievements",
  "items": [
    {
      "year": "1985",
      "title": "Foundation",
      "description": "How we started"
    }
  ]
}
```

### 9. FAQs (`faqs`)
```json
{
  "type": "faqs",
  "enabled": true,
  "title": "Frequently Asked Questions",
  "subtitle": "Common questions answered",
  "items": [
    {
      "id": "faq_id",
      "question": "Question text?",
      "answer": "Answer text"
    }
  ]
}
```

### 10. Infrastructure (`infrastructure`)
```json
{
  "type": "infrastructure",
  "enabled": true,
  "title": "Our Infrastructure",
  "subtitle": "Modern facilities and equipment",
  "items": [
    {
      "id": "facility_id",
      "name": "Facility/Equipment Name",
      "description": "Description of facility or equipment",
      "specifications": ["spec1", "spec2"],
      "image": "facility_image_url"
    }
  ]
}
```

### 11. About Us Intro (`about-us-intro`)
```json
{
  "type": "about-us-intro",
  "enabled": true,
  "title": "About Us",
  "subtitle": "Company introduction",
  "description": "Detailed company description",
  "image": "company_image_url",
  "highlights": ["highlight1", "highlight2", "highlight3"]
}
```

### 12. Contact Form (`contact-form`)
```json
{
  "type": "contact-form",
  "enabled": true,
  "title": "Contact Us",
  "subtitle": "Get in touch",
  "description": "Contact form description"
}
```

## Animation Classes Available

The following animation classes are available for use in components:

- `animate-fade-in` - Fade in animation with slight upward movement
- `animate-scale-in` - Scale in animation
- `hover:scale-105` - Scale on hover
- `transition-all duration-300` - Smooth transitions
- `group` and `group-hover:` - Group hover effects

## Icon Support

The following icons are supported in the `expertise` section:
- `building2` - Construction/Architecture
- `zap` - Electrical/Electronics
- `car` - Automotive
- `home` - HVAC/Residential
- `plane` - Aerospace
- `ship` - Marine
- `factory` - Industrial
- `wrench` - Oil & Gas/Maintenance

## Error Handling

- If a section has `"enabled": false`, it will be skipped
- If a section structure is malformed, it will be logged to console and skipped
- If required fields are missing, default values or empty states are shown
- Page loading errors show user-friendly error messages

## File Naming Convention

- Page files: `/public/pages/{page-name}.json`
- Global config: `/public/config.json`
- Products data: `/public/products.json`

## Best Practices

1. Always include `enabled` field for sections (except hero)
2. Use consistent naming for IDs (kebab-case)
3. Validate JSON structure before deployment
4. Include meaningful error messages
5. Use semantic section types
6. Keep descriptions concise but informative
7. Optimize images for web use
8. Test all links and references
9. Use animations judiciously for better UX
10. Ensure mobile responsiveness in all sections
