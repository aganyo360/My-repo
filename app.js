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



function textMessage(from, message){
   let scriptureReading = `This is the message from ${from},it says ${message}`
   alert(scriptureReading)
}

textMessage("Jesus", "Love your neighbour as you love yourself")
