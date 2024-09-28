console.log("STRINGS")
/* The code snippet is creating two variables `name` and `age` with values "jaishree" and 22
respectively. Then it uses string interpolation to create a message that combines these variables
into a single string. The message "hello jaishree, your age is 22." will be printed to the console.
String interpolation allows for easy embedding of variables within a string for more readable and
dynamic output. */
name = "jaishree"
age = 22
console.log(`hello ${name} , your age is ${age}.`) // this is STRING INTERPOLATION. WE MAKE PLACEHOLDER OF VALUES.EASIER TO UNDERSTAND.


/* The function creates a Person object with a name and age property, and then creates an instance of the Person object with the name 'Alice' and age 30.
 @parm name - Alice
 @param age - 30
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
/* The `new` keyword in JavaScript is used to create an instance of a user-defined
object type or of one of the built-in object types that has a constructor function.
When you use `new` with a constructor function, it creates a new object and sets the
constructor function's prototype as the new object's prototype. This allows the new
object to inherit properties and methods from the constructor function's prototype. */

const person1 = new Person('Alice', 30);
// const person1 = Person('Alice', 30);
// console.log(person1.name); // Output: Alice
// console.log(person1.age);  // Output: 30
console.log(person1)

let oldname = 'jaish'
console.log(oldname)
console.log(oldname.length)
console.log(oldname.__proto__)

let newname = new String('jaishree')
console.log(newname)
// when we use new we unlock the properties of string or any type like in this case newname[0] outputs 'j' just define the type of DATATYPE.
// console.log(newname[0])
// console.log(newname[1])
console.log(newname.length)
console.log(newname.__proto__)
console.log(newname.slice(-8,4))