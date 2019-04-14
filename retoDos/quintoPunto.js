var h = 0;
var a = 0;
var p = 0;

function calcularareatriangulo() {

    var lado1t = document.getElementById("lado1t").value;
    var lado2t = document.getElementById("lado2t").value;
    var lado3t = document.getElementById("lado3t").value;
    var lado1t = parseFloat(lado1t);
    var lado2t = parseFloat(lado2t);
    var lado3t = parseFloat(lado3t);
    if (lado1t > 0 && lado2t > 0 && lado3t > 0) {
        p = (lado1t + lado2t + lado3t) / 2;
        a = Math.sqrt(p * (p - lado1t) * (p - lado2t) * (p - lado3t));
        resultadoareatriangulo.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El area del triangulo es ' + a + ' centimetros<h3></div>';
    } else {
        resultadoareatriangulo.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Deben ser numeros positivos mayores a 0<h3></div>';
    }
}