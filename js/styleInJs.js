

// const sections = document.querySelectorAll("section")
const sections = document.getElementsByTagName("section")

for(const section of sections){
    section.style.border = "2px solid blue"
    section.style.marginBottom = "10px"
    section.style.paddingLeft = "15px"
    section.style.borderRadius = "10px"
    section.style.backgroundColor = "lightgray"
}


const placeContainer = document.getElementById("place-container")
// placeContainer.style.backgroundColor = "aquamarine"


placeContainer.classList.add("yellow-bg")   //yellow-bg is a css Class (Override)
placeContainer.classList.add("text-center")   //text-center is a css Class

placeContainer.classList.remove("large-text")  //.large-text is also a css Class



//Dynamic LI added

// const placeUL = document.querySelector('#place-container ul')
// console.log(placeUL)

// const newLi = document.createElement('li') 
// newLi.innerText = "Hey Rezwan"

// placeUL.appendChild(newLi)


// const newLi2 = document.createElement('li')
// newLi2.innerText = "New dynamic li added"
// placeUL.appendChild(newLi2)