const Character = require("./Character");

class Mage extends Character {// Recebe todos as propriedades da classe mãe, mais na classe filha recebe mais uma propriedade, assim tendo que rescrever o construtor com o novo parâmetro , e chmaar as propriedades da classe mãe com o método super().
    constructor(name, lifePts, attackPts, defensePts, magicPts) {
        super(name, lifePts, attackPts, defensePts)
        this.magicPts = magicPts
    }

    attack(targetCharacter) {// Método modificado da classe mãe nos cálculos.
        targetCharacter.lifePts -= (this.attackPts + this.magicPts) - targetCharacter.defensePts
    }

    heal(targetCharacter) {// Método adicionado só na classe filha.
        targetCharacter.lifePts += this.magicPts * 2
    }
}

module.exports = Mage

 