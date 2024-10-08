let gradientBox = document.getElementById("gradientBox");
let dreg = 0;

setInterval(() => {
  if (dreg > 355) {
    dreg = 0;
  } else {
    dreg = dreg + 3;
    gradientBox.style.backgroundImage = `linear-gradient(${dreg}deg, #00d2ff, #adff2f, #ff6a6a)`;
  }
}, 100);
