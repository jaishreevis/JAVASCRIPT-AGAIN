// console.log("object")


// //singleton-we create singleton array using object.create
// // Object.create

// const mySym = Symbol("sym1")// SYMBOL
// // console.log(mySym)
// //Object literals
// let user ={
//   name:"jaish",
//   "age age":22,
//   location:"delhi",
//   email:"jaishreevis@gmail.com",
//   isLoggedIn:false,
//   [mySym]: "mykey1",
// }
// console.log(user.name)
// // console.log(user.age )
// // console.log(user[name])// this is wrong as name is a string
// console.log(user["name"])
// console.log(user["age age"])
// console.log(user[mySym])

// // if you want to freeze a object and dont want amyone to chnage any of its property use Object.freeze(___)
// user.isLoggedIn=true
// console.log(user)

// // Object.freeze(user)//does not changes anything in user object we defined.

// user.isLoggedIn=false
// console.log(user)

// user.greeting = function(){
//   console.log(`Hello , ${this.name}... how are you. Your age is ${this["age age"]}.`)
// }
// user.greeting();

// to join a object
// let obj1 = {1:"a",2:"b"}
// let obj2 = {3:"a",4:"b"}
// let obj3 = {5:"a",6:"b"}
// let obj = Object.assign({} , obj1 , obj2 , obj3)
// console.log(obj)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// let newobj = {...obj1,...obj2,...obj3}
// console.log(newobj)

// let tinderUser = {
//   id:1,
//   isLoggedIn:true,
//   gender:"male"
// }
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.keys(tinderUser).length)
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// console.log(typeof ('9'*3))
// console.log(4/0)

// const course  ={
//   coursename : "js",
//   price : "999",
//   courseinstructor:"jaish"
// }

// const {courseinstructor}= course
// console.log(courseinstructor)
// const {courseinstructor:instructor}= course
// console.log(instructor)