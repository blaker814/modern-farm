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
                seed.icon = "images/asparagus-icon.png";
                addPlant(seed);
            } else if (array[i] === "Corn") {
                const seed = createCorn();
                seed[0].icon = "images/corn-icon.png";
                seed[1].icon = "images/corn-icon.png";
                addPlant(seed[0]);
                addPlant(seed[1]);
            } else if (array[i] === "Potato") {
                const seed = createPotato();
                seed.icon = "images/potato-icon.png";
                addPlant(seed);
            } else if (array[i] === "Soybean") {
                const seed = createSoybean();
                seed.icon = "images/soybean-icon.png";
                addPlant(seed);
            } else if (array[i] === "Sunflower") {
                const seed = createSunflower();
                seed.icon = "images/sunflower-icon.png";
                addPlant(seed);
            } else if (array[i] === "Wheat") {
                const seed = createWheat();
                seed.icon = "images/wheat-icon.png";
                addPlant(seed);
            }
        }
    }
}