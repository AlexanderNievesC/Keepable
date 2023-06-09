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
 
    data=[
      {
        tile:"test",
        subtitle:"",
        color:""
      }
    ]

//Create new item
    function createItem(value){
      //Main personal item
      let card_item=document.createElement("div")
      card_item.setAttribute("class","pers_card-item")
      card_item.style.background=value.color
      let form=document.createElement("form")
      form.setAttribute("id","form")
      let input1=document.createElement("input")
      input1.setAttribute("class","title_target")
      input1.setAttribute("placeholder","The title for my new note")
      input1.value=value.title
      let input2=document.createElement("input")
      input2.setAttribute("class","subtitle_target-item")
      input2.setAttribute("placeholder","This is the body for the note")
      input2.value=value.subtitle
      let image_zone=document.createElement("button")
      image_zone.setAttribute("id","new_button_text")
      let img1=document.createElement("img")
      img1.setAttribute("class","icon")
      img1.setAttribute("id","acuarela")
      img1.src = "/images/palet.svg";
      let img2=document.createElement("img")
      img2.setAttribute("class","icon")
      img2.setAttribute("id","acuarela")
      img2.src = "/images/trash_gray.svg";

      //Palette
      let personal_palette = document.createElement("div")
      personal_palette.setAttribute("id","main-palette-personal")
      personal_palette.setAttribute("class","palette-hidden")
      let palette=document.createElement("div")
      palette.setAttribute("id","palette")

      let color1=document.createElement("div")
      color1.classList.add("palette-element")
      color1.style.backgroundColor="white"
      color1.style.border="1px solid #999B9E"
      let color2=document.createElement("div")
      color2.classList.add("palette-element")
      color2.style.backgroundColor="#F28B82"
      let color3=document.createElement("div")
      color3.classList.add("palette-element")
      color3.style.backgroundColor="#FBBC04"
      let color4=document.createElement("div")
      color4.classList.add("palette-element")
      color4.style.backgroundColor="#FFF475"
      let color5=document.createElement("div")
      color5.classList.add("palette-element")
      color5.style.backgroundColor="#CCFF90"
      let color6=document.createElement("div")
      color6.classList.add("palette-element")
      color6.style.backgroundColor="#A7FFEB"
      let color7=document.createElement("div")
      color7.classList.add("palette-element")
      color7.style.backgroundColor="#CBF0F8"
      let color8=document.createElement("div")
      color8.classList.add("palette-element")
      color8.style.backgroundColor="#AECBFA"
      let color9=document.createElement("div")
      color9.classList.add("palette-element")
      color9.style.backgroundColor="#D7AEFB"
      let color10=document.createElement("div")
      color10.classList.add("palette-element")
      color10.style.backgroundColor="#FDCFE8"

      
      img1.addEventListener("click",function(){
        personal_palette.classList.toggle("palette-hidden")
      })

      //Change color
      // let element_palet=document.querySelectorAll(".palette-element")
      // let new_target=document.querySelector(".pers_card-item")


      // element_palet.forEach(
      //   color=>{
      //     color.addEventListener("click", function(){
            
      //       let new_color=window.getComputedStyle(color).backgroundColor
      //       console.log(new_color)
      //       new_target.style.background=new_color
      //     })
      //   }
      // )

      //Remove item 
      let trash_zone=document.getElementById("trash_zone")
      console.log(trash_zone)

      img2.addEventListener("click",function(){
      card_item.remove()
      })

      form.append(input1,input2)
      image_zone.append(img1,img2)
      personal_palette.append(palette)
      palette.append(color1,color2,color3, color4, color5,color6,color7,color8,color9,color10)
      card_item.append(form,image_zone,personal_palette)

      return card_item
    
  }

  let title= document.querySelector(".title_target")
  let subtitle= document.querySelector(".subtitle_target")
  let button= document.querySelector("#text-detail")
  let color=document.querySelector("#target")
 
  button.addEventListener("click",function(){
    value={
      "title":title.value,
      "subtitle":subtitle.value,
      "color":color.style.backgroundColor
    }
    data.push(value)
    console.log(data)
    update(value)
  })
  
  //Show comment or personal item 
  function update(parameter){
    if (data.length>=1){
      let no_note=document.querySelector(".no_note")
      no_note.classList.add("note_hidden")
    
      let data_feed=document.querySelector(".js-note")
      data_feed.append(createItem(parameter))
    }
  }

  //Remove item

    

  








