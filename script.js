const depthItems = document.querySelectorAll(".depth");

function move(e) {
  const x = (e.clientX / window.innerWidth - 0.5) * 12;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;

  depthItems.forEach((el, i) => {
    const z = (i + 1) * 6;
    el.style.transform = `
      perspective(1200px)
      rotateY(${x}deg)
      rotateX(${-y}deg)
      translateZ(${z}px)
    `;
  });
}

if (window.innerWidth > 768) {
  window.addEventListener("mousemove", move);
}
