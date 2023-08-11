// console.log("Hello From JS")
// console.log(document);
// console.log(document.body);



const liCollection = document.getElementsByTagName("li")
for (const li of liCollection) {
    console.log(li.innerText);
}


const allheading = document.getElementsByTagName("h1")
for (const h1 of allheading) {
    console.log(h1.innerText)
}