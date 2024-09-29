/*SHALLOW COPY AND DEEP COPY */
/* shallow copy of an object is a copy whose properties share the same Reference as those of the source object from which the copy was made. in short if we change the value it changes all over the program like HEAP MEMORY*/
/* deep copy of an object is a copy whose properties DO NOT share the same Reference as those of the source object from which the copy was made. like STACK MEMORY  */
/* WHENEVER WE PERFORM COPY OPERATIONS IN ARRAY IT CREATES A SHALLOW COPY  */

// let myNewArr = new Array(1,2,3,4)
// console.log(myNewArr[1])

// let myArr= [0,1,2,3,4]
// console.log(myArr)
// console.log(myArr.push(6))
// console.log(myArr.push(9))
// console.log(myArr)
// console.log(myArr.pop())
// console.log(myArr)

// myArr.unshift(8)
// myArr.shift()
// console.log(myArr)

// console.log(typeof myArr.includes(9))
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))
// console.log(myArr.indexOf(9)) //-1 as it does not exist

// const newArr = myArr.join("")
// console.log(newArr)
// console.log(typeof newArr)

// SLICE SPICE
// let arr = [0,1,2,3,4,5,6]
// console.log(arr.slice(1,3))
// console.log("slice--------------",arr)
// console.log(arr.splice(1,3))
// console.log("splice-------------",arr)

/* splice includes the range while slice dont and
MAIN DIFF is slice does not change the  original arrya while splice manipulates the original array*/

let array1 = [1,2,3,4]
let array2=[5,6,7,8]
let mainArraY = [...array1,...array2]
console.log(mainArraY)
let allarray = array1.concat(array2)
console.log(allarray)

let newarray = [1,2,3,[3,5,6,[4,6,3,5,7]]]
console.log(newarray)
let flatarray = newarray.flat(Infinity)
console.log(flatarray)

console.log(Array.isArray(newarray))
console.log(Array.from("jaish"))
console.log(Array.from({name:"hitesh"})) //Interview
 
let num1 =100
let num2 =200
let num3 =300
console.log(Array.of(num1,num2,num3))