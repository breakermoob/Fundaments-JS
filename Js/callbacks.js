//Problema de CORS
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

//Parametros que recibe la funcion de JQuery para el get del API
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}
const response = function(persona){
   console.log(persona.name);
}
//Funcion get usando JQuery
//URL del api - cossDomain - Respuesta
// $.get(lukeUrl,opts,response);

function obtenerPersonaje(id){
   const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
   $.get(lukeUrl,opts,response);
}
//Como son funciones asincronicas, no sabemos en que orden van a llegar
for (let index = 1; index < 4; index++) {
   obtenerPersonaje(index);
}
