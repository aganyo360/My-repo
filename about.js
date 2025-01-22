// // let paragraphs = document.querySelectorAll("p")

// let buttons = document.querySelector(".btn")

// function greeting(){
//     alert("Hellow world")
// }

// buttons.addEventListener('click', greeting)
// let first_heading = document.querySelector('#first_heading')

// let content = document.createElement('div');
// content.classList.add("content")
// content.textContent = "WE are the world and we are the children"
// first_heading.appendChild(content)

// let container = document.querySelector('#container')
// let content = document.createElement('div') 
// content.textContent = "Code like a pro"
// content.style.cssText ="color: red; font-size:45px; background-color:yellow"
// container.appendChild(content)

// let second_child = container.classList.add("second_child")
// content2 = document.createElement("p")
// content2.textContent = "This is how we have challenged ourselves and accomplished this"
// content2.style.cssText = ""
// second_child.appendChild(content2)

let container = document.querySelector('.container')
let paragraph = document.createElement('p')
let heading = document.createElement('h3')

let heading1 = document.createElement('h3')



paragraph.textContent = "I am red"
paragraph.style.cssText = "color:red; font-size:20px"
container.appendChild(paragraph)

heading.textContent = "I am a blue h3"
heading.style.cssText = "color:blue"
container.appendChild(heading)

let pdiv = document.createElement('div')
pdiv.style.color = "border: 2px black"
heading1.textContent = "I am a div"

let para = document.createElement('p')
para.textContent = "ME TOO"
pdiv.appendChild(heading1)
pdiv.appendChild(para)

container.appendChild(pdiv)
