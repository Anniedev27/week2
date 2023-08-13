import pkg from 'prompt-sync'

const prompt = pkg()

let first_name = prompt( 'Enter First Name: ')
let last_name = prompt('Last Name: ')
let age = Number(prompt( 'Enter Age: '))
let current_year = Number(prompt('Enter your current year: '))

let earthly_appearance = (current_year - age)
// console.log(earthly_appearance)

console.log(`${first_name} ${last_name}, You are ${age} years old and you came to Earth In the year ${earthly_appearance}`)



let student_name = prompt('Enter your Name: ')
let student_age = Number(prompt('Enter your Age: '))
let departmental_name = prompt('Enter Your departmental name: ')
let departmental_score = Number(34.72)

console.log(`Welcome ${student_name}, you are in ${departmental_name} department, you are ${student_age} years old and your score is ${departmental_score}.`)


let user_weight = Number (prompt('Enter your Weight in pounds: '))
console.log('This app authomatically converts your weight from pounds to kilograms')
let conversion_weight = Number(user_weight * 0.45)
console.log(`Hello your weight has been converted to ${conversion_weight}kg.`)

console.log('DON SANTOS MAFIANS PARTY')

let have_gun = input('Do you have a gun? (yes or no): ')
let have_tatoo =  input('Do you have a parabellum tatoo? (yes or no): ')


if(have_gun.toLowerCase() == 1 && have_tatoo.toLowerCase() == 1){
    console.log('You are eligible and you have recieved your ticket')
}else{
    console.log('You are not eligible and you can not recieve your ticket')
}


let firstNum = Number(input('Enter the First Number: ') )
let secondNum = Number(input('Enter the Second NUmber: '))
let thirdNum = Number (input('Enter the third Number: '))   
let fourthNum = Number(input("Enter the Fourth Number: "))

let operator = input("Enter Operator: ")

if(operator == "+"){console.log(`${firstNum}${operator}${secondNum}${operator}${thirdNum}${operator}${fourthNum}=${firstNum+secondNum+thirdNum+fourthNum}`)
}else if(operator == '*'){
    console.log(`${firstNum}${operator}${secondNum}${operator}${thirdNum}${operator}${fourthNum}=${firstNum*secondNum*thirdNum*fourthNum}`)
}


for (let i = 0; i <= 10000; i += 2) {
    console.log(i);
  }
  
  const tableSize = 30;

  for (let i = 1; i <= tableSize; i++) {
    for (let j = 1; j <= tableSize; j++) {
      const result = i * j;
      console.log(`${i} * ${j} = ${result}`);
    }
    console.log("------------------");
  }

  let user_name = prompt( 'Enter User Name: ')
let age = prompt( 'Enter Age: ')

console.log(`${user_name} is ${age} years old.`)

// first assignment
let num_one = 6
let num_two = 9
let sum_num = num_one + num_two

console.log (sum_num)  


//second assinment

his_name = 'john'
his_age = 20
exising = false




// let patient_name = prompt( 'Enter Patient Name: ')
// let patient_age = prompt( 'Enter Age: ')
// let patient_type = prompt('Are you a New or Existing patient? please indicate: ')

// console.log(`${patient_name} is ${patient_age} years old. He is an ${patient_type} patient.`)


//third assignment

let user = prompt( 'Enter User Name:');

console.log(`Welcome ${user}`);




let num__one = Number(prompt('Enter First Number:'));
let num__two = Number(prompt('Enter Second Number:'));
let sum__num = num__one + num__two

console.log(`${num__one} + ${num__two} =${sum__num}`);


//extra
function square(number) {
    return number * number
}

let number = square(4);
console.log(number);


