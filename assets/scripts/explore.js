// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get elements
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');
  
  // Store image paths
  const normalFace = 'assets/images/smiling.png';
  const talkingFace = 'assets/images/smiling-open.png';
  
  // Initialize speech synthesis
  const synth = window.speechSynthesis;
  let voices = [];
  
  // Load voices when they're available
  function loadVoices() {
    voices = synth.getVoices();
    
    // Clear existing options except the default one
    while (voiceSelect.options.length > 1) {
      voiceSelect.options.remove(1);
    }
    
    // Add voices to select dropdown
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }
  
  // Chrome loads voices asynchronously
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }
  
  // Initial load attempt for other browsers
  loadVoices();
  
  // Set up event listener for the talk button
  talkButton.addEventListener('click', speak);
  
  function speak() {
    // Don't do anything if no text or no voice selected
    if (textArea.value === '' || voiceSelect.value === 'select') {
      return;
    }
    
    // Cancel any ongoing speech
    if (synth.speaking) {
      synth.cancel();
    }
    
    // Create utterance with the text from textarea
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    
    // Set selected voice
    const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    
    // Change face to talking when speech starts
    utterance.onstart = () => {
      faceImage.src = talkingFace;
    };
    
    // Change face back to normal when speech ends
    utterance.onend = () => {
      faceImage.src = normalFace;
    };
    
    // Handle any errors
    utterance.onerror = () => {
      faceImage.src = normalFace;
    };
    
    // Start speaking
    synth.speak(utterance);
  }
}