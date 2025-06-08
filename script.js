document.addEventListener("DOMContentLoaded", () => {
  const events = document.querySelectorAll(".event");
  const timelineLine = document.querySelector(".timeline-line");

  let maxOffset = 0;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        const eventBottom = entry.target.offsetTop + entry.target.offsetHeight / 2;
        if (eventBottom > maxOffset) {
          maxOffset = eventBottom;
          timelineLine.style.height = `${maxOffset}px`;
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  events.forEach(event => observer.observe(event));
});
