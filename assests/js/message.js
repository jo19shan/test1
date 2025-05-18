const message = "Shan do not like you to be sad. Always stay happy ❤️";

const typedText = document.getElementById("typedMessage");
const nextBtn = document.getElementById("nextBtn");
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
// ❤️ Floating Hearts
const heartContainer = document.getElementById("heart-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

setInterval(createHeart, 300);
