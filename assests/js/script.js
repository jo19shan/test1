document.getElementById("yesBtn").addEventListener("click", function () {
    window.location.href = "happy.html";
  });
const bgMusic = document.getElementById("bgMusic");

let i = 0;

function typeLetterByLetter() {
  if (i < message.length) {
    if (message.charAt(i) === "\n") {
      typedText.innerHTML += "<br>";
    } else {
      typedText.innerHTML += message.charAt(i);
    }
    i++;
    setTimeout(typeLetterByLetter, 50); // typing speed
  } else {
    nextBtn.classList.remove("hidden");
  }
}

window.onload = () => {
  if (bgMusic) {
    bgMusic.volume = 0;
    bgMusic.play().catch(err => console.log("Autoplay blocked:", err));

    // Smooth volume fade-in
    let fade = setInterval(() => {
      if (bgMusic.volume < 0.3) {
        bgMusic.volume += 0.01;
      } else {
        clearInterval(fade);
      }
    }, 200);
  }

  typeLetterByLetter();
};

// Fallback: Start music on user interaction if blocked
function enablePlaybackOnInteraction() {
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch(err => console.log("Playback on interaction failed:", err));
  }
}

window.addEventListener("click", enablePlaybackOnInteraction);
window.addEventListener("touchstart", enablePlaybackOnInteraction);

// Button click → Go to final.html
nextBtn.addEventListener("click", () => {
  window.location.href = "final.html";
});
window.addEventListener("click", () => {
const music = document.getElementById("bgMusic");
if (music && music.paused) {
music.play();
}
});

window.onload = () => {
typeText();
};  