# 📚 Dorky - Your Personal Reader

A Chrome extension that reads text aloud with natural AI voices. Meet Dorky - she reads anything you select on any webpage!

## ✨ Features

- 📖 Select any text and Dorky reads it to you
- 🎤 Ultra-realistic voice using ElevenLabs AI
- 💗 Cute pink button interface
- ⚡ Fast and responsive
- 🌐 Works on all websites

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/dorky-reader.git
cd dorky-reader
```

### 2. Set Up Your API Key

1. Get a free API key from [ElevenLabs](https://elevenlabs.io/app/settings/api-keys)
2. Copy `config.example.js` to `config.js`:
   ```bash
   cp config.example.js config.js
   ```
3. Open `config.js` and add your API key:
   ```javascript
   const ELEVENLABS_API_KEY = 'your_actual_api_key_here';
   ```

### 3. Install in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the `dorky-reader` folder
5. Done! 🎉

## 📖 Usage

1. Navigate to any webpage
2. Select text with your mouse
3. Click the pink 📖 button that appears
4. Listen to Dorky read! 🎧

## 🎨 Button States

- 📖 **Pink** = Ready to read
- ⏳ **Orange** = Loading audio
- 🔊 **Green** = Playing audio

## 🔒 Security

- **NEVER commit your `config.js` file** - it's already in `.gitignore`
- API key stays on your computer only
- Share `config.example.js` instead for others to set up

## 🛠️ Tech Stack

- **Manifest V3** - Latest Chrome Extension standard
- **Vanilla JavaScript** - No dependencies
- **ElevenLabs API** - AI-powered text-to-speech

## 📁 Project Structure

```
dorky-reader/
├── manifest.json          # Extension configuration
├── scripts.js             # Main functionality
├── config.js              # Your API key (NOT in git)
├── config.example.js      # Template for users
├── styles.css             # Button styles (optional)
├── icons/
│   └── icon.png          # Extension icon
└── README.md             # This file
```

## 🎤 Voice Options

Currently uses ElevenLabs "Rachel" voice. You can change the voice by editing `scripts.js` line 49:

```javascript
const voiceId = 'EXAVITQu4vr4xnSDxMaL'; // Rachel voice
```

Popular voice IDs:
- `EXAVITQu4vr4xnSDxMaL` - Rachel (female, natural)
- `21m00Tcm4TlvDq8ikWAM` - Adam (male, deep)
- `pNInz6obpgDQGcFmaJgB` - Sam (male, dynamic)

Find more at [ElevenLabs Voices](https://elevenlabs.io/docs/voices)

## 💰 Cost

- ElevenLabs free tier: 10,000 characters/month
- No credit card required
- Upgrade available for more usage

## 🐛 Troubleshooting

### Button doesn't appear
- Refresh the page
- Check that extension is enabled
- Make sure you selected text

### No audio plays
- Check your API key in `config.js`
- Verify you have characters remaining (check ElevenLabs dashboard)
- Open DevTools (F12) and check console for errors

### API Error 401
- Your API key is invalid or expired
- Get a new key from ElevenLabs

## 🤝 Contributing

Pull requests welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Test thoroughly
4. Submit PR

## 📄 License

MIT License - see LICENSE file

## 🙏 Acknowledgments

- [ElevenLabs](https://elevenlabs.io) for amazing TTS voices
- Chrome Extension documentation

---

**Made with ❤️ by lily1c**

**Dorky is ready to read!** 📚
