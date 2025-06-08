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

const devices = {
  ipod: {
    title: "iPod (2001)",
    img: "images/ipod.jpg",
    fact: "The iPod redefined music: 1,000 songs in your pocket."
  },
  imac: {
    title: "iMac G3 (1998)",
    img: "images/imac.jpg",
    fact: "With bold colors and curves, it changed computer design forever."
  },
  iphone: {
    title: "iPhone (2007)",
    img: "images/iphone.jpg",
    fact: "Apple’s most revolutionary product, merging phone, iPod, and internet."
  },
  ipad: {
    title: "iPad (2010)",
    img: "images/ipad.jpg",
    fact: "A magical glass slab — powerful, simple, and fun to use."
  }
};

document.querySelectorAll(".device-icons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.device;
    const device = devices[key];
    const info = document.getElementById("device-info");

    info.innerHTML = `
      <img src="${device.img}" alt="${device.title}">
      <h3>${device.title}</h3>
      <p>${device.fact}</p>
    `;
    info.style.display = "block";
  });
});
