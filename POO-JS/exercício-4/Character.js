class Character {// Classe Mãe de onde vai ser estanciada os objetos com suas propriedades e seus métodos.
    constructor(name, lifePts, attackPts, defensePts) {// Métodos padrão para todas as estancias.
        this.name = name
        this.lifePts = lifePts
        this.attackPts = attackPts
        this.defensePts = defensePts
    }
    attack(targetCharacter) {// Método estanciado para toas as classes filhas.
        targetCharacter.lifePts -= this.attackPts - this.defensePts
    }
}


module.exports = Character