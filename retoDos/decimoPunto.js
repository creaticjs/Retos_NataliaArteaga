numerosep = [];
letrasrom = [];

function calcularnumeroromano() {
    var numeroara = document.getElementById("numeroara").value;
    numerosep = numeroara.split('');

    if (numerosep.length == 4 && 2001 > numeroara && numeroara > 999 && (numeroara % 1) == 0) {


        /// CASE PARA LAS UNIDADES DE MIL
        switch (numerosep[0]) {
            case "1":
                letrasrom[0] = "M";
                break;
            case "2":
                letrasrom[0] = "MM"
                break;
            default:
                alert("ERROR")
                break;
        }

        /// CASE PARA LAS CENTENAS
        switch (numerosep[1]) {
            case "0":
                letrasrom[1] = "";
                break;
            case "1":
                letrasrom[1] = "C";
                break;
            case "2":
                letrasrom[1] = "CC";
                break;
            case "3":
                letrasrom[1] = "CCC";
                break;
            case "4":
                letrasrom[1] = "CD";
                break;
            case "5":
                letrasrom[1] = "D";
                break;
            case "6":
                letrasrom[1] = "DC";
                break;
            case "7":
                letrasrom[1] = "DCC";
                break;
            case "8":
                letrasrom[1] = "DCCC";
                break;
            case "9":
                letrasrom[1] = "CM";
                break;
            default:
                alert("ERROR")
                break;
        }

        /// CASE PARA LAS DECENAS
        switch (numerosep[2]) {
            case "0":
                letrasrom[2] = "";
                break;
            case "1":
                letrasrom[2] = "X";
                break;
            case "2":
                letrasrom[2] = "XX";
                break;
            case "3":
                letrasrom[2] = "XXX";
                break;
            case "4":
                letrasrom[2] = "XL";
                break;
            case "5":
                letrasrom[2] = "L";
                break;
            case "6":
                letrasrom[2] = "LX";
                break;
            case "7":
                letrasrom[2] = "LXX";
                break;
            case "8":
                letrasrom[2] = "LXXX";
                break;
            case "9":
                letrasrom[2] = "XC";
                break;
            default:
                alert("ERROR")
                break;
        }

        /// CASE PARA LAS UNIDADES
        switch (numerosep[3]) {
            case "0":
                letrasrom[3] = "";
                break;
            case "1":
                letrasrom[3] = "I";
                break;
            case "2":
                letrasrom[3] = "II";
                break;
            case "3":
                letrasrom[3] = "III";
                break;
            case "4":
                letrasrom[3] = "IV";
                break;
            case "5":
                letrasrom[3] = "V";
                break;
            case "6":
                letrasrom[3] = "VI";
                break;
            case "7":
                letrasrom[3] = "VII";
                break;
            case "8":
                letrasrom[3] = "VIII";
                break;
            case "9":
                letrasrom[3] = "IX";
                break;
            default:
                alert("ERROR")
                break;
        }
        resultadonumeroromano.innerHTML = '<div class="alert alert-primary" role="alert"><h3>Numero Romano: ' + letrasrom[0] + letrasrom[1] + letrasrom[2] + letrasrom[3] + ' <h3></div>';
    } else {
        resultadonumeroromano.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Debe ingresar un numero valido del 1000 hasta el 2000<h3></div>';
    }

}