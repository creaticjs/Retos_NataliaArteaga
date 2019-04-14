var personajesInfo = [];
var membersInf = []
var hechizosFav=[]
var varPersonajes=[];
function getP(url) {
  return new Promise(function (resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Error: 🤮" + this.status);
        }
      }
    };
    xhttp.open("GET", url);
    xhttp.send();
  });
}


function sombreroSeleccionador(url = "https://www.potterapi.com/v1/sortingHat") {
  //obtiene la casa aleatoria y con el switch veo cual llego e imprimo nada mas,
  //retorno para usarla despues jajaj
  getP(url).then(function (data) {
    $("ul li").hide()
    miembros.innerHTML =""
    switch (data) {
      case "Gryffindor":
        // $('#pertenenciaCasa').hide()
        sucasa.innerHTML = '<br><h3> Your house is: ' + data + '<br><h3>';
        imagencasa.innerHTML = "<Image src=" + "./img/Gryffindor.png" + ">" +
          "</Image>"
        return  getP("https://www.potterapi.com/v1/houses/5a05e2b252f721a3cf2ea33f?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")

      case "Slytherin":
        // $('#pertenenciaCasa').hide()
        sucasa.innerHTML = '<br><h3> Your house is: ' + data + '<br><h3>';
        imagencasa.innerHTML = "<Image src=" + "./img/Slytherin.png" + ">" +
          "</Image>"
        return getP("https://www.potterapi.com/v1/houses/5a05dc8cd45bd0a11bd5e071?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")

      case "Hufflepuff":
        //$('#pertenenciaCasa').hide()
        sucasa.innerHTML = '<br><h3> Your house is: ' + data + '<br><h3>';
        imagencasa.innerHTML = "<Image src=" + "./img/Hufflepuff.png" + ">" +
          "</Image>"
        return getP("https://www.potterapi.com/v1/houses/5a05dc58d45bd0a11bd5e070?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")

      case "Ravenclaw":
        // $('#pertenenciaCasa').hide()
        sucasa.innerHTML = '<br><h3> Your house is: ' + data + '<br><h3>';
        imagencasa.innerHTML = "<Image src=" + "./img/Ravenclaw.png" + ">" +
          "</Image>"
        return getP("https://www.potterapi.com/v1/houses/5a05da69d45bd0a11bd5e06f?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")
    }
   
  }).then(function(data){
    verTabla(data,0)
  })
}

function verTabla(info,idTabla) {
  informacionCasa = (info[0])
  id = informacionCasa._id
  mascot = informacionCasa.mascot
  headOfHouse = informacionCasa.headOfHouse
  houseGhost = informacionCasa.houseGhost
  founder = informacionCasa.founder
  values = informacionCasa.values
  colors = informacionCasa.colors
  members = informacionCasa.members
  //console.log(members)
  contenidotabla = "<tr><td>Mascot</td><td>" + mascot + "</td></tr>" +
    "<tr><td>Founder</td><td>" + founder + "</td></tr>" +
    "<tr><td>Head of House</td><td>" + headOfHouse + "</td></tr>" +
    "<tr><td>Ghost</td><td>" + houseGhost + "</td></tr>" +
    "<tr><td>Values</td><td>" + values + "</td></tr>" +
    "<tr><td>Colors</td><td>" + colors + "</td></tr>"
  if(idTabla==0){
    tabla0.innerHTML = contenidotabla
    botoncasas.innerHTML = '<button type="button" id="'+id+'"onclick="verMiembros(this,0)" class="btn btn-dark">See Members</button>';
  }else if(idTabla==1){
    tabla1.innerHTML = contenidotabla
    botoncasa1.innerHTML = '<button type="button" id="'+id+'"onclick="verMiembros(this,1)" class="btn btn-dark">See Members</button>';
  }
 
}

function verMiembros(id,idmiembros){
  console.log(id.id)
  getP("https://www.potterapi.com/v1/houses/"+id.id+"?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")
  .then(function(data){
    console.log(data)          
    members = data[0].members
    members.map(function listar(persona) {
    if(idmiembros==0){
      miembros.innerHTML += "<li class='list-group-item' data-id=" + persona._id + ">" + persona.name + "</li>"
    }else if(idmiembros==1){
      miembros1.innerHTML += "<li class='list-group-item' data-id=" + persona._id + ">" + persona.name + "</li>"
    }
    
  })
  clicklista()
  })
}

function verCasa(casa){
  $("ul li").hide()
  sucasa1.innerHTML = '<h3>' + casa.name + '<br><h3>';
  getP("https://www.potterapi.com/v1/houses/"+casa.id+"?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")
  .then(function(data){
    verTabla(data,1)
  })
  
}


function verGrupo(grupoP){
  grupos=[]
  $("ul li").hide()
  getP("https://www.potterapi.com/v1/characters?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi&"+grupoP.name+"=true")
  .then(function(data){
      personajesAtributos = data.map(function(personaje){
      name= personaje.name
      idper=personaje._id
     grupos.push({name,idper})
      })
    nombreGrupo.innerHTML="<br><h1>"+grupoP.name.toUpperCase()+"</h1>"  
    grupos.map(function listar(persona) {
      //imprimo lista de los miembros para luego sacar sus atributos al dar click
      verGruposs.innerHTML += "<li class=" + "list-group-item" + " data-id=" + persona.idper+ ">" + persona.name + "</li>"
    })
    clicklista()
    console.log(grupos)
  })
  
}
function verSpecie(specie){
  var species=[]
  $("ul li").hide()
  getP("https://www.potterapi.com/v1/characters?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi&species="+specie)
  .then(function(data){
      personajesAtributos = data.map(function(personaje){
      name= personaje.name
      idper=personaje._id
      species.push({name,idper})
      })
    
      nombreEspecie.innerHTML ="<br><h1>"+specie.toUpperCase()+"</h1>"
  species.map(function listar(persona) {
      //imprimo lista de los miembros para luego sacar sus atributos al dar click
      verEspecies.innerHTML += "<li class=" + "list-group-item " + " data-id=" + persona.idper+ ">" + persona.name + "</li>"
    })
    clicklista()
    console.log(species)
  })
  
}

function verAnimagos(){
  $("ul li").hide()
  animagos.innerHTML =""
  var animagusPer=[]
  getP("https://www.potterapi.com/v1/characters/?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")
  .then(function(data){
      personajesAnimagus = data.map(function(personaje){
      name= personaje.name
      idper=personaje._id
      animagus=personaje.animagus
     if(animagus!=undefined)     {
       animagusPer.push({name,idper})
     }    

    })
      animagosM = animagusPer.map(function listar(persona) {
      //imprimo lista de los miembros para luego sacar sus atributos al dar click
      animagos.innerHTML += "<li class=" + "list-group-item  cursor" + " data-id=" + persona.idper+ ">" + persona.name + "</li>"
    })    
    clicklista()
  })

}

function verProfesores(){
  $("ul li").hide()
  profesores.innerHTML =""
  var profesoresPer=[]
  getP("https://www.potterapi.com/v1/characters/?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")
  .then(function(data){
      personajesProfesores = data.map(function(personaje){
      name= personaje.name
      idper=personaje._id
      role=personaje.role

     if (role!=undefined) {
      rol=(role.substr(0,9))
      if(rol=="Professor"){
        profesoresPer.push({name,idper})
      }
     }  
    })

    profesoresM = profesoresPer.map(function listar(persona) {
      //imprimo lista de los miembros para luego sacar sus atributos al dar click
      profesores.innerHTML += "<li class=" + "list-group-item" + " data-id=" + persona.idper+ ">" + persona.name + "</li>"
    })    
    clicklista()
  })
}


function clicklista() {
  //Ready
  $("ul li").click(function (e) {
    //al dar click obtengo el id y hago una peticion con ello para luego ver sus atributos
    idper = ($(this).data("id"));
    getP("https://www.potterapi.com/v1/characters/" + idper + "?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")
      .then(function (personaje) {
        //con los atributos del personaje solo imprimo para ver si este rio funciona jaja
        bloodStatus= personaje.bloodStatus
        school=personaje.school
        house= personaje.house
        name= personaje.name
        role= personaje.role
        school= personaje.school
        species= personaje.species
        boggart=personaje.boggart
        patronus=personaje.patronus
        animagus= personaje.animagus

        tabla2.innerHTML = "<tr><td>Name</td><td>" + name + "</td></tr>" +
        "<tr><td>Blood Status</td><td>" + bloodStatus + "</td></tr>" +
        "<tr><td>School</td><td>" + school + "</td></tr>" +
        "<tr><td>House</td><td>" + house + "</td></tr>" +
        "<tr><td>Role</td><td>" + role + "</td></tr>" +
        "<tr><td>Specie</td><td>" + species + "</td></tr>" +
        "<tr><td>Boggart</td><td>" + boggart + "</td></tr>"+
        "<tr><td>Patronus</td><td>" + patronus + "</td></tr>"+
        "<tr><td>Animagus</td><td>" + animagus + "</td></tr>"
        $('#modal').modal('show');

      })

  })

};


// Anterior forma, se paso a Vue.js
//function verHechizos(){
//   $("ul li").hide()
//   animagos.innerHTML =""
//   var animagusPer=[]
//   getP("https://www.potterapi.com/v1/spells/?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")
//   .then(function(data){
//       data.map(function(spells){
//       name= spells.spell
//       idper=spells._id
//       type=spells.type
//       effect=spells.effect
//       tabla3.innerHTML += "<td>" + name + "</td>"+ "<td>" + type + "</td>" +
//      "<td>"+ effect + "</td>" +'<td><img class="cursor" onclick="agregarHechizo(this)" id='+idper+' src="./img/estrellavacia.png"></td>'
//     })
//   })
// }


function agregarHechizo(img) {
  console.log(img.src)
  
  i=-1
   idSpell=img.id
  if(img.src=="http://127.0.0.1:5500/retoCuatro/img/estrellavacia.png"){
    
    tabla4.innerHTML=""
  $('#'+idSpell).attr( "src","./img/estrellallena.png")
  hechizosFav.push({idSpell})
}else if(img.src=="http://127.0.0.1:5500/retoCuatro/img/estrellallena.png"){
  
  tabla4.innerHTML=""
  $('#'+idSpell).attr( "src","./img/estrellavacia.png")
  hechizosFav.map(
     function(spell){
      i++
      if(spell.idSpell==img.id){
        hechizosFav.splice(i,1);
      }

    }
  )
  
}

verFavoritos()
}

function verFavoritos(){
  //tabla4.innerHTML=""
  hechizosFav.map(function (hechizo) {
getP("https://www.potterapi.com/v1/spells/"+hechizo.idSpell+"?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi").
then(function(hechizo){
  console.log(hechizo)
  tabla4.innerHTML += "<td>" + hechizo[0].spell + "</td>"+ "<td>" + hechizo[0].type + "</td>" +
   "<td>"+ hechizo[0].effect + "</td>" 
  // '<td><img  onclick="agregarHechizo(this)" id='+hechizo[0].idSpell+' name='+hechizo[0].name+' type='+hechizo[0].type+' src="./img/estrellallena.png"></td>'
  
})
   
  })    
  
}

function verPersonajes(){
  $("ul li").hide()
  personajes.innerHTML =""
  getP("https://www.potterapi.com/v1/characters/?key=$2a$10$mQeGDXK.NkD1H6Mm6USoU.eNDkLoRJc5Ev9NzIcgqqvSW4xQS9Zgi")
  .then(function(data){
      Mostrarpersonajes = data.map(function(personaje){
      name= personaje.name
      idper=personaje._id
      varPersonajes.push({name,idper})       
    })

    varPersonajes.map(function listar(personaje) {
      //imprimo lista de los miembros para luego sacar sus atributos al dar click
      personajes.innerHTML += "<li class=" + "list-group-item" + " data-id=" + personaje.idper+ ">" + personaje.name + "</li>"
    })    
    clicklista()
  })
}

function buscarPersonaje(nombre) {
  console.log(nombre)
  let nohay=0;
  $('ul').empty();
  varPersonajes.map(function listar(personaje) {
    //imprimo lista de los miembros para luego sacar sus atributos al dar click
    nombrePersonaje=personaje.name.toUpperCase()
    busqueda=nombre.toUpperCase()
    if((nombrePersonaje.indexOf(busqueda))!=(-1)){
    personajes.innerHTML += "<li class=" + "list-group-item" + " data-id=" + personaje.idper+ ">" + personaje.name + "</li>"
    nohay=1
    }   
  }) 
  if(!nohay){
    personajes.innerHTML = '<li class="list-group-item">No existen personajes con ese nombre</li>'
  }else{   
  clicklista()}
}

