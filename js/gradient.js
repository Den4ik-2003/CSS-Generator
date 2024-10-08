let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let number = document.getElementById("number");
let codeGradient = document.getElementById("codeGradient");
let square = document.getElementById("square");

function color() {
  if (number.value < 0) {
    number.value = 0;
  } else if (number.value > 360) {
    number.value = 360;
  }

  if (number.value !== "") {
    square.style.background = `linear-gradient(${number.value}deg, ${color1.value}, ${color2.value})`;

    codeGradient.innerText = `#square {
            background: linear-gradient(${number.value}deg, ${color1.value}, ${color2.value});
        }`;
  } else {
    number.value = 0
  }
}

color1.addEventListener("input", function () {
  color();
});

color2.addEventListener("input", function () {
  color();
});

number.addEventListener("input", function () {
  color()
});
