//Las clases a fianl de cuentas terminan siendo prototipos
//prototipo de animal

//Esta es la forma complicada de hacerlo, existe un class.js,
//donde se ve la forma nueva y mas facil de implementar clases y herencia

//atributos


//Constructor
function animal(nombre,tipo,color){
   //atributos
   this.nombre = nombre
   this.tipo = tipo
   this.color = color
   // return this (Este return no es necesario, es implicito en js)
}

//Funciones asociadas a una clase
animal.prototype.presentarse = function(){
   console.log(`Hola soy el  ${this.nombre} y soy ${this.tipo}.`);
}
//Esta es una forma de hacer la funcion como arrow function
//Pero en javascript el this de las arrow fucntion, no es el mismo
//El dis cambia y se convierte en lo que esta afuera, en la mayoria
//De los casos este sera window y por eso da undefine si buscamos algo
// animal.prototype.presentarse = ()=>{
//    console.log(`Hola soy el  ${this.nombre} y soy ${this.tipo}.`);
// }

//Instanciacion y llamado
var leon = new animal('Leon', 'salvaje','amarillo');
leon.presentarse();


//Herencia de prototipos
//Este metodo permite heredar pasando una clase hija y una padre
function heredaDe(protoHijo, protoPadre){
   var fn = function(){}
   fn.prototype = protoPadre.prototype
   protoHijo.prototype = new fn
   protoHijo.prototype.costructor = protoHijo
}

function mamifero(nombre,tipo,color){
   this.nombre = nombre
   this.tipo = tipo
   this.color = color
}
heredaDe(mamifero,animal)
mamifero.prototype.presentarse = function(){
   console.log(`Soy mamifero`);
}
var perro = new mamifero('perro', 'domestico','amarillo');
perro.presentarse()

