const text = `Jo 💖

I know you're not mine, and maybe you'll never be...
But that doesn't stop my heart from loving you — every single day.

You're the love of my life, and even if you're far,
I’ll always be your Shan from a distance.

Happy Birthday 💫
`;

const output = document.getElementById("finalMessage");
let i = 0;
const speed = 40;

function typeText() {
if (i < text.length) {
output.innerHTML += text.charAt(i);
i++;
setTimeout(typeText, speed);
}
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