"use strict"; //it prevents us to make mistakes or do unsafe actions like declaring a variable without a any keyword(let,const,var)and more

// DATATYPES ARE OF TWO TYPES - PRIMITIVE AND NON-PRIMITIVE. PRIMITIVE TYPES ARE CALL BY VALUE 
// PRIMITIVE(STRING , NUMBER , BOOLEAN , NULL , BIGINT , UNDEFINED , SYMBOL)
// NON-PRIMITIVE ALSO CALLED REFERENCE TYPE(ARRAYS , OBJECT , FUNCTIONS)

// SSNNBB

// String
// Symbol
// Number => 2 to power 53
// null //(standalone value)
// Boolean
// BigInt
// undefined
// object

// console.log(typeof undefined)
// console.log(typeof null)

//          DATATYPE CONVERSION CONFUSION
// let score = "77aa"
// console.log(typeof(score))
// let newscore = Number(score)
// console.log(typeof newscore)
// console.log(newscore)

// let bool = 0
// console.log(typeof bool)
// console.log(bool)

// let newbool = Boolean(bool)
// console.log(typeof newbool)
// console.log(newbool)

// let val="he"
// console.log(val)
// console.log(typeof val)

// let newval = Boolean(val)
// console.log(newval)
// console.log(typeof newval)

// console.log("1"+3+3) //133
// console.log(1+3+"3") //43

// console.log(+true)
// console.log(+"")

// let a = 6;
// let b = a++
// console.log("a:",a ,"b:", b)
// let x = 6;
// // x++
// let y = ++x

// console.log("x:",x ,"y:", y)


// symbol - we use symbol to make something UNIQUE. exmaple

// const score = Symbol('123')
// const newscore = Symbol('123')

// console.log(score)
// console.log(newscore)
// console.log(score === newscore) //false- even though the value is same they are not equal.

// const a = '123'
// const b = 123
// console.log(a==b)//true
// console.log(a===b)//false

// const Number = 987654321234567899876543234567890
// console.log(Number)
// const bigNumber = 987654321234567899876543234567890n //bigint just add a 'n' at last
// console.log(bigNumber)