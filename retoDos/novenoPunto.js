   var radio = document.getElementById("radio").value;
   var radio = parseFloat(radio);
   var d = 0;
   var a = 0;
   var c = 0;

   function calculardiametro() {
       var radio = document.getElementById("radio").value;
       if (radio >= 0) {
           d = radio * 2;
           resultadoc.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El diametro del circulo es ' + d + ' cm <h3></div>';
       } else {
           resultadoc.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Debe ser un valor positivo<h3></div>';
       }
   }

   function calcularcircunferencia() {
       var radio = document.getElementById("radio").value;
       if (radio >= 0) {
           c = 2 * radio * (Math.PI);
           resultadoc.innerHTML = '<div class="alert alert-primary" role="alert"><h3>La circunferencia del circulo es ' + c + ' cm <h3></div>';
       } else {
           resultadoc.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Debe ser un valor positivo<h3></div>';
       }
   }

   function calculararea() {
       var radio = document.getElementById("radio").value;
       if (radio >= 0) {
           a = (Math.pow(radio, 2)) * (Math.PI);
           resultadoc.innerHTML = '<div class="alert alert-primary" role="alert"><h3>El area del circulo es ' + a + ' cm <h3></div>';
       } else {
           resultadoc.innerHTML = '<div class="alert alert-danger" role="alert"><h3>Debe ser un valor positivo<h3></div>';
       }
   }