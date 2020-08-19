const plantArray = [];

export const addPlant = (seedObj) => {
    plantArray.push(seedObj);
}

export const usePlants = () => {
    return plantArray;
}