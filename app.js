let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   else { 
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) { 
        asignarTextoElemento('p','El número secreto es menor');   
    }   else {
        asignarTextoElemento('p','El número secreto es mayor');  
    } 
    intentos++;
    limpiarCaja();
        }  
        return;  
}    
    function limpiarCaja() {
        document.querySelector('#valorUsuario').value = '';
    }


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta en la lista 
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {  
    asignarTextoElemento('p','ya se sortearon todos los numero');
    }   else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }   else {
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;   
        }
    }   
}
function condicionesIniciales() {
    asignarTextoElemento("h1", "juego del numero secreto!");
    asignarTextoElemento("p", `Ahora indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego()  {
    //limpiarcaja
    limpiarCaja();
    //Indicar mensajes de intervalo de numeros
    //Generar el nmensajesIniciales();umero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

