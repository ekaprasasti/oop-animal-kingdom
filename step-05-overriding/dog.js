const Animal = require('./animal');

class Dog extends Animal {
  constructor(name, breed = 'Mixed') {
    super(name, 'Anjing', 'Woof');
    this.breed = breed;
    this.loyalty = 100;
    console.log(`${name} adalah anjing ras ${breed}!`);
  }

  makeSound() {
    if (this.getHunger() > 70) {
      console.log(`${this.getName()} menggonggong meminta makanan: WOOF WOOF WOOF!`);
    } else if (this.getEnergy() > 80) {
      console.log(`${this.getName()} menggonggong dengan semangat: Woof woof!`);
    } else {
      console.log(`${this.getName()} menggonggong pelan: woof...`);
    }
  }

  move() {
    console.log(`${this.getName()} berlari dengan ceria sambil mengibaskan ekor.`);
  }

  sleep() {
    console.log(`${this.getName()} tidur sambil menjaga rumah dengan satu mata terbuka.`);
  }

  play() {
    console.log(`${this.getName()} bermain lempar tangkap bola dengan antusias.`);
    this.loyalty = Math.min(100, this.loyalty + 5);
  }

  getInfo() {
    return `Ini adalah ${this.getName()}, anjing ras ${this.breed} yang setia dengan tingkat kesetiaan ${this.loyalty}%`;
  }

  fetch() {
    console.log(`${this.getName()} mengambil bola dan membawanya kembali.`);
    this.loyalty = Math.min(100, this.loyalty + 3);
  }

  guard() {
    console.log(`${this.getName()} menjaga rumah dengan waspada.`);
  }

  wagTail() {
    console.log(`${this.getName()} mengibaskan ekor dengan gembira.`);
  }
}

module.exports = Dog;