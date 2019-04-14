
const figura = {
    titulo: "Figura",
    dibujarFigura: function ()
    {
        var lineasvec=[];
        var lineas="";
        var puntoCatorce = parseInt(document.getElementById("puntoCatorce").value);
      
        for (let index = 1; index <= puntoCatorce; index++) {
            lineasvec.push("X")
            console.log(lineasvec)
            lineas += '<h6>'+lineasvec+' </h6><br>';
        }
        resultadoCatorce.innerHTML = '<div class="alert alert-primary" role="alert"><h3> ' + lineas + ' <h3></div>';
    },
    }


var botonFigura = document.getElementById("puntobuttonCatorce");
botonFigura.addEventListener("click",figura.dibujarFigura);