// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get elements
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const hornImage = document.querySelector('#expose img');
  const playButton = document.querySelector('#expose button');
  const audioElement = document.querySelector('audio');
  
  // Create a single instance of JSConfetti
  const jsConfetti = new JSConfetti();
  
  // Set up event listeners
  hornSelect.addEventListener('change', updateHornSelection);
  volumeSlider.addEventListener('input', updateVolume);
  playButton.addEventListener('click', playSound);
  
  // Initial volume update
  updateVolume();
  
  function updateHornSelection() {
    const selectedHorn = hornSelect.value;
    
    // Don't proceed if "Select Horn" is selected
    if (selectedHorn === 'select') return;
    
    // Update horn image
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornImage.alt = `${selectedHorn.replace('-', ' ')}`;
    
    // Update audio source
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  }
  
  function updateVolume() {
    const volume = volumeSlider.value;
    
    // Set audio volume (convert from 0-100 to 0-1)
    const normalizedVolume = volume / 100;
    audioElement.volume = normalizedVolume;
    
    // Update volume icon based on level
    let volumeLevel = 0;
    if (volume > 66) {
      volumeLevel = 3;
    } else if (volume > 33) {
      volumeLevel = 2;
    } else if (volume > 0) {
      volumeLevel = 1;
    }
    
    volumeIcon.src = `assets/icons/volume-level-${volumeLevel}.svg`;
    volumeIcon.alt = `Volume level ${volumeLevel}`;
  }
  
  function playSound() {
    // Only play if a horn is selected
    if (audioElement.src) {
      audioElement.currentTime = 0; // Reset playback position
      audioElement.play();
      
      // Create confetti effect only when party horn is selected
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti({
          confettiRadius: 6,
          confettiNumber: 300,
        });
      }
    }
  }
}