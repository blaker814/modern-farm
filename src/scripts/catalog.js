export const Catalog = (foodArray) => {
    let foodHTMLRep = document.querySelector("main")
    foodArray.sort(function(a, b) {
        return a.type.localeCompare(b.type)
     })
     console.log(foodArray)
    const occurrences = {};
    for (let i = 0; i<foodArray.length; i++) {
        occurrences[foodArray[i].type] = (occurrences[foodArray[i].type] || 0) + 1;
    }
    
    for (const [food, num] of Object.entries(occurrences)) {
        foodHTMLRep.innerHTML += `<section class="plant">
        <h3>${food}</h3> 
            <p>${num}</p>
        </section>`
    }

    for (const food of foodArray) {
        foodHTMLRep.innerHTML += `<section class="plant-icon">
        <img src=${food.icon} alt=${food.type}>
        </section>
        `
    }
}