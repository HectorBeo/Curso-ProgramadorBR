let quadrado = document.getElementById("quadrado");

let xInicial = 0;
let yInicial = 0;

function move(x, y){
    
    let posX = x + "px";
    let posY = y + "px";

    quadrado.style.top = posX;
    quadrado.style.left = posY;

}

setInterval(function(){

        move(xInicial++, yInicial++)


}, 20);