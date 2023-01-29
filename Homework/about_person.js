class aboutMe {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    aboutMe() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
    }

}
const person1 = new aboutMe("Asma", "12");
person1.aboutMe();