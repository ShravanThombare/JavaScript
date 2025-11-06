// primitive 

// 7 types : Call by referance
/*
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BitInt
*/


// Dynamic type language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 12345678907654n


// Reference type (Non primetive)

/*
    1. Array
    2. Objects
    3. Functions
*/

const heros = ["ironman", "captain", "thor"]
let myObj = {
    name: "shravan",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");    
}

console.log(typeof anotherId);


// Return types

/*
    1. number = number
    2. String = String
    3. boolean = boolean
    4. null = object
    5. undefined = undefined
    6. object = object
*/ 