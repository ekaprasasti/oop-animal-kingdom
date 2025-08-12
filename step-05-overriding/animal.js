class Animal {
  #name;
  #type;
  #sound;
  #energy = 100;
  #hunger = 50;

  constructor(name, type, sound) {
    this.#name = name;
    this.#type = type;
    this.#sound = sound;
    console.log(`Hewan baru dibuat: ${this.#name} (${this.#type})`);
  }

  getName() { return this.#name; }
  getType() { return this.#type; }
  getSound() { return this.#sound; }
  getEnergy() { return this.#energy; }
  getHunger() { return this.#hunger; }

  makeSound() {
    console.log(`${this.#name} berbunyi: ${this.#sound}`);
    this.#energy -= 5;
  }

  feed(amount = 20) {
    this.#hunger = Math.max(0, this.#hunger - amount);
    console.log(`${this.#name} diberi makan. Kelaparan: ${this.#hunger}`);
  }

  move() {
    console.log(`${this.#name} bergerak.`);
    this.#energy -= 10;
    this.#hunger += 5;
  }

  sleep() {
    console.log(`${this.#name} tidur untuk memulihkan energi.`);
    this.#energy = Math.min(100, this.#energy + 30);
  }

  play() {
    console.log(`${this.#name} bermain.`);
    this.#energy -= 15;
    this.#hunger += 10;
  }

  showStatus() {
    return `${this.#name} - Energy: ${this.#energy}, Hunger: ${this.#hunger}`;
  }

  getInfo() {
    return `Ini adalah ${this.#name}, seekor ${this.#type}`;
  }
}

module.exports = Animal;