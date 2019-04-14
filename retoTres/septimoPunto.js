function puntoSiete() {
    var divisores = [];
    var numeroperfectos = [];
    var sumdiv = 0;
    var j = 1;
    while (numeroperfectos.length < 3) {
        j++
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
        console.log(numeroperfectos)
    }

    resultadoSiete.innerHTML = '<div class="alert alert-primary" role="alert"><h3> Los numeros perfectos son ' + numeroperfectos + ' <h3></div>';
}