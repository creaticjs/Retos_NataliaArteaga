var h = 0;

function calcularhipotenusa() {

    var lado1 = document.getElementById("lado1").value;
    var lado2 = document.getElementById("lado2").value;
    var lado1 = parseFloat(lado1);
    var lado2 = parseFloat(lado2);
    if (lado1 > 0 && lado2 > 0) {
        h = Math.sqrt(Math.pow(lado1, 2) + Math.pow(lado2, 2));

        resultadohipotenusa.innerHTML = '<div class="alert alert-primary" role="alert"><h3>La hipotenusa es ' + h + ' centimetros<h3></div>';
    } else {
        resultadohipotenusa.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Deben ser numeros positivos mayores a 0<h3></div>';
    }
}