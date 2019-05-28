var name = 'leonidas', age = 23
var name1 = 'leonidas_Joven', age1 = 10
var name2 = 'leonidas_Viejo', age2 = 85

//Function basic structure
//La idea de utilizar una funcion es reutilizar código
function printAge(n,e) {
   console.log(`${n} tiene ${e} años`)
}
//calling the function
printAge(name,age)
printAge(name1,age1)
printAge(name2,age2)