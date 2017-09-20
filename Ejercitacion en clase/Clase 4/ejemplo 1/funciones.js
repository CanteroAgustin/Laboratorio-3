function Suma(a, b, callback){
    var result = parseInt(a)+parseInt(b);
    if(typeof callback === "function"){
        callback(result);
    }
}

window.onload = function(){ 
    
    var botonSuma = document.getElementById('btnSumar');
    botonSuma.addEventListener("click", function(){
        var a = document.getElementById('textA').value;
        var b = document.getElementById('textB').value;
        Suma(a, b, function(result){
            alert("La suma es: " + result);
        });
    });
}

var Auto = function(nafta){
    var _nafta = nafta;
    this.setNafta = function(value){
        _nafta = value;
    }
    this.getNafta = function(){
        return _nafta;
    }

    
}
var auto1 = new Auto(40);
auto1.setNafta(30);
alert("Litros de nafta: "+auto1.getNafta());