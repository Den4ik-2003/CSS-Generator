let colorBlockRotate = document.getElementById("colorBlockRotate");
let angle = document.getElementById("angle");
let codeRotate = document.getElementById("codeRotate");
let squareRotate = document.getElementById("squareRotate");

function rotateGenerator() {
  squareRotate.style.transform = `rotate(${angle.value}deg)`;
  squareRotate.style.backgroundColor = `${colorBlockRotate.value}`;

  codeRotate.innerText = `
    #squareRotate {
        transform: rotate(${angle.value}deg);
        background-color: ${colorBlockRotate.value};
    }`;
}

colorBlockRotate.addEventListener('input', function() {
    rotateGenerator()
})
angle.addEventListener('input', function() {
    rotateGenerator()
})