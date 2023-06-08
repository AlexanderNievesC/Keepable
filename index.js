//  Show Palette

    let element=document.querySelector("#acuarela")
    let content=document.querySelector("#palette-zone")

    element.addEventListener("click",function(){
      content.classList.toggle("palette-hidden")
    })

// Modify card
    let element_palet=document.querySelectorAll(".palette-element")
    let target=document.getElementById("target")

    element_palet.forEach(
      color=>{
        color.addEventListener("click", function(){

          let new_color=window.getComputedStyle(color).backgroundColor
          target.style.background=(new_color)
        })
      }
    )

  //Show/hide notes





    


// Add Card to Main




