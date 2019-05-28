var hworld = 'Hello World!'
console.log(hworld)

var number
number = 0
console.log("the number is:" + number)

number +=5
console.log("the number is:" + number)

number -=2
console.log("the number is:" + number)

number *=10
console.log("the number is:" + number)

number = number/2
console.log("the number is:" + number)

number += 0.25
console.log("the number is:" + number)
//
number *= 15.25589
console.log("the number is:" + number)

//just a number of decimals is with the function .toFixed("HERE NUMBER")
console.log("the number is:" + number.toFixed(3))

//FLOAT
console.log("the number is:" + parseFloat(number.toFixed(3)))  