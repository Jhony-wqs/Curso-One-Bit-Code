const Character = require("./Character");

class Warrior extends Character {
    constructor(name, lifePts, attackPts, defensePts, shieldPts) {// Recebe todos as propriedades da classe mãe, mais na classe filha recebe mais uma propriedade, assim tendo que rescrever o construtor com o novo parâmetro , e chmaar as propriedades da classe mãe com o método super().
        super(name, lifePts, attackPts, defensePts )
        this.shieldPts = shieldPts
        this.stance = 'attacking'
    }
    attack(targetCharacter) {
        if (this.stance === 'attacking') {// Método modificado da classe mãe nos cálculos.
            super.attack(targetCharacter)
        }
    }

    switchStance() {
        if (this.stance === 'attacking') {// Método adicionado só na classe filha.
            this.stance = 'defending'
            this.defensePts += this.shieldPts
        }else {
            this.stance === 'attacking'
            this.defensePts -= this.shieldPts
        }
    }
}

module.exports = Warrior