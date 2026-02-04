# Redwood Shores Coalition - Project Context

## Overview
Community advocacy website for the Redwood Shores Coalition, a group opposing the proposed "Redwood Life" biotech development in Redwood Shores, California. This will become the official site for a non-profit organization.

## Tech Stack
- **Frontend:** Static HTML, CSS, JavaScript (no framework)
- **Hosting:** GitHub Pages (planned) or similar static host
- **Content Management:** Google Sheets for dynamic content (News & Updates)
- **Version Control:** Git + GitHub

## Repository
- **GitHub:** https://github.com/gudale/redwood-shores-coalition
- **Owner:** gudale

## File Structure
```
├── .gitignore          # Git exclusions (ForAI/, .claude/)
├── index.html          # Main single-page site
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Navigation, animations, Google Sheets integration
├── images/             # Image assets
├── ForAI/              # Research and reference materials (local only, not in git)
│   ├── mobile-research.md     # Mobile responsiveness testing notes
│   └── forAI10X.png           # Reference screenshots
├── CLAUDE.md           # This file
└── .claude/            # Claude Code settings (local only, not in git)
```

## Key Features

### External Integrations

#### Google Sheets (News & Updates)
- News items are fetched from a published Google Sheet CSV
- **Sheet URL:** https://docs.google.com/spreadsheets/d/e/2PACX-1vRhSn3ZxfOXYESKFPPQ06owYfvt1xZ0WUPB9WjNJoBNwcXSSZlmixnjE8Mywo97FUXGpOAmnG_gxTOP/pub?output=csv
- **Columns:** date, title, content, link (optional)
- Limited to 3 most recent items
- Falls back to static HTML content if fetch fails
- Editors update the Google Sheet; changes appear on site automatically

#### Letter Generator (Take Action)
- Embedded webapp: https://firmauth-online2.vercel.app/
- 700px height iframe with responsive styling
- Allows users to generate letters to officials
- Positioned above action cards in Take Action section
- Header: "Make Your Voice Heard" (1.5rem, font-weight 600)
- Subtitle: "Generate a personalized letter to decision makers in minutes. Your input can make a difference." (1rem)
- Typography designed to be subordinate to section title while clearly identifying the tool

#### Google Forms (Contact)
- Contact form embedded via iframe
- Form ID: 1FAIpQLSc1i7ffB4w4Z5vjcE-ohTgQz-lCwnBYVKo9WZcwxvuQ5AYLyw
- 800px height with full-width responsive design

#### Google Slides Presentation (Our Concerns)
- Embedded presentation: https://docs.google.com/presentation/d/e/2PACX-1vRvSw8D911iDrLIpqR83qHObFsu8egIEmdtIlO5YoaPyW4kb9CZjba2rvcvwCKSIAx0Kv0Qxlww6l4k/embed
- Auto-play enabled with 2-second delay between slides
- Loops continuously
- 1280x749 medium slide size
- Positioned in Issue Section after "For detailed analysis..." text
- Uses aspect ratio technique (58.5% desktop, 75% mobile) for responsive design
- Lazy loading enabled for performance
- Provides visual data analysis of project impacts
- Title: "See the Data: Redwood Life Project Overview"
- Subtitle explains what users will see and why it matters

### Interactive Features
- **Hero Parallax Effect:** Slideshow images move at 0.5x scroll speed for depth
- **Floating CTA Box:** Appears after 800px scroll, dismissible with localStorage persistence
- **Scroll Reveal Animations:** Cards fade in and slide up as they enter viewport
- **Concern Card Animations:**
  - Desktop: Icons swing continuously on hover (infinite animation)
  - Mobile: Icons swing once when card scrolls into view
  - Cards lift and scale on hover
- **Enhanced Card Hover Effects:** Action and update cards with lift animations
- **Active Navigation Highlighting:** Nav links highlight based on scroll position
- **Smooth Scrolling:** All anchor links use smooth scroll behavior

### Site Sections
1. **Hero** - Slideshow (4 images) with parallax effect and call to action buttons
2. **About the Coalition** - Mission statement and community stats (500+ residents, 30+ years, 1 voice)
3. **What We Do** - Four key activities: Educate, Advocate, Protect, Organize
4. **Redwood Life: Our Concerns** - Six concern areas:
   - Traffic Impact
   - Construction Impacts (7-8 phases over 25+ years)
   - Environmental Impact (Belmont Slough, Priority Conservation Area)
   - Community Character
   - Safety Concerns
   - Process Transparency
   - Links to sister site (RedwoodLifePlan.com) for detailed analysis
   - Embedded Google Slides presentation showing data and visual analysis
5. **Take Action** - Letter generator embed (firmauth-online2.vercel.app) plus two action cards:
   - Stay Informed (links to Contact section)
   - Spread the Word (social sharing: Facebook, Twitter, Nextdoor)
6. **News & Updates** - Three latest items with dates; dynamic from Google Sheets
7. **Contact** - Google Form embed + direct email and social sharing links

## Local Development
- **IMPORTANT:** Opening `index.html` directly (`file://`) won't work for Google Sheets fetch due to CORS
- Use VS Code Live Server extension or `python -m http.server 8000`
- Access via `http://localhost:5500` or `http://localhost:8000`

## Related Resources
- **Sister site:** https://www.redwoodlifeplan.com (Google Sites)
  - Contains detailed pages on: Building Heights, Setbacks, Traffic, Construction Timeline, Biotech, Landfill, Environment, Levees & Water Rise, Events, Documentation
  - Cross-linked from multiple locations:
    - "Redwood Life: Our Concerns" section (learn more link)
    - News & Updates section CTA
    - Footer navigation ("Detailed Research" link)
  - Strategy: Main site focuses on community engagement, sister site provides in-depth research

## Conventions
- No build step required - edit files directly
- Commit messages should be descriptive
- Google Sheets preferred for content that non-technical users need to update
- All commits co-authored with Claude (Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>)

## Technical Implementation Details

### Animation System
- **Scroll Listeners:** Use `{ passive: true }` for performance
- **GPU Acceleration:** Animations use CSS `transform` and `opacity` properties
- **Keyframe Animations:** Defined in CSS with JavaScript class triggers
- **One-time Animations:** Check for class existence before adding (`!element.classList.contains('animate-in')`)
- **Intersection Detection:** Custom scroll-based reveal using `getBoundingClientRect()`

### Performance Optimizations
- **localStorage:** Used for floating CTA dismissal persistence
- **Passive Event Listeners:** All scroll listeners use passive mode
- **CSS Transforms:** Preferred over positional properties (top, left) for animations
- **Conditional Rendering:** Animations only trigger when elements are in viewport

### Code Organization
- **main.js:** Organized into sections with clear comment headers
- **styles.css:** Grouped by component with media queries at end
- **Responsive Design:** Mobile-first approach with progressive enhancement

## Mobile Responsiveness
- Site uses CSS media queries at 768px and 480px breakpoints
- Hamburger menu, stacking cards, responsive typography implemented
- Mobile-specific animations: Icons swing once when scrolled into view
- Floating CTA box adapts to mobile screen sizes
- All interactive elements optimized for touch devices
- See `ForAI/mobile-research.md` for testing notes and potential refinements

## Future Considerations
- Set up GitHub Pages for public hosting
- Consider embedding Google Docs for long-form content
- Non-profit status will affect branding/legal disclaimers
- Analytics integration for tracking engagement
- A/B testing for CTA effectiveness
- SEO optimization and meta tags refinement
- Accessibility audit (WCAG compliance)
