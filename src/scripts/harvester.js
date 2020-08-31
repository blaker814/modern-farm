export const harvestPlants = (plantArray) => {
    const seedObjects = [];
    let num = 0;
    let count = 0;
    plantArray.map(plant => {
        count = count+num;
        if (plant.type !== "Corn") {
            num = plant.output;
            for (let j=1; j<=num; j++) {
                let obj = {};
                obj = {
                    type: plant.type,
                    height: plant.height,
                    output: plant.output,
                    icon: plant.icon,
                    id: count + j
                }
                seedObjects.push(obj);
                
            }
        } else {
            num = plant.output/2;
            for (let j=1; j<=num; j++) {
                let obj = {};
                obj = {
                    type: plant.type,
                    height: plant.height,
                    output: plant.output,
                    icon: plant.icon,
                    id: count + j
                }
                seedObjects.push(obj);
            }
        }
    })
    return seedObjects;
}