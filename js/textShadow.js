let colorText = document.getElementById("colorText");
let shiftRight = document.getElementById("shiftRight");
let shiftDown = document.getElementById("shiftDown");
let blurText = document.getElementById("blurText");
let colorShadow = document.getElementById("colorShadow");
let codeTextShadow = document.getElementById("codeTextShadow");
let textShadow = document.getElementById("textShadow");

function textShadowGenerate() {
  textShadow.style.textShadow = `${shiftRight.value}px ${shiftDown.value}px ${blurText.value}px ${colorShadow.value}`;
  textShadow.style.color = colorText.value;

  codeTextShadow.innerText = `#wordTextShadow {
  text-shadow: ${shiftRight.value}px ${shiftDown.value}px ${blurText.value}px ${colorShadow.value};
  color: ${colorText.value}; 
}`;
}

colorText.addEventListener('input', function() {
  textShadowGenerate()
})
shiftRight.addEventListener('input', function() {
  textShadowGenerate()
})
shiftDown.addEventListener('input', function() {
  textShadowGenerate()
})
blurText.addEventListener('input', function() {
  textShadowGenerate()
})
colorShadow.addEventListener('input', function() {
  textShadowGenerate()
})
