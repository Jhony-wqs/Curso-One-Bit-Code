function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada  pelo capit\u00E3o ").concat(spaceship.captain));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, " "));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.speed));
    }
}
var spaceshipName = prompt('Insira o nome da nave a ser enviada:');
var spaceshipCaptian = prompt('Insira o nome do capitão da nave:');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptian);
var speed = Number(prompt('Insira a velocidade para a qual deseja acelerar:'));
accelerate(speed, currentShip);
