class aboutMe {
    constructor(name, game) {
        this.name = name;
        this.game = game;
    }

    aboutMe() {
        console.log(`Hello, my name is ${this.name} and I am the STRONGEST(and newest) game character this game called ${this.game}!`);
    }

}
const person1 = new aboutMe("Xoney", "MarioCarts");
person1.aboutMe();

class Speed {
    constructor(speed) {
        this.speed = speed;
    }
}

let myCar = new Speed("80-100mph");
console.log(myCar)

class Health {
    constructor(Health, Heal) {
        this.Health = Health;
        this.Heal = Heal;
    }
}

let myHealth = new Health("200HP");
console.log(myHealth)
let myHeal = new Heal("Quickly");
console.log(myHeal)



class Power {
    constructor(defeat) {
        this.defeat = defeat;
    }
}

let myDefeat = new Power("150HP");
console.log(myDefeat)