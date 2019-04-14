function puntoDoce() {
    var dia = document.getElementById("puntoDoceDia").value;
    var mes = document.getElementById("puntoDoceMes").value;
    var ano = document.getElementById("puntoDoceAno").value;

    actual = new Date();
    if (dia < 32 && dia > 0 && mes > 0 && mes < 13 && ano > 0) {
        if ((actual.getFullYear() - ano) > 0) {
            if (((actual.getFullYear() - 1) == ano) && ((actual.getMonth() + 1) == mes) && (actual.getDate() >= dia)) {
                if (((actual.getMonth() + 1) != mes)) {
                    if (((actual.getMonth() + 1) < mes)) {

                        resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (actual.getFullYear() - ano - 1) + ' Años<h3></div>';
                    } else {
                        resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (actual.getFullYear() - ano) + ' Años<h3></div>';
                    }
                } else {
                    if (actual.getDate() < dia) {
                        resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (actual.getFullYear() - ano - 1) + ' Años<h3></div>';
                    } else {
                        resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (actual.getFullYear() - ano) + ' Años<h3></div>';
                    }
                }
            } else if (((actual.getFullYear() - 1) == ano) && ((actual.getMonth() + 1) <= mes)) {
                var meses = 12 + (actual.getMonth() - mes);
                if (actual.getDate() < dia) {
                    var dias = 31 + (actual.getDate() - dia);

                    resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + meses + ' Meses y ' + dias + ' Dias<h3></div>';
                } else {
                    var dias = (actual.getDate() - dia);
                    resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (meses + 1) + ' Meses y ' + dias + ' Dias<h3></div>';
                }
            } else {
                if (((actual.getMonth() + 1) != mes)) {
                    if (((actual.getMonth() + 1) < mes)) {

                        resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (actual.getFullYear() - ano - 1) + ' Años<h3></div>';
                    } else {
                        resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (actual.getFullYear() - ano) + ' Años<h3></div>';
                    }
                } else {
                    if (actual.getDate() < dia) {
                        resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (actual.getFullYear() - ano - 1) + ' Años<h3></div>';
                    } else {
                        resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (actual.getFullYear() - ano) + ' Años<h3></div>';
                    }
                }
            }

        } else {
            if (actual.getFullYear() == ano) {
                if (actual.getDate() < dia) {
                    var dias = 31 + (actual.getDate() - dia);
                    resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (actual.getMonth() - mes) + ' Meses y ' + dias + ' Dias<h3></div>';
                } else {
                    var dias = (actual.getDate() - dia);
                    resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Tiene ' + (actual.getMonth() - mes + 1) + ' Meses y ' + dias + ' Dias<h3></div>';
                }
            }
        }
    } else {
        resultadoDoce.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Debe ingresar valores correctos para dia mes y año<h3></div>';
    }
}