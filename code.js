//  Toggle Palette

    let element=document.querySelector("#acuarela")
    let content=document.querySelector("#main-palette")

    element.addEventListener("click",function(){
      content.classList.toggle("palette-hidden")
    })
