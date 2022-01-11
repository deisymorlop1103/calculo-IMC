/*var pacientes = document.querySelectorAll(".paciente");

//creo forEach para recorrer la lista de pacientes
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() { //se crea la escucha del evento doble click sobre cualquier paciente
        this.remove(); //al capturar el paciente al q se dio doble click la funcion remove()lo elimina
    });
});*/
var tabla = document.querySelector("#tabla-pacientes"); //selecciono el cuerpo de la tabla(con el id del tbody)

tabla.addEventListener("dblclick", function(event) { //se escucha el evento dobleclick con dblclick
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
            event.target.parentNode.remove(); //el evento escucha el click en el td y en su padre para que elimine la fila completa con los datos del usuario
        }, 500) //esperará medio de segundo cuando elimine un usuario

})