function puntoUno() {
    var salario = parseFloat(document.getElementById("puntoUno").value);
    var nuevosalario = 0;

    if(salario>0){
    switch (true) {
        case (salario > 0 && salario <= 9000):
            nuevosalario = parseFloat(salario) + (salario * 0.2);
            break;
        case (salario > 9000 && salario <= 15000):
            nuevosalario = salario + (salario * 0.1)
            break;
        case (salario > 15000 && salario <= 20000):
            nuevosalario = salario + (salario * 0.05)
            break;
        case (salario > 20000):
            nuevosalario = salario
            break;
        default:
            nuevosalario = 0;
            break;
    }
resultadoUno.innerHTML= '<br><div class="alert alert-primary" role="alert"><h3>Su salario es '+ nuevosalario+'<h3></div>';
}else{
    resultadoUno.innerHTML = '<br> <div class="alert alert-danger" role="alert"><h3>El salario debe ser un valor positivo<h3></div>';
}
}
