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




/*------------------------------------------------------------------------------------------------------------- */

// MEMORY - stack memory and heap memory
/* 
primitive types uses stack memory.
it means when we need the value and change it we get a copy of that value not the original one. so even if we modify it the copied value only changes not the  original one.
Non-Primitive used heap memory.
it means when we need the value and change it we get a reference of that value original one. so if we modify it the original value changes.
*/


// STACK MEMORY
/* This code snippet is demonstrating the concept of memory allocation in JavaScript. Here's what's happening: */
/* by this example you can understand how the stack memory works we get a copy of the value of name in newname so when we change the value of newname it does not affect the previous defined variable name 's value. */
let name = 'jaish';
// let newname = 'jaishree'
let newname = name
newname='gopal'
console.log(name);
console.log(newname);

// HEAP MEMORY
/* In this we get the reference of the original value. */
/* This code snippet is demonstrating how heap memory works in JavaScript. */
/* This code snippet is creating two objects `person1` and `person2` that initially reference the same
object in memory. When `person2.gender` is changed to "female", it modifies the original object that
`person1` is also referencing. This is because objects in JavaScript are reference types, so when
you assign an object to another variable, you are actually creating a reference to the same object
in memory. Therefore, changing the object through one reference will reflect the changes in all
references to that object. */
let person1 = {
  age:22,
  gender:"male",
  email:"person1@gmail.com",
}
console.log(person1)
let person2 = person1
person2.gender="female"
person1.age=44
console.log(person2)
console.log(person1)