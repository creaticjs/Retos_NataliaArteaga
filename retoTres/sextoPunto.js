function puntoSeis() {

    var N = document.getElementById("puntoSeis").value;
    
    if (N % 2 && N > 0) {
        errorSeis.innerHTML = "";
        var cuadro = new Array(parseInt(N));
      
        for (let index = 0; index < cuadro.length; index++) {
            cuadro[index] = new Array(parseInt(N));
        }

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                cuadro[i][j] = 0;
            }
        }
  
        var x = 0;
        var y = parseInt(N / 2);
        cuadro[x][y] = 1;

      
        for (let p = 1; p < (N * N); p++) {
           
            var xAnterior = x;
            var yAnterior = y;
           
            if (x == 0) {
                x = (N - 1);
            } else {
                x = x - 1;
            }
            
            if (y == (N - 1)) {
                y = 0;
            } else {
                y = y + 1;
            }
            
            if (cuadro[x][y] != 0) {
                
                if (xAnterior == (N - 1)) {
                    x = 0;
                } else {
                    x = xAnterior + 1;
                }
                
                y = yAnterior;
            }

            cuadro[x][y] = (p + 1);
        }
      
        var imprimir = "";
        for (let i = 0; i < N; i++) {
            
            imprimir += "<tr>";
            for (let j = 0; j < N; j++) {
                imprimir += "<td>" + cuadro[i][j] + "</td>";
            }
            imprimir += "</tr>";
        }
        resultadoSeis.innerHTML = imprimir;
    } else {
        resultadoSeis.innerHTML ="";
        errorSeis.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Debe ingresar un numero impar positivo<h3></div>';
    }

}