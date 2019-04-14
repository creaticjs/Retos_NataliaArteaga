var valorpin=1;

const valorpi = {
    titulo: "Calcular el valor de PI",
    calcularPi: function ()
    {
        var puntoDos = parseInt(document.getElementById("puntoDos").value);
        for (i = 1; i <= puntoDos; i++) {
            valorpin *= (4 * i * i) / (((2 * i) - 1) * ((2 * i) + 1))
            console.log(valorpin)
        }
        valorpin *= 2

        resultadoDos.innerHTML = '<div class="alert alert-primary" role="alert"><h3> PI es ' + valorpin + ' <h3></div>';
    },
}

var botonPi = document.getElementById("calcularPI");
botonPi.addEventListener("click",valorpi.calcularPi);
