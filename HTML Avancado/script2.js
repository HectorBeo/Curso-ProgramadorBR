let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
/*
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100,100)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(300,300)
ctx.lineTo(300, 400)
ctx.closePath();
ctx.lineWidth = 5;

ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();
*/



let circle = {
    x : 250,
    y : 250,
    raio : 100,
    inicio : 0,
    fim : 0
    
}

function drawCircle(c){
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);
    ctx.fillStyle = "blue"
    
    ctx.stroke();
    ctx.fill();
}

drawCircle(circle);

setInterval(function(){

    if(circle.fim < 2 * Math.PI)
    {
        circle.fim += 0.3;
        circle.x += 5;
    }

    drawCircle(circle);


}, 50);






