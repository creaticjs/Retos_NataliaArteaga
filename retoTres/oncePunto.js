var cont=0;
var mul=0;

function puntoOnce() {
    var numeroprimo= document.getElementById("puntoOnce").value;
    cont=0;
    for (i=1; i<=numeroprimo; i++){
       mul= numeroprimo%i;
       if(mul==0){
           cont=cont+1;

           if(cont==2){
            resultadoOnce.innerHTML = '<div class="alert alert-primary" role="alert"><h3> Es primo <h3></div>';
           }
           else if(cont!=2){
            resultadoOnce.innerHTML = '<div class="alert alert-danger" role="alert"><h3> No es primo <h3></div>';
           }
       }
    }

}