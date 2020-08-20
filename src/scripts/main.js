import { createPlan } from './plan.js'
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from './harvester.js'

const yearlyPlan = createPlan();

const seedObj = plantSeeds(yearlyPlan);

const field = usePlants(seedObj);

const harvest = harvestPlants(field);

console.log(harvest);