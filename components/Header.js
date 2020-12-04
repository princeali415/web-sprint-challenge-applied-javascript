// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

// Add elemeents using createElement

const div = document.createElement('div')
const date = document.createElement('span')
const h1 = document.createElement('h1')
const temp = document.createElement('span')

//add class to elements

div.classList.add('header')
date.classList.add('date')
temp.classList.add('temp')

// add text

date.textContent = 'MARCH 28, 2020'
h1.textContent = 'Lamda Times'
temp.textContent = '98°'

//create structure 

const entryPoint = document.querySelector('.header-container')
entryPoint.appendChild(div)
div.appendChild(date)
div.appendChild(h1)
div.appendChild(temp)

//return div

return div
}

Header()