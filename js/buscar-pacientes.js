//usando ajax para hacer peticiones y cargar datos a la tabla

var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest; //(XMLHttpRequest)petición 
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json"); //abro la petición
    xhr.addEventListener("load", function() {
        var errorAjax = document.querySelector("#error-ajax");
        if (xhr.status == 200) {
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText; //guardo la respuesta de la petición en la variable
            var pacientes = JSON.parse(respuesta); //convertimos la respuesta en JSON

            pacientes.forEach(function(paciente) {
                adicionarPcienteEnLaTabla(paciente);
            });
        } else {
            errorAjax.classList.remove("invisible");
        }
    });
    xhr.send() //envío petición
});