const innerPolygon = document.getElementById("inner-polygon");
const outer = document.getElementById("outer");
const closeBtn = document.getElementById("close-btn");
const message1 = document.getElementById("message-1");
const message2 = document.getElementById("message-2");
const heartsRow = document.querySelectorAll(".hearts-row");
const heartBtn = document.getElementById("heart-btn");
const music = document.getElementById("bg-music");
const confetti = document.getElementById("confetti");
const nameTitle = document.getElementById("nameTitle");

/* NAME PERSONALIZATION */
const name = prompt("What's your name? 💖");
if (name) {
  nameTitle.innerText = `Happy Valentine's Day, ${name} 💕`;
}

/* TOGGLE ENVELOPE */
function toggleEnvelope() {
  innerPolygon.classList.toggle("inner-open");
  outer.classList.toggle("outer-open");
  heartBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  message1.classList.toggle("hide");
  message2.classList.toggle("show");
  heartsRow.forEach(h => h.classList.toggle("animated"));

  music.play();
  launchConfetti();
}

/* CONFETTI HEARTS */
function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    confetti.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}