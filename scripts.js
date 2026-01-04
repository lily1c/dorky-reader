// ===============================
// Dorky - Your Personal Reader
// Using ElevenLabs API - Ultra Realistic Voices
// ===============================

console.log('📚 Dorky is ready to read!');

// Store selected text
let selectedText = '';

// ===============================
// Button click handler
// ===============================
async function handleButtonClick(event) {
  event.preventDefault();
  event.stopPropagation();
  
  console.log('🔴 BUTTON CLICKED!!!');
  console.log('🔴 Selected text:', selectedText);
  
  if (!selectedText || selectedText.length === 0) {
    alert('No text selected!');
    return;
  }
  
  if (!ELEVENLABS_API_KEY || ELEVENLABS_API_KEY === 'YOUR_API_KEY_HERE') {
    alert('⚠️ Please add your ElevenLabs API key to scripts.js');
    return;
  }
  
  const overlay = document.getElementById('read-aloud-overlay');
  if (!overlay) return;
  
  // Show loading state
  overlay.innerText = '⏳';
  overlay.style.backgroundColor = '#FFA500';  // Orange
  
  try {
    console.log('🔵 Sending request to ElevenLabs API...');
    
    // Using ElevenLabs "Rachel" voice (premium natural voice)
    // You can change the voice ID - see https://elevenlabs.io/docs/voices
    const voiceId = 'EXAVITQu4vr4xnSDxMaL'; // Rachel voice
    
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY
      },
      body: JSON.stringify({
        text: selectedText,
        model_id: 'eleven_turbo_v2_5',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }
    
    console.log('✅ Got audio response from ElevenLabs');
    
    const audioBlob = await response.blob();
    const audioURL = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioURL);
    
    // Show playing state
    overlay.innerText = '🔊';
    overlay.style.backgroundColor = '#32CD32';  // Lime green
    
    console.log('▶️ Playing audio...');
    await audio.play();
    
    audio.addEventListener('ended', () => {
      URL.revokeObjectURL(audioURL);
      console.log('✅ Playback finished');
      
      // Reset button
      overlay.innerText = '📖';
      overlay.style.backgroundColor = '#FF69B4';  // Hot pink
    });
    
  } catch (err) {
    console.error('❌ TTS error:', err);
    alert(`Error: ${err.message}`);
    
    // Reset button on error
    overlay.innerText = '📖';
    overlay.style.backgroundColor = '#FF69B4';  // Hot pink
  }
}

// ===============================
// Create & show button
// ===============================
function showReadAloudButton(rect) {
  console.log('📚 Dorky is creating the reading button...');
  console.log('📚 Selection rect:', rect);
  
  // Remove old overlay
  const old = document.getElementById('read-aloud-overlay');
  if (old) {
    console.log('📚 Removing old button');
    old.remove();
  }
  
  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'read-aloud-overlay';
  
  // INLINE STYLES - Pretty small icon
  overlay.style.position = 'fixed';
  overlay.style.backgroundColor = '#FF69B4';  // Hot pink
  overlay.style.color = 'white';
  overlay.style.padding = '0';
  overlay.style.fontSize = '24px';
  overlay.style.fontWeight = 'normal';
  overlay.style.border = 'none';
  overlay.style.borderRadius = '50%';  // Perfect circle
  overlay.style.zIndex = '999999';
  overlay.style.cursor = 'pointer';
  overlay.style.top = '100px';
  overlay.style.left = '100px';
  overlay.style.width = '50px';
  overlay.style.height = '50px';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.boxShadow = '0 4px 12px rgba(255, 105, 180, 0.4)';
  overlay.style.transition = 'all 0.3s ease';
  
  overlay.innerText = '📖';  // Book emoji
  
  // Add click handler
  overlay.addEventListener('click', handleButtonClick);
  
  document.body.appendChild(overlay);
  
  console.log('✅ Dorky button ready!');
  console.log('✅ Position: top=100px, left=100px');
}

// ===============================
// Detect text selection
// ===============================
document.addEventListener('mouseup', (event) => {
  // IMPORTANT: Don't process if clicking the button itself
  const overlay = document.getElementById('read-aloud-overlay');
  if (overlay && overlay.contains(event.target)) {
    console.log('🛑 Clicked on button, ignoring mouseup');
    return;
  }
  
  const selection = window.getSelection();
  const text = selection.toString().trim();
  
  console.log('📝 Selected:', text.substring(0, 50));
  console.log('📏 Length:', text.length);
  
  if (!text) {
    if (overlay) overlay.remove();
    return;
  }
  
  selectedText = text;
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  
  showReadAloudButton(rect);
});

console.log('✅ Dorky is ready to read!');
