# How to Update Hero Images

This guide explains how to change the hero section slideshow images on the homepage.

## Quick Guide

1. Add your new images to the `images/` folder
2. Name them with the pattern: `Hero-X.jpg` or `Hero-X.png` (e.g., Hero-5.jpg)
3. Edit the file `hero-config.json` in the root folder
4. Update the list of images (see example below)
5. Commit and push your changes to GitHub

## Editing hero-config.json

Open `hero-config.json` in any text editor. You'll see something like:

```json
{
  "images": [
    {
      "filename": "Hero-1.png",
      "alt": "Redwood Shores waterfront view"
    },
    {
      "filename": "Hero-2.png",
      "alt": "Belmont Slough wildlife habitat"
    }
  ],
  "transitionSeconds": 6,
  "parallaxSpeed": 0.5
}
```

### To Add an Image:
Add a new object to the `images` array:
```json
{
  "filename": "Hero-5.jpg",
  "alt": "Description for screen readers"
}
```

**Important:** Make sure to add a comma after the previous image object!

### To Remove an Image:
Delete the entire object (including the curly braces) for that image. Remember to remove any trailing commas.

### To Reorder Images:
Cut and paste the objects in the order you want them to appear in the slideshow.

### To Change Timing:
Change the `transitionSeconds` value. Default is 6 seconds per image.

## Important Notes

- **Image Filenames**: Must match exactly (case-sensitive on some systems)
- **Image Location**: All images must be in the `images/` folder
- **File Formats**: Use .jpg or .png files
- **Number of Images**: You can have anywhere from 1 to 10+ images
- **Image Size**: Keep images under 2MB for best performance
- **Fallback**: If the config fails to load, the site will show the original 4 images

## Example: Switching to All 8 Images

```json
{
  "images": [
    {"filename": "Hero-1.png", "alt": "Waterfront view"},
    {"filename": "Hero-2.png", "alt": "Slough wildlife"},
    {"filename": "Hero-3.png", "alt": "Community"},
    {"filename": "Hero-4.png", "alt": "Neighborhood"},
    {"filename": "Hero-5.JPG", "alt": "Aerial view"},
    {"filename": "Hero-6.jpg", "alt": "Marina"},
    {"filename": "Hero-7.jpg", "alt": "Redwood Shores parks"},
    {"filename": "Hero-8.jpg", "alt": "Sunset over the bay"}
  ],
  "transitionSeconds": 5,
  "parallaxSpeed": 0.5
}
```

This configuration will create a 40-second slideshow cycle (8 images × 5 seconds each).

## Testing

After making changes:
1. Visit your website
2. Watch the hero section to confirm images load and cycle correctly
3. Check browser console (F12) for any errors
4. If images don't appear, verify filenames match exactly

## Troubleshooting

### Images don't appear
- Check that filenames in the JSON match the actual files exactly
- Verify file extensions (.jpg vs .JPG vs .png)
- Ensure images are in the `images/` folder

### Syntax Error in JSON
- Use a JSON validator: https://jsonlint.com/
- Common issues:
  - Missing commas between objects
  - Trailing comma after last object
  - Missing quotes around strings
  - Mismatched brackets

### Images load but don't cycle
- Clear your browser cache and refresh
- Check the browser console for JavaScript errors
- Verify the `transitionSeconds` value is set correctly

## Need Help?

If you encounter issues:
- Check that filenames match exactly (including .jpg vs .JPG)
- Ensure the JSON syntax is correct (commas, quotes, brackets)
- Verify images are in the `images/` folder
- Test your JSON at https://jsonlint.com/
- Check the browser console (F12 → Console tab) for error messages
