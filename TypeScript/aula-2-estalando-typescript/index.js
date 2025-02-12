var setPilot = function (newPilot, spaceship) {
    spaceship.pilot = newPilot;
};
var accelerate = function (targetSpeed, spaceship) {
    spaceship.speed = targetSpeed;
};
var sendToMission = function (spaceship) {
    spaceship.inMission = true;
};
var spaceship = {
    name: '',
    pilot: '',
    speed: 0,
    inMission: false,
};
var pilot = spaceship.pilot = 'Jhont Wuanderson';
spaceship.name = 'Apolo 11';
setPilot(pilot, spaceship);
accelerate(100, spaceship);
sendToMission(spaceship);
console.log(spaceship);
