let colorBlockScale = document.getElementById("colorBlockScale")
let scale = document.getElementById("scale")
let codeScale = document.getElementById("codeScale")
let squareScale = document.getElementById("squareScale")

function scaleGenerator() {
    squareScale.style.transform = `scale(${scale.value})`
    squareScale.style.backgroundColor = `${colorBlockScale.value}`

    codeScale.innerText = `#squareScale {
        transform: scale(${scale.value});
        background-color: ${colorBlockScale.value};
    }`
}

colorBlockScale.addEventListener('input', function() {
    scaleGenerator()
})
scale.addEventListener('input', function() {
    scaleGenerator()
})