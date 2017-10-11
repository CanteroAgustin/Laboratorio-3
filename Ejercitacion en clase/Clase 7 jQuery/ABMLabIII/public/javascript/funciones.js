

window.onload = function () {
    CargarGrilla();
}

function Borrar(indice) {
    $.ajax({
        success: CargarGrilla,
        type: "POST",
        data: {'indice':indice},
        url: 'http://localhost:3000/eliminarpersona',
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status+", "+thrownError);
        }
    });
}

function Modificar(indice) {
    $("#indiceModificar").val(indice);
    traerPersona(indice);
}

function ModificarPersona(indice){
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    $('#nombre').val("");
    $('#apellido').val("")
    var persona = { 'nombre': nombre, 'apellido': apellido};
    var datos = {
        'indice' : indice,
        'persona': JSON.stringify(persona)
    }
    
    $.ajax({
        success: function(){
            $("#btnGuardar").attr('onclick','guardar()');
            CargarGrilla();
        },
        type: "POST",
        data: datos,
        url: 'http://localhost:3000/modificarpersona',
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status+", "+thrownError);
        }
    });
}

function CargarGrilla() {
    var cuerpo = $("#tbody");
    cuerpo.html("");
    traerPersonas();

}
function guardar() {
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    $("#nombre").val("");
    $("#apellido").val("");
    agregarPersonas(nombre, apellido);
}

function agregarPersonas(nombre, apellido) {
    var datos = {
        'nombre': nombre,
        'apellido':apellido
    }
    
    $.ajax({
        success: CargarGrilla,
        type: "POST",
        data: datos,
        url: 'http://localhost:3000/agregarpersona',
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status+", "+thrownError);
        }
    });
}

function traerPersona(indice) {
    var div = $('#tbody');
    var nombre = $('#nombre');
    var apellido = $('#apellido');
    var btnGuardar = $('#btnGuardar');
    var indice = $('#indiceModificar').val();
    datos = {
        "indice":indice
    }
    $.ajax({
        success: function(responseText){
            var persona = JSON.parse(responseText);
            nombre.val(persona.nombre);
            apellido.val(persona.apellido);
            btnGuardar.attr('onclick',"ModificarPersona("+indice+");");
        },
        type: "GET",
        data: datos,
        url: 'http://localhost:3000/traerpersona',
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status+", "+thrownError);
        }
    });
}

function traerPersonas() {
    $.ajax({
        success: function(responseText){
            var personas = JSON.parse(responseText);
            for (i = 0; i < personas.length; i++) {
                var indice = i;
                var nombre = personas[i].nombre;
                var apellido = personas[i].apellido;
                $("#tbody").append("<tr id=" + nombre + "><td>" + nombre + "</td>" +
                "<td>" + apellido + "</td>" +
                "<td><button class='btn' onClick='Borrar(" + indice + ")'>Borrar</button><button class='btn' onClick='Modificar(" + indice + ")'>Modificar</button></td></tr>");
            }
        },
        type: "GET",
        url: 'http://localhost:3000/traerpersonas',
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status+", "+thrownError);
        }
    });
}