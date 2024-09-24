// var let and const are variables .
// variables arelike containers that are used to store data in the javascript.
// javascript variables must have unique names. These names are called identifiers.

// we can understand these variables by using block {} , more easily
{
  // we can not change the value of const variable
  const name = "jaish"
  console.log(name)
}
{
  // we can re-assign the value of the variable
  let age = 22;
  // console.log(age)
  age = 10 
  console.log(age)
}
{
// DO NOT USE THIS... they are not block scoped and functional scope..so not worthy of using.
  var gender = "female"
  console.log(gender)
}
{
  // they are also var variables. Suggested not to use like this
  email="jaishreevis"
}
// console.log(name) 
// console.log(age)
// console.log(gender)
// console.log(email)

const name = "jaish";
let age = 22;
var gender = "female";
email="jaishreevis";
let status;
// console.table([name,age,gender,email,status])