import pkg from 'prompt-sync'

const prompt = pkg()

let first_name = prompt( 'Enter First Name: ')
let last_name = prompt('Last Name:')
let age = Number(prompt( 'Enter Age: '))
let current_year = Number(prompt('Enter your current year:'))

let earthly_appearance = (current_year - age)
console.log(earthly_appearance)

console.log(`${first_name} ${last_name}, You are ${age} years old and you came to Earth In the year ${earthly_appearance}`)



let student_name = prompt('Enter your Name:')
let student_age = Number(prompt('Enter your Age:'))
let departmental_name = prompt('Enter Your departmental name:')
let departmental_score = Number(34.72)

console.log(`Welcome ${student_name}, you are in ${departmental_name} department, you are ${student_age} years old and your score is ${departmental_score}.`)


let user_weight = Number (prompt('Enter your Weight in pounds:'))
console.log('This app authomatically converts your weight frm pounds to kilograms')
let conversion_weight = Number(user_weight * 0.45)
console.log(`Hello your weight has been converted to ${conversion_weight}kg.`)