horas = [];

function calcularhora() {

    var hora = document.getElementById("hora").value;
    var horas = hora.split(":");
    var ampm = "AM";
    if (parseInt(horas[0]) >= 0 && parseInt(horas[0]) < 24 && parseInt(horas[1]) >= 0 && parseInt(horas[1]) < 60) {

        if (horas[0] > 12) {
            nuevahora = parseInt(horas[0]) - 12;
            ampm = "PM"
        } else {
            if (horas[0] == 12)
                ampm = "PM"
            if (horas[0] == 0) {
                nuevahora = "12";
            } else {
                nuevahora = parseInt(horas[0]);
            }
        }

        minutos = parseInt(horas[1]);
        console.log(nuevahora)
        resultadohora.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El hora en formato 12 H es ' + nuevahora + ':' + minutos + ' ' + ampm + '<h3></div>';
    } else {
        resultadohora.innerHTML = '<div class="alert alert-danger" role="alert"><h3> Valor Invalido<h3></div>';
    }
}