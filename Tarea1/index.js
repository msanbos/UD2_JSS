/* PARA COMPROBAR QUE ESTÁ ENLAZADO CON EL HTML
console.log("Hola!");
*/

//Declaramos las constantes
let temp = document.getElementById("temp");

//Creamos un Listener con un evento click en los botones
document.getElementById("centigrados").addEventListener("click", function(){
    const cent = (Number(temp.value) - 32 ) / 1.8;  
    salida.textContent = `${cent.toFixed(1)} Cº`; //No son comillas simples '', son ``  
})

document.getElementById("fahrenheit").addEventListener("click", function(){
    const fahr = (Number(temp.value) * 1.8 ) / 32;  
    salida.textContent = `${fahr.toFixed(1)} Fº`;  
})