

window.onload = function(){ 
    var btnGuardar = document.getElementById('btnGuardar');

    btnGuardar.addEventListener("click", function(){
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var cuerpo = document.getElementById('tbody');
        cuerpo.innerHTML = cuerpo.innerHTML + 
        "<tr id="+nombre+"><td>" + nombre + "</td>" +
        "<td>" + apellido + "</td>" +
        "<td><a href='javascript:void(0);' onClick='RemoveRow(this)' id='"+nombre+"'>borrar</a></td></tr>";
    });

    
}
function RemoveRow(elemento){
    var body = document.getElementById('tbody');
    var parent = elemento.parentNode;
    var parent2 = parent.parentNode;
    body.removeChild(parent2);
}