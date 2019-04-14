function puntoQuince() {
    var puntoQuince = parseInt(document.getElementById("puntoQuince").value);
    var divisores = [];
    var numeroperfectos = [];
    var sumdiv = 0;
    for (j = 2; j <= puntoQuince; j++) {
        i = 1;
        sumdiv = 0;
        divisores.splice(0, divisores.length);
        for (i = 1; i < j; i++) {
            if ((j % (i)) === 0) {
                divisores.push(i)
                sumdiv = divisores.reduce(sumvec, 0)
            }
        }
        if (sumdiv === j) {
            numeroperfectos.push(j)
        }
    }
    resultadoQuince.innerHTML = '<div class="alert alert-primary" role="alert"><h3> Los numeros perfectos son ' + numeroperfectos + ' <h3></div>';
}
const sumvec = (cont, item) => {
    return cont += item;
}