num = [];
vnum = []
excepciones = ["DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE"]
decenas = ["DIECI", "VEINT", "TREIN", "CUARE", "CINCU", "SESEN", "SETEN", "OCHEN", "NOVEN"];
unidades = ["UNO", "DOS", "RES", "TRO", "NCO", "EIS", "ETE", "CHO", "EVE"];
centenas = ["CIE", "DOS", "TRE", "CUA", "QUI", "SEI", "SET", "OCH", "NOV"];

function calcularnumero() {
    var numero = document.getElementById("numero").value;
    var numMayus = numero.toUpperCase()
    var num = numMayus.split(" ");
    var parte1 = num[0];
    var parte2 = num[1];
    vnum[0]= undefined;
    vnum[1] = undefined;
    vnum[2] = undefined;
    for (i = 0; i < 9; i++) {
        if (centenas[i] == parte1.substr(0, 3)) {
            vnum[0] = i + 1;
        }
    }

    for (i = 0; i < 9; i++) {
        if (parte2 != undefined && unidades[i] == parte2.substr(-3)) {
            vnum[2] = i + 1;
        } else if (vnum[2] == undefined) {
            vnum[1] = 0;
            vnum[2] = 0;
        }
    }

    for (i = 0; i < decenas.length; i++) {
        if (parte2 != undefined && decenas[i] == parte2.substr(0, 5)) {
            vnum[1] = i + 1;
        } else if ((vnum[1] == undefined)) {
            vnum[1] = 0;
        }
    }

    for (i = 0; i < 6; i++) {
        if (excepciones[i] == parte2) {
            vnum[1] = 1;
            vnum[2] = i;

        }
    }
    if (vnum[0] != undefined && vnum[1] != undefined && vnum[2] != undefined) {
        resultadonumero.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Numero: ' + vnum[0] + vnum[1] + vnum[2] + '<h3></div>';
    } else {
        resultadonumero.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Debe ingresar una cadena de texto valida <h3></div>';
    }
}