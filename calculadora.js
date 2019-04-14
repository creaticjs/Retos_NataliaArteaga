var borrar = false;

function escribir(numero) {
    var caja2 = document.formulario.texto2.value;
    if (borrar) {
        document.formulario.texto2.value = "";
        borrar = false;
        document.formulario.texto2.value = numero;
    } else if (caja2 == "0") {
        //cajao = caja2.replace("0", "")
        document.formulario.texto2.value = numero;
    } else {
        document.formulario.texto2.value = caja2 + numero;
    }
}

function operador(o) {
    var caja1 = document.formulario.texto1.value;
    var caja2 = document.formulario.texto2.value;
    var unum = caja1.substring(caja1.length - 1);

   if (unum == "+" || unum == "-" || unum == "*" || unum == "/") {
        unu = unum.replace(unum, o);
        var res = caja1.substring(0, caja1.length - 1);
        document.formulario.texto1.value = res + unu;

        calcular()
    }
    if (caja1 == "" && caja2 != "") {
        document.formulario.texto1.value = caja2 + o;
        document.formulario.texto2.value = "";
    } else {
        document.formulario.texto1.value = caja1 + caja2 + o;
    }
  }

function calcular() {
    var caja1 = document.formulario.texto1.value;
    var caja2 = document.formulario.texto2.value;
    document.formulario.texto2.value = eval(caja1 + caja2);
    document.formulario.texto1.value = "";
    borrar = true;
}

function borraruno() {
    var caja2 = document.formulario.texto2.value;
    var nuevo = caja2.substring(0, caja2.length - 1)
    document.formulario.texto2.value = nuevo;
}

function coma() {
    var caja2 = document.formulario.texto2.value;
    document.formulario.texto2.value = caja2 + ".";
}

function menos() {
    var caja2 = document.formulario.texto2.value;
    if (parseInt(caja2) > 0) {
        document.formulario.texto2.value = "-" + caja2;
    } else {
        var nuevo = caja2.substring(1, caja2.length)
        document.formulario.texto2.value = nuevo;
    }
}