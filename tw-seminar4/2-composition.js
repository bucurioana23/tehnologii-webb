class Robot {
    constructor(name) { 
        this.name = name;
    }

    move() {
        console.log(`Robot ${this.name} is moving forward.`);
    }
}

class Weapon {
    constructor(description) {
        this.description = description;

    }

    fire() {
        console.log(`Firing weapon: ${this.description}`);
    }
}

class CombatRobot extends Robot {
    constructor(name) {
        super(name);
        this.weapon = [];
    }

    addWeapon(weapon) {
        this.weapon.push(weapon);
    }

    fireAll(){
        console.log(`Combat Robot ${this.name} is firing all weapons:`);
        this.weapon.forEach(weapon => weapon.fire());
    }
}

const robot1 = new CombatRobot("Combat Robot ABC");
const robot2 = new Robot("Combat Robot");

const weapon1 = new Weapon("Laser Blaster");
const weapon2 = new Weapon("Rocket Launcher");

robot1.addWeapon(weapon1);
robot1.addWeapon(weapon2);
robot1.move();
robot1.fireAll();

Robot.prototype.fly = function() {
    console.log(`Robot ${this.name} is flying!`);
}

robot1.fly();
