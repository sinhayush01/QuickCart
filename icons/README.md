# PWA Icons

This directory contains the icons required for the Progressive Web Application.

## Required Icons

The following icons are needed for full PWA functionality:

- `icon-16x16.png` - 16x16 pixels (favicon)
- `icon-32x32.png` - 32x32 pixels (favicon)
- `icon-72x72.png` - 72x72 pixels (Android)
- `icon-96x96.png` - 96x96 pixels (Android)
- `icon-128x128.png` - 128x128 pixels (Chrome)
- `icon-144x144.png` - 144x144 pixels (Android)
- `icon-152x152.png` - 152x152 pixels (iOS)
- `icon-192x192.png` - 192x192 pixels (Android, Chrome)
- `icon-384x384.png` - 384x384 pixels (Android)
- `icon-512x512.png` - 512x512 pixels (Android, Chrome)

## Icon Requirements

- **Format**: PNG with transparency
- **Style**: Square with rounded corners (optional)
- **Colors**: Should work on both light and dark backgrounds
- **Purpose**: Should be recognizable at small sizes

## Generating Icons

You can generate these icons from a single high-resolution image using tools like:

1. **PWA Builder** (https://www.pwabuilder.com/imageGenerator)
2. **Real Favicon Generator** (https://realfavicongenerator.net/)
3. **Favicon.io** (https://favicon.io/)

## Placeholder Icons

For development purposes, you can create simple placeholder icons or use emoji-based icons. In production, replace these with proper branded icons.

## Testing

To test if your icons are working:

1. Open Chrome DevTools
2. Go to Application tab
3. Check the Manifest section
4. Verify all icons are loading correctly 