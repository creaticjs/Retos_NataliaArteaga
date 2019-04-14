function puntoTrece() {
    var A = document.getElementById("puntoTreceA").value;
    var B = document.getElementById("puntoTreceB").value;
    var C = document.getElementById("puntoTreceC").value;
    var D = document.getElementById("puntoTreceD").value;
    var F = document.getElementById("puntoTreceE").value;
    var E = document.getElementById("puntoTreceF").value;

    var x = (C * E - B * F) / (A * E - B * D);
    var y = (A * F - C * D) / (A * E - B * D);
    resultadoTrece.innerHTML = '<div class="alert alert-primary" role="alert"><h3>X= ' + x + ' y Y= ' + y + '<h3></div>';

}