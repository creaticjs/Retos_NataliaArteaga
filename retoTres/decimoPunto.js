function puntoDiez(){
    var A = document.getElementById("puntoDiezA").value;
    var B = document.getElementById("puntoDiezB").value;
    var AA=A;
    var BB=B;
    if(A<B){
        var cambio=A;
        A=B;
        B=cambio;
    }

    while((A%B)!=0){
        var cambio=A;
        A=B;
        B=cambio%A;
    }
    resultadoDiez.innerHTML= '<div class="alert alert-primary" role="alert"><h3>El MCD de '+AA+' y '+BB+' es '+B+'<h3></div>';

}