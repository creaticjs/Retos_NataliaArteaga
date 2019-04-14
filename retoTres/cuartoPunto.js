var h = 0;

function puntoCuatro() {
        for(i=1990;i<2001;i++){
            var N = domingoPascua(i);
            if(N>31){
                N=N-31;
                resultadoCuatro.innerHTML += '<div class="alert alert-primary" role="alert"><h3> En '+i+ ' es Abril ' + (parseFloat(N)) + '<h3></div><br>';
            }
            else{

            resultadoCuatro.innerHTML += '<div class="alert alert-primary" role="alert"><h3> En '+i+ ' es Marzo ' + (parseFloat(N)) + '<h3></div><br>';
            }
        }     
}

function domingoPascua(anno) {
    var a = anno % 19;
    var b = anno % 4;
    var c = anno % 7;
    var d = (19 + a + 24) % 30;
    var e = ((2 * b )+ (c * 4) + (6 * d) + 5) % 7;
    var n = (22 + d + e);
    return n;
}