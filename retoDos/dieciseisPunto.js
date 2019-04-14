var tarifa = 0;
var impuesto = 0;
var impuestototal = 0;
var horasextras = 0;

function calcularsalario() {

    var horastrab = document.getElementById("horastrab").value;
    var tarifa = parseFloat(document.getElementById("tarifa").value);
    var horast = parseFloat(horastrab);

    if (tarifa > 0 && horast > 0) {
        if (horast < 39) {
            salario = (horastrab * tarifa)
        }

        if (horast > 38) {
            horasextras = (horast - 38);
            salario = (38 * tarifa) + (horasextras * (tarifa + (0.5 * tarifa)))
        }

        if (salario > 50000) {
            impuesto = salario / 100;
            impuestototal = impuesto * 10;
            salario = salario - impuestototal;

        }

        resultadoDieciseis.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El salario es ' + salario + ' y el impuesto es de ' + impuestototal + '<h3></div>';
    } else {
        resultadoDieciseis.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Los valores deben ser positivos<h3></div>';
    }

}