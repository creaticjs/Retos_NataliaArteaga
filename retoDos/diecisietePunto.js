function calculardinero() {
    devuelta = 0;
    cincuentab = 0;
    veinte = 0;
    diez = 0;
    cinco = 0;
    dos = 0;
    mil = 0;
    quinientos = 0;
    doscientos = 0;
    cien = 0;
    cincuentam = 0;

    var dinero = document.getElementById("dinero").value;

    if (dinero>0) {

        while (dinero >= 50000) {
            dinero = dinero - 50000;
            cincuentab++
        }

        while (dinero >= 20000) {
            dinero = dinero - 20000;
            veinte++
        }

        while (dinero >= 10000) {
            dinero = dinero - 10000;
            diez++
        }

        while (dinero >= 2000) {
            dinero = dinero - 2000;
            dos++
        }

        while (dinero >= 1000) {
            dinero = dinero - 1000;
            mil++
        }

        while (dinero >= 500) {
            dinero = dinero - 500;
            quinientos++
        }

        while (dinero >= 200) {
            dinero = dinero - 200;
            doscientos++
        }

        while (dinero >= 100) {
            dinero = dinero - 100;
            cien++
        }

        while (dinero >= 50) {
            dinero = dinero - 50;
            cincuentam++
        }
        resultadoDiecisiete.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Son: <br> ' + cincuentab + ' billetes de 50000 <br>' + veinte + ' billetes de 20000 <br>' + diez + ' billetes de 10000 <br>' + dos + ' billetes de 2000 <br>' + mil + ' billetes de 1000 <br>' + quinientos + ' monedas de 500 <br>' + doscientos + ' monedas de 200 <br>' + cien + ' monedas de 100 <br>' + cincuentam + ' monedas de 50 <br><h3></div>';
    } else {
        resultadoDiecisiete.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Dato invalido <h3></div>';
    }
}