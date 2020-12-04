// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// const { default: Axios } = require("axios");
import axios from 'axios'



const entryPoint = document.querySelector('.topics')

function TabMaker(str){

    // create div
    const tab = document.createElement('div')

    //add class 
    tab.classList.add('tab')

    //create text content
    tab.textContent = str

    //create structure
    entryPoint.appendChild(tab)

    //return tab
    return tab
}



axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(res=> {
    res.data.topics.forEach(i => {
        entryPoint.appendChild(TabMaker(i))
    })
})
.catch(err => {
console.log('This is the error thrown:', err)
})