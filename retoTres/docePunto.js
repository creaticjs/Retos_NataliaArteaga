function puntoDoce() {
    var N=document.getElementById("puntoDoce").value;
    var cont=0;
    if (N>0 && (N%1)==0) {
        for (let i = 1; i < (parseInt(N)+1); i++) {   
              cont+=parseFloat(1/i);     
        }
        resultadoDoce.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El resultado de la suma de '+N+' terminos es '+parseFloat(cont)+'<h3></div>';
    } else {
        resultadoDoce.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Debe un numero positivo entero<h3></div>';
    }
} 
