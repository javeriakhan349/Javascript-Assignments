var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2")
var left = 0 
var left2= 0 ; 
function animateChar(event) { 
    console.log(event.keyCode);
    
    if( event.keyCode == 39  && left < 1460 ){
        left = left+10
    char1.style.left = left + "px"
    char1.style.transform= "scaleX(1)"
    char1.src = "https://www.fightersgeneration.com/characters/alicewf.gif"
    setTimeout(() =>{
        char1.src = "https://www.fightersgeneration.com/characters/alicestance.gif"
    },1000)
   
}

if( event.keyCode == 37 && left > 40){
    left = left-10 ;
    char1.style.left = left + "px"
    char1.style.transform = "scaleX(-1)"
    char1.src = "https://www.fightersgeneration.com/characters/alicewf.gif"
    setTimeout(() =>{
        char1.src = "https://www.fightersgeneration.com/characters/alicestance.gif"
    },1000)
}

if( event.keyCode == 32 ){
    char1.src = "https://www.fightersgeneration.com/characters/alice12.gif"
    setTimeout(()=>
        {
            char1.src = "https://www.fightersgeneration.com/characters/alicestance.gif"

        },2500)
}

if( event.keyCode == 68 && left2 < 1400){
    left2 = left2+10
    char2.style.left = left2 + "px"
    char2.style.transform = "scaleX(1)"
    char2.src = "https://www.fightersgeneration.com/characters/akuma-wkf.gif"
setTimeout(()=>
        {
            char2.src = "https://www.fightersgeneration.com/characters/akuma-alpha-stance.gif"

        },1000)
    }
if( event.keyCode == 65 && left2 > 40){
    left2 = left2-10
    char2.style.left = left2 + "px"
    char2.style.transform = "scaleX(-1)"
    char2.src = "https://www.fightersgeneration.com/characters/akuma-wkf.gif"
setTimeout(()=>
        {
            char2.src = "https://www.fightersgeneration.com/characters/akuma-alpha-stance.gif"

        },1000)

}
if ( event.keyCode == 70 ){
    char2.src = "https://www.fightersgeneration.com/characters/sf-akuma.gif"
    setTimeout(() => 
    {
        char2.src = "https://www.fightersgeneration.com/characters/akuma-alpha-stance.gif"
    }
,3000)
}
}
window.onkeydown = animateChar