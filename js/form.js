var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    //capturamos la  tabla
    var form = document.querySelector("#form-adicionar");
    //instancio la clase paciente
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);

    var errores = validarPaciente(paciente);

    if (errores.length > 0) {
        exhibirMensajesErrores(errores);
        return;
    }

    //variable para seleccionar el body de la tabla
    //var tabla = document.querySelector("#tabla-pacientes");
    //tabla.appendChild(pacienteTr);
    adicionarPcienteEnLaTabla(paciente);
    form.reset();

    var mensajerErrores = document.querySelector("#mensajes-errores");
    mensajerErrores.innerHTML = "";

});

//función para adicionar los usuarios en la tabla que traigo con la petición ajax
function adicionarPcienteEnLaTabla(paciente) {
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

function capturarDatosPaciente(form) {
    //(capturamos los datos del formulario)creando un objeto a través de una clase
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function construirTr(paciente) {
    //se crean los elementos de la tabla es decir las etiquetas tr y td
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function construirTd(dato, clase) {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente) {
    var errores = []

    if (paciente.nombre.length == 0) {
        errores.push("El nombre no puede estar vacío");
    }
    if (paciente.peso.length == 0) {
        errores.push("El peso no puede estar vacío");

    }
    if (paciente.altura.length == 0) {
        errores.push("La altura no puede estar vacía");
    }
    if (paciente.gordura.length == 0) {
        errores.push("El % de gordura no puede estar vacía");

    }
    if (!validarPeso(paciente.peso)) {
        errores.push("El peso es incorrecto");
    }
    if (!validarAltura(paciente.altura)) {
        errores.push("La altura es incorrecta");
    }
    return errores;
}

function exhibirMensajesErrores(errores) {
    var ul = document.querySelector("#mensajes-errores");

    ul.innerHTML = "";
    errores.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);

    });
}