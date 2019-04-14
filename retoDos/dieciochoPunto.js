function calcularpn() {
    var numeropn = document.getElementById("numeropn").value;
    if (numeropn > 0) {
        resultadoDieciocho.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El numero es positivo<h3></div>';
    } else if (numeropn == 0) {
        resultadoDieciocho.innerHTML = '<div class="alert alert-secondary" role="alert"><h3>El numero es 0<h3></div>';
    } else {
        resultadoDieciocho.innerHTML = '<div class="alert alert-info" role="alert"><h3>El numero es negativo<h3></div>';
    }

}