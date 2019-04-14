var e = 0;

function calcularenergia() {
    var pot = Math.pow(10, 10);
    var c = 2.997925 * pot;   
    var masa = document.getElementById("masa").value;
    var masa = parseFloat(masa);
    if (masa > 0) {
        e = masa * (Math.pow(c, 2))
        resultadoenergia.innerHTML = '<div class="alert alert-primary" role="alert"><h3>La energía es ' + e + ' ergios<h3></div>';
    } else {
        resultadoenergia.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Deben ser numeros positivos mayores a 0<h3></div>';
    }
}