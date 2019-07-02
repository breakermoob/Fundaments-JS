//Estructuras Repetitivas

//FOR
console.log("For");
for (let i = 0; i < 5; i++) {
   console.log(Math.floor(Math.random() * (100 - 1)) + 1);
}

//While
console.log("While");
let i = 0;
while (i<5) {
   console.log(Math.floor(Math.random() * (100 - 1)) + 1);
   i++
}

//do While
console.log("Do While");
i=0
do {
   console.log(Math.floor(Math.random() * (100 - 1)) + 1);
   i++
} while (i<5);