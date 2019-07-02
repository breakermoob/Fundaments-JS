//Api y uri para obtener la informacion
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

//Parametros que recibe la funcion de JQuery para el get del API
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}
const response = function(persona){
   console.log(persona);
}
//Funcion get usando JQuery
//URL del api - cossDomain - Respuesta
$.get(lukeUrl,opts,response);
