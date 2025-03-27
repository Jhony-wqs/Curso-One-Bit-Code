var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log('----------------------------');
            console.log(`Chamando o método ${key} com os parâmetros ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`O método ${key} retornou o valor ${JSON.stringify(result)}`);
            return result;
        };
    };
}
class Planets {
    name;
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        return value * 2;
    }
    invertName() {
        return this.name.split('').reverse().join('');
    }
}
__decorate([
    Log()
], Planets.prototype, "calculate", null);
__decorate([
    Log()
], Planets.prototype, "invertName", null);
const planets = new Planets('Terra');
const results = planets.calculate(5);
console.log(`Resultado: ${results}`);
planets.invertName();
