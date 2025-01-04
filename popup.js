// Add drag functionality
const floatingUI = document.getElementById("floating-ui");
let isDragging = false;
let offsetX, offsetY;

floatingUI.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    floatingUI.style.top = `${e.clientY - offsetY}px`;
    floatingUI.style.left = `${e.clientX - offsetX}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// Get necessary elements
const gifDisplay = document.getElementById("gif-display");
const answerText = document.getElementById("answer-text");
const themeSelector = document.getElementById("theme-selector");

// Handle theme changes
themeSelector.addEventListener("change", () => {
  const selectedTheme = themeSelector.value;
  gifDisplay.src = `assets/${selectedTheme}.gif`;
  answerText.textContent = `You selected ${selectedTheme}.`;
});

// Add mute and speaker functionality
let isMuted = false;

// Get mute and speaker buttons
const muteButton = document.getElementById("mute-button");
const speakerButton = document.getElementById("speaker-button");

// Function to handle text-to-speech
function speakText(text) {
  if (!isMuted) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
}

// Simulate getting an answer (replace this with real API integration later)
function getAnswer() {
  const answer = "This is your answer. Replace this text with real functionality.";
  answerText.textContent = answer;
  speakText(answer);
}

// Add event listener for mute button
muteButton.addEventListener("click", () => {
  isMuted = true;
  alert("Sound muted. Answers will now be displayed in text only.");
});

// Add event listener for speaker button
speakerButton.addEventListener("click", () => {
  isMuted = false;
  alert("Sound enabled. Answers will now be spoken and displayed in text.");
});

// Handle GIF click event
gifDisplay.addEventListener("click", () => {
  answerText.textContent = "Hello, my name is JARVIS, how can I help you?";
  startListeningAnimation();
});

// Simulate listening animation
function startListeningAnimation() {
  gifDisplay.classList.add("listening");
  setTimeout(() => {
    gifDisplay.classList.remove("listening");
  }, 3000);
}

// Simulate getting an answer on page load
window.onload = () => {
  getAnswer();
};
