//let image = document.getElementById("like");

//image.addEventListener("click", clicar);
/*
function clicar(){
    //image.setAttribute("src", "./ensaio-7.jpg");
    //image.src = "./ensaio-7.jpg";

    //image.setAttribute("cor", "vermelho") //criar atributo que não existe

    
}
*/
let lista = document.getElementById("lista");
lista.dataset.n = "4";
//let num = parseInt(lista.getAttribute("num"));
let num = parseInt(lista.dataset.n);



let conteudo = ""

for(let i = 0; i < num; i++)
{
    conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;