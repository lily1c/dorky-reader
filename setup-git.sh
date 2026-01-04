#!/bin/bash

# 🚀 GitHub Setup and Push Script for Read Aloud Extension
# Run this script to initialize git and push to GitHub

echo "🔧 Setting up Git repository..."

# Initialize git if not already done
if [ ! -d .git ]; then
    git init
    echo "✅ Git initialized"
else
    echo "⚠️  Git already initialized"
fi

# Add all files
git add .

# Commit
echo "📝 Creating initial commit..."
git commit -m "Initial commit: Read Aloud Chrome Extension

- Text-to-speech functionality
- Clean UI with hover effects
- Works on all websites
- AIML API integration"

echo ""
echo "=============================================="
echo "🎯 Next Steps:"
echo "=============================================="
echo ""
echo "1. Create a new repository on GitHub:"
echo "   → Go to https://github.com/new"
echo "   → Name it: read-aloud-extension"
echo "   → Make it public"
echo "   → DON'T initialize with README (we already have one)"
echo ""
echo "2. Run these commands (replace YOUR_USERNAME):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/read-aloud-extension.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "=============================================="
echo "⚠️  IMPORTANT SECURITY NOTE:"
echo "=============================================="
echo ""
echo "The API key is currently hardcoded in scripts.js"
echo "Before making the repo public, consider:"
echo ""
echo "1. Remove the API key from scripts.js"
echo "2. Add instructions for users to get their own key"
echo "3. Or implement proper key storage using Chrome storage"
echo ""
echo "✅ Git setup complete!"
echo ""
