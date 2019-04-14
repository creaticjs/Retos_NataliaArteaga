function puntoOnce() {
    var A = document.getElementById("puntoOneA").value;
    var B = document.getElementById("puntoOneB").value;
    var C = document.getElementById("puntoOneC").value;
    var D = document.getElementById("puntoOneD").value;
    if (B.length == 1 && C.length == 1 && D.length == 1) {
        if (C < 5) {
            resultadoOnce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>' + A + B + '00<h3></div>';
        } else {
            if (B == 9) {
                resultadoOnce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>'(parseInt(A) + 1) + '000<h3></div>';
            } else {
                resultadoOnce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>' + A + (parseInt(B) + 1) + '00<h3></div>';
            }
        }
    } else {
        resultadoOnce.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Debe ingresar un numero de un solo digito en B, C y D <h3></div>';
    }
}