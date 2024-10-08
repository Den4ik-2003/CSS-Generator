let blockContainer = document.getElementById("blockContainer");
let addblock = document.getElementById("addblock");
let removeBlock = document.getElementById("removeBlock");
let flexDirection = document.getElementById("flexDirection");
let justifyContent = document.getElementById("justifyContent")
let alignItems = document.getElementById("alignItems")
let block = document.getElementById("block")
let codeFlex = document.getElementById("codeFlex");
let countBlock = 0;

addblock.addEventListener("click", function () {
  let randomNumber = Random(10, 100)
  if (countBlock >= 19) {
    alert("Max 20 block");
  } else {
    countBlock++;
    let div = document.createElement("div");
    div.style.width = `${50 + randomNumber}px`;
    div.style.height = `${50 + randomNumber}px`;
    div.style.margin = "10px";
    div.style.backgroundColor = "#d7db03";
    blockContainer.appendChild(div);
  }
});

removeBlock.addEventListener("click", function () {
  if (countBlock > 0) {
    blockContainer.removeChild(blockContainer.lastChild);
    countBlock--;
  } else {
    alert("The last block cannot be deleted");
  }
});

function flexGenerator() {
    let selectedDirection = flexDirection.selectedIndex
    let selectedJustify = justifyContent.selectedIndex
    let selectedAlign = alignItems.selectedIndex
    
    blockContainer.style.flexDirection = `${flexDirection[selectedDirection].value}`
    blockContainer.style.justifyContent = `${justifyContent[selectedJustify].value}`
    blockContainer.style.alignItems = `${alignItems[selectedAlign].value}`

    codeFlex.innerText = `#flexBlock {
        display: flex;
        flex-wrap: wrap;
        flex-direction: ${flexDirection[selectedDirection].value};
        justify-content: ${justifyContent[selectedJustify].value};
        align-items: ${alignItems[selectedAlign].value};
      }`
}

flexDirection.addEventListener("input", function () {
    flexGenerator();
  });
  
  justifyContent.addEventListener("input", function() {
      flexGenerator()
  })
  alignItems.addEventListener("input", function() {
      flexGenerator()
  })
  
  codeFlex.addEventListener("input", function () {
    flexGenerator();
  });

  function Random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  }

  
  