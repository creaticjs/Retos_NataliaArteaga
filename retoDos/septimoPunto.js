nfecha = [];

function calcularfecha() {

    var fecha = document.getElementById("fecha").value;
    var nfecha = fecha.split(" ");
    var meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MaAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

    fechad = parseInt(nfecha[0]);
    fecham = nfecha[1];
    fechan = fecham.toUpperCase();
    console.log(fechan)
    fechaa = parseInt(nfecha[2]);

    for (i = 0; i < 12; i++) {
        if (meses[i] == fechan) {
            fechan = i + 1;
        }
    };

    resultadofecha.innerHTML = '<div class="alert alert-primary" role="alert"><h3>La fecha es ' + fechad + ' ' + fechan + ' ' + fechaa + ' <h3></div>';

}