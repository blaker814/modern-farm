export const Catalog = (foodArray) => {
    const foodHTMLRep = document.querySelector("main")
    foodArray.sort(function(a, b) {
       return a.type.localeCompare(b.type)
    })
    
    for (const food of foodArray) {
        foodHTMLRep.innerHTML += `<section class="plant">${food.type}</section>`
    }
}