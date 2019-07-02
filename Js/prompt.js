const readline = require('readline');
//Solo funciona en ek navegador
// var deseos = prompt("Qué quieres?");

var deseos = "comida";

switch (deseos) {
   case "comida":
      console.log("No hay");
      break;
      case "plata":
         console.log("No tengo");
         break;
   default:
      console.log("No entendí");
      break;
}