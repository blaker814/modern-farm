import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

export const plantSeeds = (plantingPlan) => {
    for (const array of plantingPlan) {
        for (let i=0; i<array.length; i++) {
            if (array[i] === "Asparagus") {
                const seed = createAsparagus();
                addPlant(seed);
            } else if (array[i] === "Corn") {
                const seed = createCorn();
                addPlant(seed[0]);
                addPlant(seed[1]);
            } else if (array[i] === "Potato") {
                const seed = createPotato();
                addPlant(seed);
            } else if (array[i] === "Soybean") {
                const seed = createSoybean();
                addPlant(seed);
            } else if (array[i] === "Sunflower") {
                const seed = createSunflower();
                addPlant(seed);
            } else if (array[i] === "Wheat") {
                const seed = createWheat();
                addPlant(seed);
            }
        }
    }
}