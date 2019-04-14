function puntoTrece() {
    var N=document.getElementById("puntoTrece").value;
    var cont=0;
    if (N>0 && (N%1)==0) {
        for (let i = 1; i <=parseInt(N); i++) { 
              cont+=parseFloat(i/(Math.pow(2, i)));     
        }
        resultadoTrece.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El resultado de la suma de '+N+' terminos es '+parseFloat(cont)+'<h3></div>';
    } else {
        resultadoTrece.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Debe un numero positivo entero<h3></div>';
    }
} 