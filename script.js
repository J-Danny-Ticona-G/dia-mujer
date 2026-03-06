function mostrarMensaje(){

document.getElementById("mensaje").innerHTML=
"Mi amor ❤️<br><br>Hoy quiero recordarte lo maravillosa que eres y lo mucho que me importas. Gracias por tu amor, por tu sonrisa y por cada momento hermoso que compartimos, se que vamos a llegar lejos y vamos a poder cumplir todos nuestros sueños y metas, sigue siendo la mujer luchadora de la que me enamore.<br><br>Eres una mujer increíble y me siento muy afortunado de tenerte en mi vida. 🌹<br><br>Te amo muchísimo mi amor.";

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

