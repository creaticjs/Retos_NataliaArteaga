function puntoDiecisiete() {

    var N = document.getElementById("puntoDiecisiete").value;
    var titulos = "";
    var entradas = "";
    for (let index = 0; index < N; index++) {
        titulos += '<h6>Digite el termino ' + (index + 1) + ': </h6><br>';
    }
    for (let index = 0; index < N; index++) {
        entradas += '<input placeholder="Numero ' + (index + 1) + '" id="puntoDiecisiete' + (index + 1) + '" type="number"><br><br>';
    }
    
    resultadoDiecisiete2.innerHTML = '<center>' +
        '<br>' +
        '<h6> Digite los valores de los N terminos</h6><br>' +
        '<div class="row">' +
        '<div class="col-2"></div>' +
        '<div class="col-4">' + titulos +
        '</div>' +
        '<div class="col-4">' + entradas +
        '</div>' +
        '</div>' +
        '<button onclick="puntoDiecisieteCalcular(' + N + ')" class="btn btn-primary">Calcular Mayor, Menor y Media</button>' +
        '<br><br>' +
        '<div id="resultadoDiecisiete">' +
        '</div>' +
        '</center> ';

}

function puntoDiecisieteCalcular(N) {
    var numeros = [];
    for (let index = 0; index < N; index++) {
        numeros[index] = document.getElementById("puntoDiecisiete" + (index + 1)).value;
    }
    var mayor = numeros[0];
    var menor = numeros[0];
    var media = 0;    
    
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > mayor)
            mayor = numeros[index];
    }

    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] < menor)
            menor = numeros[index];
    }

    for (let index = 0; index < numeros.length; index++) {
        media=media + parseFloat(numeros[index]);
    }
    media=media/numeros.length;
    resultadoDiecisiete3.innerHTML ='<div class="alert alert-primary" role="alert"><h3> El mayor es ' + mayor + ', el menor es '+menor+' y la media es '+media+' <h3></div>';
}