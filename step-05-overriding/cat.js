const Animal = require('./animal');

class Cat extends Animal {
  constructor(name, breed = 'Domestik') {
    super(name, 'Kucing', 'Meow');
    this.breed = breed;
    console.log(`${name} adalah kucing ras ${breed}!`);
  }

  makeSound() {
    if (this.getHunger() > 70) {
      console.log(`${this.getName()} mengeong keras karena lapar: MEOWWWW!`);
    } else if (this.getEnergy() < 30) {
      console.log(`${this.getName()} mengeong pelan karena lelah: meow...`);
    } else {
      console.log(`${this.getName()} mengeong dengan riang: Meow meow!`);
    }
  }

  move() {
    console.log(`${this.getName()} bergerak dengan anggun dan senyap.`);
  }

  sleep() {
    console.log(`${this.getName()} meringkuk dan tidur nyenyak selama berjam-jam.`);
  }

  play() {
    console.log(`${this.getName()} bermain dengan bola benang dan berlari-lari.`);
  }

  getInfo() {
    return `Ini adalah ${this.getName()}, kucing ras ${this.breed} yang mandiri dan elegan`;
  }

  scratch() {
    console.log(`${this.getName()} mengasah cakar di tiang garukan.`);
  }

  hunt() {
    console.log(`${this.getName()} berburu tikus dengan gerakan stealth.`);
  }
}

module.exports = Cat;