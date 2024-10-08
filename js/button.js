let colorButton = document.getElementById("colorButton")
let paddingTopBottomButton = document.getElementById("paddingTopBottomButton")
let paddingLeftRightButton = document.getElementById("paddingLeftRightButton")
let fontSizeText = document.getElementById("fontSizeText")
let colorBorderButton = document.getElementById("colorBorderButton")
let borderButtonWidth = document.getElementById("borderButtonWidth")
let borderButtonRadius = document.getElementById("borderButtonRadius")
let buttonStyle = document.getElementById("buttonStyle")
let codeBoxShadow = document.getElementById("codeBoxShadow")
let colorTextButton = document.getElementById("colorTextButton")

function buttonGenerate() {
    buttonStyle.style.backgroundColor = `${colorButton.value}`
    buttonStyle.style.padding = `${paddingTopBottomButton.value}px ${paddingLeftRightButton.value}px`
    buttonStyle.style.fontSize = `${fontSizeText.value}px`
    buttonStyle.style.border = `${borderButtonWidth.value}px solid ${colorBorderButton.value}`
    buttonStyle.style.borderRadius = `${borderButtonRadius.value}px`
    buttonStyle.style.color = `${colorTextButton.value}`

    codeBoxShadow.innerText = `#buttonStyle {
        padding: ${paddingTopBottomButton.value}px ${paddingLeftRightButton.value}px;
        font-size: ${fontSizeText.value}px;
        background-color: ${colorButton.value};
        border-radius: ${borderButtonRadius.value}px;
        color: ${colorTextButton.value};
        border: ${borderButtonWidth.value}px solid ${colorBorderButton.value};
        }`
}

colorButton.addEventListener('input', function() {
    buttonGenerate()
})

paddingTopBottomButton.addEventListener('input', function() {
    buttonGenerate()
})

paddingLeftRightButton.addEventListener('input', function() {
    buttonGenerate()
})

fontSizeText.addEventListener('input', function() {
    buttonGenerate()
})

colorBorderButton.addEventListener('input', function() {
    buttonGenerate()
})

borderButtonWidth.addEventListener('input', function() {
    buttonGenerate()
})

borderButtonRadius.addEventListener('input', function() {
    buttonGenerate()
})

colorTextButton.addEventListener('input', function() {
    buttonGenerate()
})