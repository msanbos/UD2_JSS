let contador = 0;
let valor = document.getElementById("valor");
valor.textContent = contador;

function actualizar(){
    valor.textContent = contador;
}
document.getElementById("inc").addEventListener("click",function(){
    contador++;
    actualizar();
})

document.getElementById("dec").addEventListener("click",function(){
    contador--;
    actualizar();
})

document.getElementById("reset").addEventListener("click",function(){
    contador = 0;
    actualizar();
})

document.getElementById("tema").addEventListener("click",function(){
    document.body.classList.toggle('oscuro');

})