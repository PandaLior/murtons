# Murtons Projects - Premium Roofing & Home Improvement Website

**Phase 1 Build - SEO-Optimized Static Website**

## Project Overview

This is a comprehensive, SEO-optimized website for Murtons Projects, a premium roofing and home improvement company based in Milnerton, Cape Town. The website implements advanced SEO strategies including semantic HTML5, schema.org structured data, E-E-A-T signals, NLP optimization, and silo architecture.

### Company Information (NAP)
- **Business Name:** Murtons Projects
- **Address:** 10 Northfield Place, Braselton Road, Milnerton Rural, Western Cape, 7441
- **Phone:** 074-141-1494
- **Email:** info@murtons.co.za
- **Website:** https://murtons.co.za/
- **Logo:** https://murtons.co.za/wp-content/uploads/2025/03/Murtons_Footer_Logo.webp
- **Service Radius:** 30km from Milnerton

### Brand Colors
- **Primary Red:** #E31837 (from MURTONS text - bold, professional, trustworthy)
- **Secondary Yellow:** #FDB913 (from hard hat - optimistic, premium)
- **Dark Gray:** #2D2D2D (text and accents)
- **White:** #FFFFFF (backgrounds, contrast)
- **Light Gray:** #F5F5F5 (section backgrounds)

---

## Phase 1 Deliverables (Current Status)

### ✅ Completed Files:
1. **CSS Framework:** `/css/styles.css` - Complete responsive stylesheet with brand colors
2. **Homepage:** `/index.html` - Full-featured homepage with all sections
3. **Roofing Services Parent Page:** `/roofing-services-cape-town/index.html`
4. **Roofing Durbanville Location Page:** `/roofing-services-cape-town/durbanville/index.html`
5. **JavaScript:** `/js/main.js` - Mobile menu, form validation, interactions

### 📋 Remaining Pages to Create (Templates Provided):

#### Service Parent Pages (5 more):
- `/waterproofing-services-cape-town/index.html`
- `/painting-services-cape-town/index.html`
- `/paving-services-cape-town/index.html`
- `/drainage-services-cape-town/index.html`
- `/renovation-services-cape-town/index.html`

#### Roofing Location Pages (4 more priority locations):
- `/roofing-services-cape-town/table-view/index.html`
- `/roofing-services-cape-town/constantia/index.html`
- `/roofing-services-cape-town/sea-point/index.html`
- `/roofing-services-cape-town/camps-bay/index.html`

#### Roofing Service-Specific Pages (10 pages):
- `/roofing-services-cape-town/roof-repairs/index.html`
- `/roofing-services-cape-town/roof-replacement/index.html`
- `/roofing-services-cape-town/tile-roofing/index.html`
- `/roofing-services-cape-town/metal-roofing/index.html`
- `/roofing-services-cape-town/flat-roof-solutions/index.html`
- `/roofing-services-cape-town/emergency-roof-repairs/index.html`
- `/roofing-services-cape-town/commercial-roofing/index.html`
- `/roofing-services-cape-town/residential-roofing/index.html`
- `/roofing-services-cape-town/roof-waterproofing/index.html`
- `/roofing-services-cape-town/roof-painting/index.html`

#### Essential Supporting Pages (8 pages):
- `/about-murtons-projects/index.html`
- `/contact-us/index.html`
- `/free-quote/index.html`
- `/our-process/index.html`
- `/portfolio/index.html`
- `/testimonials/index.html`
- `/service-areas/index.html`
- `/resources/index.html`

---

## SEO Strategy Implementation

### 1. Semantic HTML5 Structure
All pages use proper semantic elements:
- `<header>` for site header
- `<nav>` for navigation
- `<main>` for main content
- `<article>` for service cards
- `<aside>` for sidebars
- `<section>` for content sections
- `<footer>` for site footer

### 2. Schema.org Structured Data

Every page includes appropriate schema markup:

**Homepage:**
- RoofingContractor schema with full NAP
- Organization schema
- AggregateRating schema
- OpeningHoursSpecification

**Service Pages:**
- Service schema
- BreadcrumbList schema
- FAQPage schema

**Location Pages:**
- LocalBusiness/RoofingContractor schema with area served
- BreadcrumbList schema
- Service schema
- FAQPage schema

### 3. E-E-A-T Signals

**Experience:**
- "Recently relocated from Johannesburg with proven track record"
- Specific project examples and testimonials
- Before/after portfolio content

**Expertise:**
- Detailed technical information about roofing materials
- Problem-solution content
- Cape Town climate expertise
- Building code compliance knowledge

**Authoritativeness:**
- Company registration details
- Insurance and guarantee information
- Industry affiliations
- Professional certifications

**Trustworthiness:**
- Consistent NAP display
- Transparent pricing approach
- Clear service area (30km radius map)
- Privacy policy and terms
- Customer reviews with responses
- 10-year warranty/guarantee
- Insurance badges

### 4. NLP Optimization & Semantic Entities

Each page includes these semantic entities naturally:

**Roofing Entities:**
- Primary: roof repair, roof replacement, roofing contractor, roof installation
- Materials: tile roof, slate roof, metal roof, corrugated iron, IBR, Chromadek, concrete tiles, clay tiles
- Problems: roof leak, storm damage, missing tiles, wind damage
- Solutions: roof restoration, roof maintenance, re-roofing
- Quality: certified roofer, insured contractor, guaranteed workmanship

**Location Entities:**
- Cape Town, Western Cape, Northern Suburbs, Atlantic Seaboard
- Specific suburbs with local landmarks
- Geographic features (Table Bay, Tygerberg hills, etc.)

**Service Entities:**
- Waterproofing: torch-on, membrane, damp proofing, leak detection
- Painting: exterior painting, roof painting, UV-resistant
- Paving: driveway paving, block paving, concrete paving
- Drainage: stormwater, French drains, gutters, downpipes
- Renovations: home renovation, kitchen, bathroom, extensions

### 5. Silo Architecture & Internal Linking

**Structure:**
```
Homepage
├── Service Parent Pages (6)
│   ├── Service Type Pages (e.g., roof repairs, tile roofing)
│   └── Location Pages (e.g., Durbanville, Table View)
├── Supporting Pages (about, contact, portfolio, etc.)
└── Cross-linking between services and locations
```

**Linking Rules:**
- Homepage links to all service parent pages
- Service parent pages link to all child pages (types + locations)
- Location pages cross-link to other services in same location
- Service type pages link to relevant locations
- Footer provides site-wide navigation

### 6. Mobile-First Responsive Design

- Viewport meta tag on all pages
- Flexible grid layouts using CSS Grid and Flexbox
- Media queries for tablet (1024px) and mobile (768px)
- Mobile-specific features:
  - Hamburger navigation menu
  - Fixed click-to-call button
  - Touch-friendly buttons (minimum 48px)
  - Optimized images with lazy loading
  - Collapsible FAQ sections

### 7. Performance Optimization

- **Images:**
  - Lazy loading for below-fold images
  - WebP format with fallbacks
  - Appropriate sizing and compression
  - Alt text for SEO and accessibility

- **CSS:**
  - Single minified stylesheet
  - Critical CSS inline (to be implemented)
  - CSS custom properties for theming

- **JavaScript:**
  - Deferred loading
  - Vanilla JS (no framework overhead)
  - Event delegation for performance

- **Target Metrics:**
  - Page load time: < 2 seconds
  - PageSpeed score: 90+
  - First Contentful Paint: < 1.5s

### 8. Accessibility (WCAG 2.1 AA)

- Semantic HTML5 elements
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators visible
- Color contrast ratios 4.5:1+ for text
- Skip to main content link
- Form labels properly associated
- Proper heading hierarchy (H1 > H2 > H3)

---

## How to Create Additional Pages

### Service Parent Page Template

Use `/roofing-services-cape-town/index.html` as the template:

1. **Copy the file structure**
2. **Update meta tags:**
   - Title: "[Service] Services Cape Town | Murtons Projects"
   - Description: Include service name, benefits, call to action
   - Keywords: Service-specific terms

3. **Update H1:**
   - "Professional [Service] Services in Cape Town"

4. **Update schema:**
   - Change serviceType to match service
   - Update hasOfferCatalog with service-specific offerings

5. **Update content sections:**
   - Introduction with service overview
   - Service types offered
   - Service areas
   - FAQ section (8-10 questions)
   - Location-specific challenges

6. **Update internal links:**
   - Link to all child pages (service types + locations)
   - Cross-link to related services
   - Maintain breadcrumb navigation

### Location Page Template

Use `/roofing-services-cape-town/durbanville/index.html` as the template:

1. **Copy the file structure**
2. **Update meta tags:**
   - Title: "[Service] [Location] | Expert [Service Type] | Murtons Projects"
   - Description: Location-specific with local benefits

3. **Update H1:**
   - "[Service] Services in [Location] | Expert [Service Type] & Installation"

4. **Update schema:**
   - Change areaServed to specific location
   - Update description with location name

5. **Add location-specific content:**
   - Local landmarks (e.g., "Tygerberg hills" for Durbanville)
   - Property types (e.g., "family homes in Eversdal")
   - Local climate challenges
   - Nearby suburbs served
   - Distance/travel time from Milnerton

6. **Update FAQs:**
   - Make questions location-specific
   - Include local pricing references
   - Mention specific areas served
   - Reference local landmarks/features

7. **Update sidebar:**
   - Cross-link to other services in same location
   - Link to nearby locations
   - Keep NAP and contact information

### Key Location Entities by Suburb

**Durbanville:**
- Landmarks: Tygerberg hills, wine valley, wine farms
- Areas: Eversdal, Sonstraal Heights, Welgemoed, Vierlanden
- Property types: Security estates, family homes, wine farm buildings
- Challenges: Strong winds, temperature fluctuations, moss growth

**Table View:**
- Landmarks: Atlantic Ocean, Rietvlei wetlands, beachfront, MyCiTi bus
- Areas: Parklands, Sunningdale, West Beach
- Property types: Beachfront apartments, modern homes
- Challenges: Salt corrosion, strong coastal winds, sea spray

**Constantia:**
- Landmarks: Wine estates, Constantia Valley, heritage homes
- Areas: Upper Constantia, Lower Constantia, Tokai
- Property types: Heritage homes, wine estates, luxury properties
- Challenges: Tree coverage, shaded roofs, heritage requirements

**Sea Point:**
- Landmarks: Sea Point Promenade, Signal Hill, Atlantic Seaboard
- Areas: Sea Point, Fresnaye, Bantry Bay
- Property types: High-rise apartments, luxury penthouses
- Challenges: Salt corrosion, high-rise access, wind exposure

**Camps Bay:**
- Landmarks: Twelve Apostles, beaches, Victoria Road, mountain views
- Areas: Camps Bay, Bakoven, Glen Beach
- Property types: Luxury homes, beachfront properties, high-value estates
- Challenges: Extreme weather exposure, mountain winds, premium expectations

---

## Content Writing Guidelines

### Word Count Targets:
- Homepage: 1,500-2,000 words
- Service parent pages: 2,000-2,500 words
- Location pages: 1,500-2,000 words
- Service-specific pages: 1,200-1,500 words
- Supporting pages: 800-1,200 words

### Keyword Density:
- Primary keyword: 1-2% (natural occurrence)
- Secondary keywords: 0.5-1%
- LSI keywords: Throughout content naturally

### Content Structure:
1. **Opening paragraph (150-200 words):**
   - Include primary keyword in first sentence
   - Mention NAP (Name, Address, Phone)
   - Include call-to-action
   - State main benefit/USP

2. **Service overview (200-300 words):**
   - List specific offerings
   - Include semantic entities
   - Link to child pages

3. **Why Choose section (150-200 words):**
   - E-E-A-T signals
   - Experience, expertise, authority, trust
   - Guarantees, insurance, certifications

4. **Location-specific content (200-300 words):**
   - Local landmarks and features
   - Area-specific challenges
   - Property types in area
   - Nearby suburbs

5. **Process section (150-200 words):**
   - Step-by-step breakdown
   - Shows expertise and professionalism

6. **FAQ section (8-10 questions):**
   - Target long-tail keywords
   - Include pricing information
   - Address common concerns
   - Include phone number in answers

7. **CTA section:**
   - Clear call-to-action
   - Multiple contact methods
   - Urgency or value proposition

### Tone & Style:
- Professional yet approachable
- Confident but not boastful
- Focus on benefits and solutions
- Use active voice
- Short paragraphs (2-4 sentences)
- Bullet points for lists
- Bold important keywords (sparingly)

---

## Image Requirements

### Image Specifications:

**Hero Images:**
- Dimensions: 1920x1080px
- Format: WebP with JPG fallback
- Max file size: 300KB
- Alt text: Descriptive with keywords
- Examples:
  - "Professional roofing services in Cape Town - Murtons Projects team working on quality roof installation"
  - "Expert roof repairs in Durbanville - experienced roofing contractor fixing tile roof"

**Service Icons:**
- Dimensions: 60x60px
- Format: SVG (preferred) or PNG
- Consistent style across all services
- Colors: Use brand colors (red #E31837, yellow #FDB913)

**Portfolio Images:**
- Dimensions: 800x600px
- Format: WebP with JPG fallback
- Max file size: 200KB
- Before/after shots when possible
- Alt text: Specific project details

**Service Area Map:**
- Show 30km radius from Milnerton
- Highlight key service areas
- Include major roads (N1, N7, M5, etc.)
- Use brand colors for highlighting

### Image Naming Convention:
- Use descriptive names with keywords
- Separate words with hyphens
- Include location for location-specific images
- Examples:
  - `roofing-services-durbanville-hero.jpg`
  - `tile-roof-repair-cape-town.jpg`
  - `before-after-roof-replacement-table-view.jpg`

### Image Optimization:
1. Compress all images (TinyPNG, ImageOptim)
2. Use appropriate format (WebP for photos, SVG for icons)
3. Implement lazy loading for below-fold images
4. Use srcset for responsive images
5. Always include descriptive alt text

---

## Technical Implementation

### Meta Tags Template:

```html
<!-- Primary Meta Tags -->
<title>[Page Title] | Murtons Projects</title>
<meta name="description" content="[150-160 character description with keywords and CTA]">
<meta name="keywords" content="[5-10 relevant keywords, comma-separated]">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="[Full page URL]">
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Description]">
<meta property="og:image" content="[OG image URL - 1200x630px]">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page Title]">
<meta name="twitter:description" content="[Description]">
<meta name="twitter:image" content="[Twitter image URL]">

<!-- Canonical URL -->
<link rel="canonical" href="[Full page URL]">
```

### Schema Markup:

**LocalBusiness (use on location pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Murtons Projects",
  "address": { /* Full address */ },
  "geo": { /* Coordinates */ },
  "telephone": "+27741411494",
  "email": "info@murtons.co.za",
  "areaServed": { "@type": "City", "name": "[Location Name]" }
}
```

**Service (use on service pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[Service Name]",
  "provider": { /* Company details */ },
  "areaServed": { /* Service area */ }
}
```

**BreadcrumbList (use on all pages except homepage):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "URL" },
    { "@type": "ListItem", "position": 2, "name": "[Page Name]" }
  ]
}
```

**FAQPage (use on service and location pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text with keywords and phone number]"
      }
    }
  ]
}
```

---

## Deployment Instructions

### Pre-Deployment Checklist:

1. **Content Review:**
   - [ ] All NAP information is consistent across all pages
   - [ ] Phone number (074-141-1494) is formatted correctly
   - [ ] Email (info@murtons.co.za) is correct
   - [ ] All internal links work correctly
   - [ ] No broken links or 404 errors

2. **SEO Check:**
   - [ ] Each page has unique title and meta description
   - [ ] All pages have canonical URLs
   - [ ] Schema markup is valid (test with Google Rich Results Test)
   - [ ] All images have descriptive alt text
   - [ ] Heading hierarchy is correct (H1 > H2 > H3)
   - [ ] Breadcrumb navigation is consistent

3. **Technical Check:**
   - [ ] All CSS is loading correctly
   - [ ] JavaScript is working (mobile menu, forms)
   - [ ] Forms validate correctly
   - [ ] Mobile responsive on all devices
   - [ ] Page speed is optimized (test with PageSpeed Insights)

4. **Accessibility Check:**
   - [ ] Skip to main content link works
   - [ ] Keyboard navigation functions properly
   - [ ] Color contrast meets WCAG 2.1 AA standards
   - [ ] All forms have proper labels
   - [ ] ARIA attributes are correct

### Deployment Steps:

#### Option 1: Static Hosting (Recommended for Phase 1)

**Netlify:**
1. Create account at netlify.com
2. Connect Git repository
3. Build settings:
   - Build command: (none for static site)
   - Publish directory: `/` (root)
4. Deploy
5. Configure custom domain: murtons.co.za
6. Enable HTTPS (automatic with Let's Encrypt)

**Vercel:**
1. Create account at vercel.com
2. Import Git repository
3. Deploy with default settings
4. Configure custom domain
5. HTTPS enabled automatically

**GitHub Pages:**
1. Push to GitHub repository
2. Settings > Pages
3. Select branch to deploy
4. Configure custom domain
5. Enforce HTTPS

#### Option 2: Traditional Web Hosting

**Upload via FTP/SFTP:**
1. Connect to hosting server
2. Upload all files to public_html or www directory
3. Ensure folder structure is maintained
4. Set correct file permissions (644 for files, 755 for directories)
5. Test all pages

**cPanel:**
1. Login to cPanel
2. File Manager > public_html
3. Upload ZIP file
4. Extract files
5. Verify structure

### Post-Deployment:

1. **Submit Sitemap:**
   - Generate sitemap.xml
   - Submit to Google Search Console
   - Submit to Bing Webmaster Tools

2. **Set up Google Search Console:**
   - Verify domain ownership
   - Submit sitemap
   - Monitor indexing status
   - Check mobile usability

3. **Set up Google Analytics:**
   - Add tracking code to all pages
   - Set up goals (form submissions, phone clicks)
   - Monitor traffic and conversions

4. **Set up Google Business Profile:**
   - Claim/verify business listing
   - Ensure NAP matches website
   - Add photos and services
   - Link to website

5. **Monitor Performance:**
   - Check PageSpeed Insights weekly
   - Monitor Google Search Console for errors
   - Track keyword rankings
   - Monitor Core Web Vitals

---

## Maintenance & Updates

### Weekly Tasks:
- Review Google Search Console for errors
- Check for broken links
- Monitor page speed
- Review contact form submissions

### Monthly Tasks:
- Update content (add new projects to portfolio)
- Add new testimonials
- Review and update FAQ sections
- Check competitor rankings
- Update blog/resources section

### Quarterly Tasks:
- Comprehensive SEO audit
- Update service descriptions
- Refresh images
- Review and update pricing (if mentioned)
- Check all external links

---

## Analytics & Tracking

### Key Metrics to Monitor:

**Traffic Metrics:**
- Organic search traffic
- Direct traffic
- Referral traffic
- Geographic distribution

**Engagement Metrics:**
- Bounce rate (target: < 50%)
- Average session duration (target: > 2 minutes)
- Pages per session (target: > 3)
- Mobile vs desktop traffic

**Conversion Metrics:**
- Phone clicks (click-to-call)
- Form submissions (quote requests)
- Email clicks
- Service page views

**SEO Metrics:**
- Keyword rankings for target terms
- Backlink profile
- Domain authority
- Page authority for key pages

### Important Keywords to Track:

**Primary Keywords:**
- roofing Cape Town
- roofing services Cape Town
- roof repairs Cape Town
- roofing contractor Cape Town

**Location Keywords:**
- roofing Durbanville
- roofing Table View
- roofing Sea Point
- roofing Camps Bay
- roofing Constantia

**Service Keywords:**
- roof repairs [location]
- roof replacement [location]
- tile roofing Cape Town
- metal roofing Cape Town
- emergency roof repairs Cape Town

---

## Future Enhancements (Phase 2+)

### Functionality:
1. **Contact Form Backend:**
   - PHP or Node.js form processing
   - Email notifications
   - CRM integration
   - Auto-responder emails

2. **Quote Calculator:**
   - Interactive quote estimation
   - Service type selection
   - Area calculation
   - Instant pricing guide

3. **Project Gallery:**
   - Filterable portfolio
   - Before/after slider
   - Lightbox for images
   - Project case studies

4. **Client Portal:**
   - Project tracking
   - Document uploads
   - Invoice access
   - Appointment scheduling

5. **Blog/Resources:**
   - Roofing guides and tips
   - Maintenance advice
   - Industry news
   - Video tutorials

### Technical:
1. **CMS Integration:**
   - WordPress, Strapi, or Sanity
   - Easy content updates
   - Blog management

2. **Advanced SEO:**
   - Video schema
   - Review schema (aggregate reviews)
   - Local pack optimization
   - Featured snippets optimization

3. **Performance:**
   - Service Worker for offline support
   - Progressive Web App features
   - Image CDN
   - Static site generation with build process

---

## Support & Contact

For questions or assistance with this project:

**Technical Support:**
- Review this documentation thoroughly
- Check browser console for JavaScript errors
- Validate HTML: validator.w3.org
- Test schema: search.google.com/test/rich-results

**Content Support:**
- Follow templates provided
- Maintain consistent tone and style
- Use keyword naturally, avoid stuffing
- Include E-E-A-T signals in all content

---

## Version History

**Version 1.0 (Phase 1) - November 2025**
- Initial build with homepage, roofing services page, and Durbanville location page
- Complete CSS framework
- JavaScript for mobile menu and forms
- SEO optimization foundation
- Schema markup implementation

---

## License & Copyright

© 2025 Murtons Projects. All rights reserved.

This website and all its contents are proprietary to Murtons Projects. Unauthorized copying, distribution, or use of this code or content is prohibited.

---

## Quick Start Guide

1. **Review completed files:**
   - Homepage: `/index.html`
   - Roofing page: `/roofing-services-cape-town/index.html`
   - Durbanville page: `/roofing-services-cape-town/durbanville/index.html`

2. **Use templates to create remaining pages:**
   - Copy structure from completed pages
   - Update meta tags, H1, and schema
   - Customize content for specific service/location
   - Maintain internal linking structure

3. **Test locally:**
   - Open index.html in browser
   - Check responsive design on different devices
   - Test all navigation links
   - Verify forms work correctly

4. **Deploy:**
   - Choose hosting platform
   - Upload all files
   - Configure domain
   - Enable HTTPS

5. **Post-launch:**
   - Submit to search engines
   - Set up analytics
   - Monitor performance
   - Gather client feedback

---

**Built with semantic HTML5, modern CSS, vanilla JavaScript, and advanced SEO best practices.**

**Target: Rank #1 in Cape Town for roofing services and related keywords.**
