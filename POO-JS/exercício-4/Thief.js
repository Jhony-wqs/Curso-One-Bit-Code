const Character = require("./Character");

class Thief extends Character {// Recebe todas as propriedades da classe mãe.
    attack(targetCharacter) { // Recebe p método da classe mãe, mais e modificado os cálculos.
        targetCharacter.lifePts -= (this.attackPts - targetCharacter.defensePts)
    }
}

module.exports = Thief