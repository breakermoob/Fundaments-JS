//Arrow Functions

//Js permite guardar funciones como variables

const funcionEnVar = function(){console.log("Holii");}

funcionEnVar();

//Otra forma de hacerlo es con arrow Functions
const funcionEnVar2 =  ()=>{console.log("Holii ArrowFunction");}
 
funcionEnVar2();


const YEAR  = 2019;
var obj ={
   number:2019
}

//Tipo nombre = Retorno => Condicional
const prueba = ({number}) => number == YEAR 

var y = prueba(obj);
console.log(y);