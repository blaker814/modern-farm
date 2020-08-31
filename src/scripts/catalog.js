export const Catalog = (foodArray) => {
    let foodHTMLRep = document.querySelector("main")
    foodArray.sort(function(a, b) {
        return a.type.localeCompare(b.type)
     })
     console.log(foodArray)
    const occurrences = {};
    foodArray.map(food => {
        occurrences[food.type] = (occurrences[food.type] || 0) + 1;
    })
    
    Object.entries(occurrences).map(([food,num]) => {
        foodHTMLRep.innerHTML += 
        `<section class="plant">
            <h3>${food}</h3> 
            <p>${num}</p>
        </section>`
    })

    foodArray.map(food => {
        foodHTMLRep.innerHTML += 
        `<section class="plant-icon">
            <img src=${food.icon} alt=${food.type}>
        </section>`
    })
}