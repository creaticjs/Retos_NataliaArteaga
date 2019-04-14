function puntoNueve() {
    var N = document.getElementById("puntoNueve").value;
    a=1;
    b=1;
    c=0;
    i=0;
    if(N==1){
        resultadoNueve.innerHTML= '<div class="alert alert-primary" role="alert"><h3>Se necesitan '+N+' meses para tener '+N+' parejas de conejos <h3></div>';  
    }
    else{
for (i=2;i<(N*2);i++)
{   c=a+b;
    a=b;
    b=c;
    console.log(i,c)
    if(c==N){
        resultadoNueve.innerHTML= '<div class="alert alert-primary" role="alert"><h3>Se necesitan '+i+' meses para tener '+N+' parejas de conejos <h3></div>';
    i=0;
        break
} 
    else if (N<c){
        resultadoNueve.innerHTML= '<div class="alert alert-primary" role="alert"><h3>Se necesitan '+(i)+' meses para tener '+N+' parejas de conejos <h3></div>';
        i=0;
        break
    
}
    
}    
}
}