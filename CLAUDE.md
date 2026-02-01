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
├── index.html          # Main single-page site
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Navigation, animations, Google Sheets integration
├── images/             # Image assets
└── CLAUDE.md           # This file
```

## Key Features

### Google Sheets Integration (News & Updates)
- News items are fetched from a published Google Sheet CSV
- **Sheet URL:** https://docs.google.com/spreadsheets/d/e/2PACX-1vRhSn3ZxfOXYESKFPPQ06owYfvt1xZ0WUPB9WjNJoBNwcXSSZlmixnjE8Mywo97FUXGpOAmnG_gxTOP/pub?output=csv
- **Columns:** date, title, content, link (optional)
- Limited to 3 most recent items
- Falls back to static HTML content if fetch fails
- Editors update the Google Sheet; changes appear on site automatically

### Site Sections
1. Hero - Main call to action
2. About the Coalition - Mission and stats
3. The Issue - Concerns about Redwood Life development (traffic, environment, schools, etc.)
4. Take Action - Petition, meetings, contact reps, newsletter signup, donate
5. News & Updates - Dynamic from Google Sheets
6. Contact - Form and social links

## Local Development
- **IMPORTANT:** Opening `index.html` directly (`file://`) won't work for Google Sheets fetch due to CORS
- Use VS Code Live Server extension or `python -m http.server 8000`
- Access via `http://localhost:5500` or `http://localhost:8000`

## Related Resources
- **Existing content site:** https://www.redwoodlifeplan.com (Google Sites)
  - Contains detailed pages on: Building Heights, Setbacks, Traffic, Construction Timeline, Biotech, Landfill, Environment, Levees & Water Rise, Events, Documentation
  - Content may be migrated/integrated into this site

## Conventions
- No build step required - edit files directly
- Commit messages should be descriptive
- Google Sheets preferred for content that non-technical users need to update

## Future Considerations
- Set up GitHub Pages for public hosting
- Consider embedding Google Docs for long-form content
- Google Forms for contact/petition forms
- Non-profit status will affect branding/legal disclaimers
