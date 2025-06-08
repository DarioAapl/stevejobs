// script.js
const events = document.querySelectorAll(".event");

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  events.forEach(event => {
    const rect = event.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      event.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);
