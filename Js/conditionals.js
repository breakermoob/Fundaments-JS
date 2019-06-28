//Primera de las estructuras de control
//Esta decide si un codigo se ejecuta o no.

var rockstar ={
   nombre: "EvilSoldier",
   edad: 23,
   profesion: "SWE",
   cantante: true,
   guitarrista: false
}

var rockstar2 ={
   nombre: "EvilRockstar",
   edad: 27,
   profesion: "SCE",
   cantante: false,
   guitarrista: true
}


function enseñarProfesion(objeto){
   if (objeto.profesion === "SWE") console.log(`${objeto.nombre} es: ${objeto.profesion}`);
   else console.log(`${objeto.nombre} es: ${objeto.profesion}`);
}

enseñarProfesion(rockstar);
enseñarProfesion(rockstar2);