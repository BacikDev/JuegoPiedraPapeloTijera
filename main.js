let player = null
let PC = 3

player = prompt("Elige: 1 para piedra, 2 para papel o 3 para tijera")
//aler("Elegiste " + player)

//Player
if(player == 1){
    alert("Elegiste 🪨")
}else if(player == 2){
    alert("Elegiste 📃")
}else if(player == 3){
    alert("Elegiste ✂️")
}else{
    alert("Elegiste perder")
}

//PC
if(PC == 1){
    alert("PC elige 🪨")
}else if(PC == 2){
    alert("PC elige 📃")
}else if(PC == 3){
    alert("PC elige ✂️")
}else{
    alert("PC elige perder")
}

//Combate
if(PC == player){
    alert("Empate")
}else if(player == 1 && PC == 3){
    alert("Ganaste")
}else if(player == 2 && PC == 1){
    alert("Ganaste")
}else if(player == 3 && PC == 2){
    alert("Ganaste")
}else{
    alert("Perdiste")
}