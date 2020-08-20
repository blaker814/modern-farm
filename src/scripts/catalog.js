export const Catalog = (foodArray) => {
    const foodHTMLRep = document.querySelector("main")
    for (const food of foodArray) {
        foodHTMLRep.innerHTML += `<section class="plant">${food.type}</section>`
    }
}