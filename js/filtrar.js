var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            var tdNombre = paciente.querySelector(".info-nombre"); //info-nombre es la clase del td del campo nombre en la tabla
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value, "i");

            if (!expresion.test(nombre)) { //si lo que se ingresa es igual a lo q hay en la tabla  muestralo sino vuelvelo invisible
                paciente.classList.add("invisible");
            } else {
                paciente.classList.remove("invisible");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            paciente.classList.remove("invisible");
        }
    }
});