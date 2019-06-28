var empanadaAmarilla = {
   color:'amarilla',
   ingredientes:['papa','jamon','piña'],
   precio:1000
}

const go ='me la llevo';

function empanadasType(objetoEmpanada){
   if(objetoEmpanada.precio<=1000) return go;
}

var result = empanadasType(empanadaAmarilla);
console.log(result );