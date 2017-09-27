

window.onload = function () {
    CargarGrilla();
}

function Borrar(indice) {
    var data = 'indice=' + encodeURIComponent(indice);
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = gestionarRespuestaBorrar;
    xhr.open('POST', 'http://localhost:3000/eliminarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}

function Modificar(indice) {
    document.getElementById('indiceModificar').value = indice;
    traerPersona(indice);
}

function ModificarPersona(indice){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    var persona = { 'nombre': nombre, 'apellido': apellido};
    var data = 'indice=' + encodeURIComponent(indice) + '&persona=' + JSON.stringify(persona);
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = gestionarRespuestaModificar;
    xhr.open('POST', 'http://localhost:3000/modificarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}

function CargarGrilla() {
    var cuerpo = document.getElementById('tbody');
    cuerpo.innerHTML = "";
    traerPersonas();

}
function guardar() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    agregarPersonas(nombre, apellido);
}

function agregarPersonas(nombre, apellido) {
    var data = 'nombre=' + encodeURIComponent(nombre) + '&apellido=' + encodeURIComponent(apellido);
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = gestionarRespuestaAgregar;
    xhr.open('POST', 'http://localhost:3000/agregarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}

function traerPersona(indice) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = gestionarRespuestaTraerPersona;
    xhr.open('GET', 'http://localhost:3000/traerpersona?indice=' + indice, true);
    xhr.send();
}

function traerPersonas() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = gestionarRespuesta;
    xhr.open('GET', 'http://localhost:3000/traerpersonas', true);
    xhr.send();
}

function gestionarRespuesta() {

    var div = document.getElementById('tbody');

    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var personas = JSON.parse(xhr.responseText);
            for (i = 0; i < personas.length; i++) {
                var indice = i;
                var nombre = personas[i].nombre;
                var apellido = personas[i].apellido;
                div.innerHTML = div.innerHTML +
                    "<tr id=" + nombre + "><td>" + nombre + "</td>" +
                    "<td>" + apellido + "</td>" +
                    "<td><button class='btn' onClick='Borrar(" + indice + ")'>Borrar</button><button class='btn' onClick='Modificar(" + indice + ")'>Modificar</button></td></tr>";
            }
        } else {
            div.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
        }
    }
}

function gestionarRespuestaTraerPersona() {

    var div = document.getElementById('tbody');
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var btnGuardar = document.getElementById('btnGuardar');
    var indice = document.getElementById('indiceModificar').value;
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var persona = JSON.parse(xhr.responseText);
            nombre.value = persona.nombre;
            apellido.value = persona.apellido;
            btnGuardar.setAttribute('onclick',"ModificarPersona("+indice+");");
        } else {
            div.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
        }
    }
}

function gestionarRespuestaAgregar() {
    var div = document.getElementById('tbody');
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            CargarGrilla();
        }
    } else {
        div.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
    }
}

function gestionarRespuestaBorrar() {
    var div = document.getElementById('tbody');
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            CargarGrilla();
        }
    } else {
        div.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
    }
}

function gestionarRespuestaModificar() {
    var div = document.getElementById('tbody');
    var btnGuardar = document.getElementById('btnGuardar');
    var indice = document.getElementById('indiceModificar').value;
    
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            btnGuardar.setAttribute('onclick','guardar()');
            CargarGrilla();
            //div.innerHTML = xhr.responseText;
        }
    } else {
        div.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
    }
}