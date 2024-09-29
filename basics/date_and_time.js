console.log('Date')

// JAN 1 1970
// WE GET TIME IN MILLISECONDS

// let myDate = new Date()
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toString())
// console.log(typeof myDate)

// month starts with 0
// let myCreatedDate = new Date(2025,0,3)
// console.log(myCreatedDate.toDateString())
// let myCreatedDate = new Date(2025,0,3,5,4)
// console.log(myCreatedDate.toLocaleString())
// let myCreatedDate = new Date("2025-04-23")
// console.log(myCreatedDate.toLocaleString())


// let timeStamp = Date.now()
// console.log(timeStamp)

let newdate = new Date()
// console.log(newdate.toString())
// console.log(newdate.getTime())
// console.log(newdate.getDate())
// console.log(newdate.getDay())
// console.log(newdate.getFullYear())
// console.log(newdate.getMonth()+1)
// console.log(newdate.getHours())

// IMPORTANT
console.log(newdate.toLocaleString('default', {
  weekday:"long",
  month:"long",
}))