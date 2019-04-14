function puntoNueve() {
    var N = document.getElementById("puntoNueve").value;
    a=1;
    b=2;
    c=0;
for (i=0;i<2;i++)
{
    c=a+b;
    a=b;
    b=c;

    if(c==N){

    }

    console.log(c)
}
    
    resultadoNueve.innerHTML= '<div class="alert alert-primary" role="alert"><h3>Se necesitan  parejas de conejos<h3></div>';
}