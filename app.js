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

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

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

function pow(x,n){
  return (x**n)
}
alert(pow(3,3))
