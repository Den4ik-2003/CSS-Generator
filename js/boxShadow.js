let colorShadow = document.getElementById("colorShadow");
let horizontal = document.getElementById("horizontal");
let vertical = document.getElementById("vertical");
let blurShadow = document.getElementById("blur");
let spread = document.getElementById("spread");
let codeBoxShadow = document.getElementById("codeBoxShadow");
let squareBoxShadow = document.getElementById("squareBoxShadow");
let colorBlock = document.getElementById("colorBlock");

function boxShadowGenerate() {
  if (
    horizontal.value == "" ||
    vertical.value == "" ||
    blurShadow.value == "" ||
    spread.value == "" ||
    colorShadow.value == ""
  ) {
    alert("Enter data!");
    return;
  }

  squareBoxShadow.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${blurShadow.value}px ${spread.value}px ${colorShadow.value}`;

  squareBoxShadow.style.backgroundColor = `${colorBlock.value}`;

  codeBoxShadow.innerText = `#squareBoxShadow {
      box-shadow: ${horizontal.value}px ${vertical.value}px ${blurShadow.value}px ${spread.value}px ${colorShadow.value};
      background-color: ${colorBlock.value};
    }`;
}

colorShadow.addEventListener("input", function() {
  boxShadowGenerate()
})

horizontal.addEventListener("input", function() {
  boxShadowGenerate()
})
vertical.addEventListener("input", function() {
  boxShadowGenerate()
})
blurShadow.addEventListener("input", function() {
  boxShadowGenerate()
})
spread.addEventListener("input", function() {
  boxShadowGenerate()
})
colorBlock.addEventListener("input", function() {
  boxShadowGenerate()
})