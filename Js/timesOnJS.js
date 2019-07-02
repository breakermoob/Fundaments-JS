//Tiempos en js

console.log('Tiempo normal');
console.log(' ');
console.log('a');
console.log('b');
console.log('c');
console.log(' ');

//En este vemos como la letra b aparece de ultima porque hace un callback y al llegar se apila, debido a que la c se esta ejecutando luego
// console.log('Tiempo con un callback apilado en el stack');
// console.log(' ');
// console.log('a');
// setTimeout(() => {
//    console.log('b');
// }, 2000);
// console.log('c');


//Aqui vemos como la d se apila y ni se ejecuta hasta que acaba el loop
setTimeout(() => {
   console.log('d');
}, 2000);
for (let index = 0; index < 5000000000; index++) {}
