function puntoDieciseis() {

    var puntoDieciseis = parseInt(document.getElementById("puntoDieciseis").value);
    i = 0;
    var sumnum = 0;
    for (i = 0; sumnum <= puntoDieciseis; i++) {
        sumnum = sumnum + i;
        if(puntoDieciseis==1 || puntoDieciseis==0){
            resultadoDieciseis.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El natural mas pequeño es ' + puntoDieciseis + ' <h3></div>';
         } else if (sumnum > puntoDieciseis) {
            resultadoDieciseis.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El natural mas pequeño es ' + i + ' <h3></div>';
            i = sumnum;
        } 
    }
}