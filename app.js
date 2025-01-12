// let guess = Math.random()*100
// let computerGuess = Math.round(guess)
// let humanGuess = Number(prompt("Please Enter your gueess :"));

// if(humanGuess == computerGuess){
//     alert("you win ")
// }

// else if(humanGuess>computerGuess){
//     alert("Too high")
// }
// else if(humanGuess<computerGuess){
//     alert("too low")
// }
// else{
//     alert("Game Cancelled")
// }


// // function winGame(){
// //     computerGuess == humanGuess
// //     alert("You won the game")
// // }

// // function tooLow(){
// //     if(humanGuess<computerGuess){
// //         alert("Please Try again too low")
// //     }
// // }


// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");

// textBox.addEventListener("keydown", (event) => {
//   output.textContent = `You pressed "${event.key}".`;
// });






// (function(){
//   console.log("hello brice")
// })


// function greetUser(username){
//   return `Welcome ${username}`
// }

// greetUser("Brice")



// function textMessage(from, message){
//    let scriptureReading = `This is the message from ${from},it says ${message}`
//    alert(scriptureReading)
// }

// textMessage("Jesus", "Love your neighbour as you love yourself")

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }



// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }

// let age = prompt("What is your age", 18)
// checkAge(age)


// function min(firstValue, secondVAlue){
//   return (firstValue<secondVAlue) ? firstValue:secondVAlue;
// }


// let value1 = prompt("Input the first value")
// let value2 = prompt("Input the second value")
// alert(min(value1,value2))

// function pow(x,n){
//   return (x**n)
// }
// alert(pow(3,3))

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Power ${n} is not supported, use a positive integer`);
// } else {
//   alert( pow(x, n) );
// }


// let greeting = function(){
//   alert("hello world")
// }



// function ask(question, yes , no){
//   if(confirm(question)) yes()
//   else no()
// }

// let choice=Math.random("brice", "wilson", "aganyo")





// let myarry = [12,23,45,6,7,["Bruce",0],[12,12,4,4   ]]
// let cars = ["volve","cayene", "suzuki","swift"
// ]
// let newArray = cars.concat(myarry)






// let i = 0;

// for (; i < 3;) {
//   console.log( i++ );
// }











for(let i =2;i<11;i++){
  if(i%2==0){
    console.log(i)
  }  
}