import { Spaceship } from "./index"
import * as lodash from "lodash"

interface AttackSpaceship extends Spaceship  {
    weapons: number
}


let Xpace : AttackSpaceship = {
    name : 'Xpace',
    pilot: 'jhony',
    speed: 200,
    weapons: 100
}

console.log(Xpace)

console.log(lodash.camelCase("jhony wuanderson"))
console.log(lodash.kebabCase("jhony wuanderson"))