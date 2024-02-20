const $ = document

const surface = $.querySelector(".surface")
const car = $.querySelector(".car")
const img = $.querySelector("img")
let flag = true
const move = (event)=>{
    console.log(event);
    if(event.key ==="Enter"){
        surface.classList.toggle("moveRight")
        car.classList.toggle("suspension")

    }
    
    if(event.code ==="Space" ){
        if(flag){

            img.setAttribute("src", "images/Img_05.png")
            flag = false
        }else{
            img.setAttribute("src", "images/Img_06.png")
            flag = true

        }

    }
  
}

window.addEventListener("keyup" , move)