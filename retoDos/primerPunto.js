var notas = [];
var suma = 0;
var resultado = document.getElementById("resultado");
var valornota = document.getElementById("valornota").value;

function agregarnota() {
    valornota = document.getElementById("valornota").value;
    if (valornota != "" && valornota >= 0 && valornota < 101) {
        notas.push(valornota);
        console.log(notas);
        document.getElementById("valornota").value = "";
        var fila = document.getElementById("fila");
        errorNota.innerHTML = "";
        fila.innerHTML += "<tr><td>" + valornota + "</td><td>" + Puntuacion(valornota) + "</td></tr>";
    } else {
        errorNota.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Las notas deben ser valores entre 0 y 100 <h3></div>';
    }
}

function promedio() {

    for (i = 0; i < notas.length; i++) {
        suma += parseInt(notas[i]);
    }
    promedio = (suma / notas.length);
    errorNota.innerHTML = "";
    fila.innerHTML += "<tr><td>Promedio</td><td>" + Puntuacion(promedio) + "</td></tr>";
}

function Puntuacion(valor) {
    switch (true) {
        case (valor < 60 && valor > 0):
            return "E";
        case (valor < 70 && valor > 59):
            return "D";
        case (valor < 80 && valor > 69):
            return "C";
        case (valor < 90 && valor > 79):
            return "B";
        case (valor < 101 && valor > 89):
            return "A";
        default:
            return "X";
    }
}