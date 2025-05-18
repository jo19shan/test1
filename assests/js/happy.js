const yesBtn = document.getElementById("yesHappyBtn");
const noBtn = document.getElementById("noHappyBtn");
const message = document.getElementById("angryMessage");

yesBtn.addEventListener("click", () => {
  window.location.href = "message.html"; // next page
});

let moveCount = 0;

noBtn.addEventListener("touchstart", runAway);
noBtn.addEventListener("mouseover", runAway);

function runAway() {
  moveCount++;

  // Add shake or jump
  noBtn.classList.add("shake");
  setTimeout(() => noBtn.classList.remove("shake"), 300);

  // Move randomly around screen
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;

  // Show angry message
  message.classList.add("visible");
}
window.addEventListener("click", () => {
const music = document.getElementById("bgMusic");
if (music && music.paused) {
music.play();
}
});

window.onload = () => {
typeText();
};