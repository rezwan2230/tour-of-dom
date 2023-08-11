
//Added a Li dynamically
const placesList = document.getElementById("places-list")
const newLi = document.createElement("li")
newLi.innerText = "Hunululu"
placesList.appendChild(newLi)





//Added a section dynamicall. Here we can use 2 Way..
// ********[1st Way]*********

//1. where to be added
const mainContainer = document.getElementById('main-container')

//2. What to be added
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = "My Food List"
section.appendChild(h1)

//Create a UL
const ul = document.createElement('ul')

//Create 3 li
const li1 = document.createElement('li')
li1.innerText = "Briyani"
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = "Kacchi"
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = "Teheri"
ul.appendChild(li3)

//added Ul to Section..
section.appendChild(ul)

mainContainer.appendChild(section)



// ********[2st Way]*********
const dressSection = document.createElement('section')
dressSection.innerHTML = `
        <h1>My Outfit Collections</h1>
            <ul>
                <li>Shirt</li>
                <li>Pant</li>
                <li>Jacket</li>
                <li>Formal Dress</li>
            </ul>
`
mainContainer.appendChild(dressSection)
