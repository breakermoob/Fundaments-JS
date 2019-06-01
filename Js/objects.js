//This is a object, is like a simple variable, but can contain others values.
var persona1 = {
   nombre: 'Leonidas',
   apellido: 'Arango',
   edad: 23
}
var persona2 = {
   nombre: 'Leoncio',
   apellido: 'Arango',
   edad: 28
}

function printDataPerson(person){
   //this is a short syntax for var nombre = person.nombre  -  var apellido = person.apellido ...
   var { nombre,apellido,edad } = person
   console.log('The name is '+nombre+' '+apellido+' and he have '+edad + ' years old')
}
printDataPerson(persona1);
printDataPerson(persona2);