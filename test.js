class Car {
    constructor(name, year, price) {
        this.name = name;
        this.year = year;
        this.price = price;
    }
    run() {
        console.log(this.name + " is running!!")
    }
    showPrice() {
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

class Pen {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }

    showPrice() {
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

const pen1 = new Pen("Marker", "Blue", "$3");
pen1.showPrice();

let myCarAudi = new Car("Audi", 2023, "$100,250");
myCarAudi.run();
console.log(myCarAudi);
let myCarRam = new Ca("Ram", 2021);
console.log(myCarRam);