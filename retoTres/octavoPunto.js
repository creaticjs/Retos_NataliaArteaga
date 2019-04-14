var resultado=0;
var indice=0;
var indices=[];
var suma=0;
function puntoOcho() {
    var puntoOcho = parseInt(document.getElementById("puntoOcho").value);
    for(n=1; n<101; n++)
    {
        indice=(Math.pow(puntoOcho,n))/factorial(n)
        indices.push(indice)
        
    }
    console.log(indices.length)
    var resultadoi="1 "
    for(i=0; i<indices.length; i++){
    resultadoi+=" +"+ indices[i]+"";
    }

    sumdiv = indices.reduce(sumvec, 0)
    resultadoOcho1.innerHTML= '<div class="alert alert-primary" role="alert"><h3> Euler a la '+puntoOcho+ ' es: ' + sumdiv+ ' <h3></div>';
    resultadoOcho.innerHTML = '<div class="alert alert-primary" role="alert"><h3> ' + resultadoi + ' <h3></div>';

}

function factorial(n){
    var multiplicacion=1;
    for (i=1;i<=n;i++){
         multiplicacion=multiplicacion*i;
        
    }
    return multiplicacion
}