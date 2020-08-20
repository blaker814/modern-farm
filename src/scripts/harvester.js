export const harvestPlants = (plantArray) => {
    const seedObjects = [];
    for (const plant of plantArray) {
        if (plant.type === "Asparagus" || plant.type === "Potato" || plant.type === "Soybean" || plant.type === "Sunflower" || plant.type === "Wheat") {
            const num = plant.output;
            for (let i=1; i<=num; i++) {
                seedObjects.push(plant);
            }
        } else {
            const num = 6;
            for (let i=1; i<=num; i++) {
                seedObjects.push(plant[0]);
            }
        }
    }
    return seedObjects;
}