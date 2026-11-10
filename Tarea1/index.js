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

        // 1. Estado del contador
        let contador = 0;

        // 2. Referencias a elementos del DOM
        const spanValor = document.getElementById('valor');
        const btnSumar = document.getElementById('sumar');
        const btnRestar = document.getElementById('restar');
        const btnReset = document.getElementById('reset');
        const btnTema = document.getElementById('tema');

        // 3. Función para actualizar la vista del contador
        function actualizar() {
            spanValor.textContent = contador;
        }

        // 4. Listeners para los botones del contador
        btnSumar.addEventListener('click', () => {
            contador++;
            actualizar();
        });

        btnRestar.addEventListener('click', () => {
            contador--;
            actualizar();
        });

        btnReset.addEventListener('click', () => {
            contador = 0;
            actualizar();
        });

        // 5. Reto: Modo Oscuro + Opcionales (localStorage y texto dinámico)
        function actualizarTextoTema() {
            if (document.body.classList.contains('oscuro')) {
                btnTema.textContent = 'Modo claro';
            } else {
                btnTema.textContent = 'Cambiar tema';
            }
        }

        // Cargar tema guardado en localStorage al iniciar
        const temaGuardado = localStorage.getItem('tema');
        if (temaGuardado === 'oscuro') {
            document.body.classList.add('oscuro');
        }
        actualizarTextoTema();

        // Evento toggle para el botón de tema
        btnTema.addEventListener('click', () => {
            document.body.classList.toggle('oscuro');
            
            // Guardar preferencia en localStorage
            if (document.body.classList.contains('oscuro')) {
                localStorage.setItem('tema', 'oscuro');
            } else {
                localStorage.setItem('tema', 'claro');
            }

            actualizarTextoTema();
        });