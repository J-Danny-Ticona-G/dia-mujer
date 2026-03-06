function mostrarMensaje(){

document.getElementById("mensaje").innerHTML=
"Mi amor ❤️<br><br>Hoy en el Día de la Mujer quiero recordarte lo maravillosa que eres. Gracias por tu amor, por tu sonrisa y por cada momento hermoso que compartimos.<br><br>Eres una mujer increíble y me siento muy afortunado de tenerte en mi vida. 🌹<br><br>Te quiero muchísimo.";

}

/* crear corazones flotando */

function crearCorazones(){

const corazon=document.createElement("div")

corazon.classList.add("corazon")

corazon.innerHTML="❤️"

corazon.style.left=Math.random()*100+"vw"

corazon.style.fontSize=Math.random()*20+10+"px"

document.body.appendChild(corazon)

setTimeout(()=>{
corazon.remove()
},8000)

}

setInterval(crearCorazones,400)