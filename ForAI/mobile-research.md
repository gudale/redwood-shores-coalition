# Mobile Friendliness Research - Feb 2026

## Current Status
Site uses CSS media queries at 768px and 480px breakpoints.

## Already Mobile-Friendly
- Mobile hamburger menu at 768px
- Hero buttons stack vertically
- Grids (concerns, action cards) collapse to single column
- Footer stacks and centers
- Reduced motion support
- Responsive font sizing with clamp()

## Potential Issues to Test on Device

| Element | Issue | Recommendation |
|---------|-------|----------------|
| **What We Do grid** | Uses `minmax(280px)` - may work but not explicit | Add single-column rule at 768px |
| **Google Form iframe** | Fixed 800px height | Reduce to ~600px on mobile |
| **Contact footer** | Has flex-wrap but may crowd | Stack vertically on mobile |
| **Hero slideshow** | object-fit: cover should work | Verify images don't crop awkwardly |
| **Hero text box** | Backdrop blur may lag on older devices | Test performance |
| **Nav menu** | 6 items now | Verify all fit in slide-out menu |

## Recommended Fixes (when ready)
1. Add `.whatwedo-grid { grid-template-columns: 1fr; }` to 768px media query
2. Add `.form-embed iframe { height: 600px; }` to 768px media query
3. Add `.contact-footer { flex-direction: column; }` to 768px media query
4. Test hero images on actual mobile device

## Files to Modify
- `css/styles.css` - Add rules to existing @media blocks around line 970
