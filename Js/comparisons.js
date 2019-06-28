var x = 4; y = "4";

console.log("4 number + 4 String con == " + (x==y));
//El triple = es mucho mejor usarlo, para evitar errores.
//El doble igual es muy libre y accede de muchas formas
console.log("4 number + 4 String con === " + (x===y));

var persona = {
   nombre: "leon"
}

var persona2 = {
   npmbre: "leon"
}
var persona3 = persona2;
console.log(" ");
console.log("Comparaciones con doble igual, triple igual y objetos");
console.log(" ");
console.log("Objetos con == en diferente ubicación " +(persona==persona2));
console.log("Objetos con === en diferente ubicación " +(persona===persona2));

//En este caso persona3 apunta al mismo nodo que persona2 y por ello sera igual
console.log("Objetos con igual ubicación de memoria " +(persona2===persona3));

//Esto es una forma de guardar la variable persona2 en otraPersona
var otraPersona = {
   ...persona2
}//Esto hace que ambos apunte a la misma direccion de memoria, pero no son iguales

console.log("Objetos con igual ubicación, pero asignamiento diferente " +(otraPersona==persona2));
