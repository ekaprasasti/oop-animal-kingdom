const Animal = require('./animal');

class Bird extends Animal {
  constructor(name, species = 'Sparrow') {
    super(name, 'Burung', 'Tweet');
    this.species = species;
    this.canFly = true;
    console.log(`${name} adalah burung ${species}!`);
  }

  makeSound() {
    const timeOfDay = new Date().getHours();
    
    if (timeOfDay >= 5 && timeOfDay <= 8) {
      console.log(`${this.getName()} berkicau merdu di pagi hari: Tweet tweet tweet!`);
    } else if (timeOfDay >= 17 && timeOfDay <= 19) {
      console.log(`${this.getName()} berkicau lembut di sore hari: chirp chirp~`);
    } else {
      console.log(`${this.getName()} berkicau: Tweet tweet!`);
    }
  }

  move() {
    if (this.canFly && this.getEnergy() > 20) {
      console.log(`${this.getName()} terbang tinggi melintasi langit.`);
    } else if (this.canFly) {
      console.log(`${this.getName()} terlalu lelah untuk terbang, berjalan di tanah.`);
    } else {
      console.log(`${this.getName()} berjalan atau berlari di tanah.`);
    }
  }

  sleep() {
    console.log(`${this.getName()} bertengger di dahan dan tidur sambil berdiri.`);
  }

  play() {
    console.log(`${this.getName()} bermain dengan terbang berkeliling dan mengejar serangga.`);
  }

  getInfo() {
    const flyStatus = this.canFly ? 'bisa terbang' : 'tidak bisa terbang';
    return `Ini adalah ${this.getName()}, burung ${this.species} yang ${flyStatus}`;
  }

  buildNest() {
    console.log(`${this.getName()} membangun sarang dengan ranting dan daun.`);
  }

  migrate() {
    if (this.canFly) {
      console.log(`${this.getName()} bermigrasi ke tempat yang lebih hangat.`);
    } else {
      console.log(`${this.getName()} tidak bisa bermigrasi karena tidak bisa terbang.`);
    }
  }

  preen() {
    console.log(`${this.getName()} membersihkan dan merapikan bulunya.`);
  }
}

module.exports = Bird;