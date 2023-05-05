function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+ min)
}

function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "🪨"
    }else if(jugada == 2){
        resultado = "📃"
    }else if(jugada == 3){
       resultado = "✂️"
    }else{
        resultado = "Mal elegido"
    }
    return resultado
}

let player = 0
let PC = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3){
    PC = aleatorio(1,3)
    player = prompt("Elige: 1 para piedra, 2 para papel o 3 para tijera")
    //aler("Elegiste " + player)
    
    alert(`PC eligio: ${eleccion(PC)}`)
    alert(`Tu eliges: ${eleccion(player)}`)
    
    //Combate
    if(PC == player){
        alert("Empate")
    }else if((player == 1 && PC == 3) || (player == 2 && PC == 1) || (player == 3 && PC == 2)) {
        alert("Ganaste")
        triunfos++
    }else {
        alert("Perdiste")
        perdidas++
    }
}

alert(`Ganaste ${triunfos} veces y perdiste ${perdidas} veces`)
