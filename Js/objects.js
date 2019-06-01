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
   console.log('The name is '+person.nombre+' '+person.apellido+' and he have '+person.edad + ' years old')
}
printDataPerson(persona1);
printDataPerson(persona2);