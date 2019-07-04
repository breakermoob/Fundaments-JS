//Api y uri para obtener la informacion
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

//Parametros que recibe la funcion de JQuery para el get del API
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}
// const response = function(persona){
//    console.log(persona);
// }
//Funcion get usando JQuery
//URL del api - cossDomain - Respuesta
// $.get(lukeUrl,opts,response);

function obtenerPersonaje(id, callback){
   const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
   $.get(lukeUrl,opts,function(persona){
      console.log(persona.name);
      if (callback) {
         callback();
      }
   });
}

//Como son funciones asincronicas, no sabemos en que orden van a llegar
for (let i = 1; i < 5; i++) {
   obtenerPersonaje(i);
}

//En orden con callback hell
obtenerPersonaje(1, function(){
   obtenerPersonaje(2,function(){
      obtenerPersonaje(3,function(){
         obtenerPersonaje(4)
      })
   })
});
