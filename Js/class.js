//Esta es la forma mas facil de hacer los prototipos

class animal {
   constructor(nombre, tipo, color) {
      this.nombre = nombre
      this.tipo = tipo
      this.color = color
   }
   presentarse(){
      console.log(`Hola soy el  ${this.nombre} y soy ${this.tipo}.`);
   }
}

//Herencia
class mamifero extends animal{
   constructor(nombre, tipo, color) {
      super(nombre,tipo,color)
   }
   presentarse(){
      console.log(`Soy mamifero`);
   }
}


var leon = new animal('Leon', 'salvaje','amarillo');
leon.presentarse();

var perro = new mamifero('Perro', 'domestico','cafe');
perro.presentarse();