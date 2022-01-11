var pacientes = document.querySelectorAll(".paciente"); //.querySlectorAll /trae todos los elementos con la clase paciente
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) { //va a iterar en la tabla iniciando desde la posición 0

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso"); //querySelector trae hasta la etiqueta y context solo lo que contiene la etiqueta
    var peso = tdPeso.textContent; //accedo al contenido de info peso
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent; //pone la altura de la tabla del index.html
    var tdIMC = paciente.querySelector(".info-imc");

    pesoEsValido = validarPeso(peso); // si no se cumplen el if de adelante cambia a true
    alturaEsValida = validarAltura(altura); // si no se cumple el otro if cambia a true

    //verdadero o falso --> verdadero// si se da una de las condiciones cambia a true(pesoEsValido)
    if (!pesoEsValido) { //peso<0  para que no pongan números negativos o si es > que 1000(sería demasiado peso)no haga el calculo y diga peso errado
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false; //
        paciente.classList.add("paciente-incorrecto");
    }

    //verdadero o falso --> verdaderosi se da una de las condiciones cambia a true(alturaEsValida)
    if (!alturaEsValida) {
        console.log("Altura incorrecto");
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto"); //con esto crea la clase peciente-incorrecto si se sale del rango y le one el color que se definió para ello en css
    }

    if (pesoEsValido && alturaEsValida) { // si ambas son true aplica la formula si no, no lo hace false and false = false true and false= false
        var imc = peso / (altura * altura); //calculo del IMC
        tdIMC.textContent = imc.toFixed(2); //toFixed(2) indico que solo me ponga hasta 2 decimales
    }
}

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validarAltura(altura) {
    if (altura >= 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}