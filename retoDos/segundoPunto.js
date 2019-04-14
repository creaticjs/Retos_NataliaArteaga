var f = 0;
var p = 0;
var d = 0;
var masa1 = document.getElementById("masa1").value;
var masa2 = document.getElementById("masa2").value;
var fuerza = document.getElementById("fuerza");
var distancia = document.getElementById("distancia").value;


function calcularfuerza() {
    p = Math.pow(10, -8);
    var masa1 = document.getElementById("masa1").value;
    var masa2 = document.getElementById("masa2").value;
    var distancia = document.getElementById("distancia").value;
    distancia = parseFloat(distancia)
    if (masa1 > 0 && masa2 > 0 && distancia) {
        d = Math.pow(distancia, 2)
        console.log(distancia)
        f = (parseFloat(6.673 * p) * parseFloat(masa1) * parseFloat(masa2)) / d;
        fuerza.innerHTML = '<div class="alert alert-primary" role="alert"><h3> La fuerza dada es: ' + f + ' dinas<h3></div>';
    } else {
        fuerza.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Deben ser numeros positivos mayores a 0<h3></div>';
    }
}