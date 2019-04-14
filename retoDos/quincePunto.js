function puntoQuince() {
    var mes = document.getElementById("puntoQuinceMes").value;
    var ano = document.getElementById("puntoQuinceAno").value;
    var meses = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

    if (mes < 13 && mes > 0 && ano > 0) {
        for (let index = 0; index < meses.length; index++) {
            if (mes == (index + 1)) {
                if (mes == 2) {
                    if (multiplo(ano, 4) && (!multiplo(ano, 100))) {
                        resultadoQuince.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El mes ' + mes + ' del Año ' + ano + ' tiene 29 dias<h3></div>';
                    } else if (multiplo(ano, 100) && multiplo(ano, 400)) {
                        resultadoQuince.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El mes ' + mes + ' del Año ' + ano + ' tiene 29 dias<h3></div>';
                    } else {
                        resultadoQuince.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El mes ' + mes + ' del Año ' + ano + ' tiene 28 dias<h3></div>';
                    }
                } else {
                    resultadoQuince.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El mes ' + mes + ' del Año ' + ano + ' tiene ' + meses[index] + ' dias<h3></div>';
                }
            }

        }
    } else {
        resultadoQuince.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Los valores de mes o año son incorrectos<h3></div>';
    }
}

function multiplo(num, mult) {
    var resto = num % mult;
    if (resto == 0) {
        return true;
    } else {
        return false;
    }
}