export const Catalog = (foodArray) => {
    const foodHTMLRep = document.querySelector("main")
    foodArray.sort(function(a, b) {
        return a.type.localeCompare(b.type)
     })

     const occurrences = {};
     for (let i = 0; i<foodArray.length; i++) {
        occurrences[foodArray[i].type] = (occurrences[foodArray[i].type] || 0) + 1;
     }
     
     console.log(occurrences); 
    for (const [food, num] of Object.entries(occurrences)) {
        foodHTMLRep.innerHTML += `<section class="plant">
        <h3>${food}</h3> 
            <p>${num}</p>
        </section>`
    }
}