export const harvestPlants = (plantArray) => {
    const seedObjects = [];
    for (const plant of plantArray) {
        if (plant.type !== "Corn") {
            const num = plant.output;
            for (let i=1; i<=num; i++) {
                seedObjects.push(plant);
            }
        } else {
            const num = plant.output/2;
            for (let i=1; i<=num; i++) {
                seedObjects.push(plant);
            }
        }
    }
    return seedObjects;
}