# 🚀 Quick Start Guide

## Installation (30 seconds)

1. **Download the Extension**
   ```bash
   git clone https://github.com/YOUR_USERNAME/read-aloud-extension.git
   ```

2. **Open Chrome Extensions**
   - Navigate to `chrome://extensions/`
   - Or click Menu (⋮) → Extensions → Manage Extensions

3. **Enable Developer Mode**
   - Toggle the switch in the top-right corner

4. **Load the Extension**
   - Click "Load unpacked"
   - Select the `read-aloud-extension` folder
   - ✅ Done!

## Usage (3 steps)

1. **Select text** on any webpage
2. **Click** the "Read Aloud" button that appears
3. **Listen** 🎧

## Troubleshooting

### Button doesn't appear
- Make sure you actually selected text
- Refresh the page and try again
- Check if the extension is enabled

### No audio plays
- Check your system volume
- Look at browser console (F12) for errors
- Verify API key is valid

### Button position is off
- This can happen on pages with complex layouts
- Try selecting text in a different area

## Advanced

### Change the Voice
Edit `scripts.js` line 40:
```javascript
model: '#g1_aura-asteria-en',  // Change this model ID
```

### Adjust Button Appearance
Edit `styles.css` to customize colors, size, etc.

## Need Help?

Open an issue on GitHub: [Issues](../../issues)
