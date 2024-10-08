let colorBlockBorder = document.getElementById("colorBlockBorder");
let border = document.getElementById("border");
let styleBorder = document.getElementById("styleBorder");
let borderColor = document.getElementById("borderColor");
let codeBorder = document.getElementById("codeBorder");
let squareBorder = document.getElementById("squareBorder");

function borderGenerate() {
  squareBorder.style.border = `${border.value}px ${styleBorder.value} ${borderColor.value}`;
  squareBorder.style.backgroundColor = colorBlockBorder.value;

  codeBorder.innerText = `#squareBorder {
        border: ${border.value}px ${styleBorder.value} ${borderColor.value};
        background-color: ${colorBlockBorder.value};
    }`;
}

colorBlockBorder.addEventListener("input", function() {
    borderGenerate()
})
border.addEventListener("input", function() {
    borderGenerate()
})
styleBorder.addEventListener("input", function() {
    borderGenerate()
})
borderColor.addEventListener("input", function() {
    borderGenerate()
})
