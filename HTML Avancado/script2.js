let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");
let ctx2 = tela.getContext("2d");

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




