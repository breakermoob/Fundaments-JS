var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/public-data/';
   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}

//Api y uri para obtener la informacion
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain:true}

// //Funcion con callback
// function obtenerPersonaje(id, callback){
//    const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
//    $.get(lukeUrl,opts,function(persona){
//       console.log(persona.name);
//       if (callback) {
//          callback();
//       }
//    });
// }

// //En orden con callback hell
// obtenerPersonaje(1, function(){
//    obtenerPersonaje(2,function(){
//       obtenerPersonaje(3,function(){
//          obtenerPersonaje(4)
//       })
//    })
// });


//Funcion con callbackHell con manejo de errores para perdida de internet
function obtenerPersonaje(id, callback){
   const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
   //El fail es otro callback como arrowFunction para manejar el error
   $.get(lukeUrl,opts,callback).fail(()=>{
      console.log('Puta vida, error de internet :(');
   });
}

//En orden con callback hell
obtenerPersonaje(1, function(persona){
   console.log(persona.name);
   obtenerPersonaje(2,function(persona){
      console.log(persona.name);
      obtenerPersonaje(3,function(persona){
         console.log(persona.name);
         obtenerPersonaje(4,function(persona){
            console.log(persona.name)
         })
      })
   })
});