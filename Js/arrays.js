var perro = {
   color:'blanco',
   tipo:'mamifero',
   domestico:true,
   patas:4
}

var gato = {
   color:'negro',
   tipo:'mamifero',
   domestico:true,
   patas: 4
}

var ave = {
   color:'azul',
   tipo:'mamifero',
   domestico:true,
   patas:2
}

var dragonKoi= {
   color:'rojo',
   tipo:'reptil',
   domestico:false,
   patas:2
}

var animales = [perro,gato,ave,dragonKoi]
console.log(animales.length);
console.log(animales);

//Usando filter para iterar en el array
const esMamifero = ({tipo}) => tipo==='mamifero'
var animalesMamiferos = animales.filter(esMamifero)
console.log(animalesMamiferos);
console.log(" ");
console.log(" ");

//Funcion map utilizada para modificar elementos en un array
console.log("Mutando animales con map");
const mutarAnimal = animales=> {
   //Esto aplica si queremos modificar el objeto
   // animales.patas+=3;
   // return animales;

   //Esto aplica si no queremos modificar 
   // el objeto y simplemente creamos uno nuevo con
   // la misma informacion del anterior
   return{
      ...animales,
      patas:animales.patas+=3
   }


}
var animalesMutantes = animales.map(mutarAnimal);
console.log(animalesMutantes);
console.log(" ");
console.log(" ");


//Funcion reduce utilizada para reducir un array
console.log("Quitando animales con reduce");

//Esta es la opcion comun para hacer un contador
var acum = 0;

for (let index = 0; index < animales.length; index++) {
   acum = acum + animales[index].patas;
}
console.log(`la cantidad total de patas es ${acum}`);

//Una opcion mas practica es
acum = 0
const contador = (acum, {patas})=>{
   return acum + patas;
}
var cantidadPatas = animales.reduce(contador,0);
console.log(`El numero de patas con reduce es ${cantidadPatas}`);