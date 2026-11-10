let contador = 0;
let valor = document.getElementById("valor");
let btninc = document.getElementById("inc");
let btndec = document.getElementById("dec");
let btnres = document.getElementById("reset");
let btntema = document.getElementById("tema");
valor.textContent = contador;

document.getElementById("inc").addEventListener("click",function(){
    contador++;
    valor.textContent = contador;
})

document.getElementById("dec").addEventListener("click",function(){
    contador--;
    valor.textContent = contador;
})

document.getElementById("reset").addEventListener("click",function(){
    contador = 0;
    valor.textContent = contador;
})

document.getElementById("inc").addEventListener("click",function(){
    contador++;
    valor.textContent = contador;
})