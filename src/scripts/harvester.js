export const harvestPlants = (plantArray) => {
    const seedObjects = [];
    let num = 0;
    let count = 0;
    for (let i=0; i<plantArray.length; i++) {
        count = count+num;
        if (plantArray[i].type !== "Corn") {
            num = plantArray[i].output;
            for (let j=1; j<=num; j++) {
                const obj = {};
                obj.type = plantArray[i].type;
                obj.height = plantArray[i].height;
                obj.output = plantArray[i].output
                obj.id = count + j;
                seedObjects.push(obj);
                
            }
        } else {
            num = plantArray[i].output/2;
            for (let j=1; j<=num; j++) {
                const obj = {};
                obj.type = plantArray[i].type;
                obj.height = plantArray[i].height;
                obj.output = plantArray[i].output
                obj.id = count + j;
                seedObjects.push(obj);
            }
        }
    }
    return seedObjects;
}