const Animal = require('./animal');
const Cat = require('./cat');
const Dog = require('./dog');
const Bird = require('./bird');

console.log('=== DEMONSTRASI METHOD OVERRIDING ===\n');

console.log('1. Membuat Animal dasar (tanpa override):');
const genericAnimal = new Animal('Generic', 'Unknown', 'Sound');
genericAnimal.makeSound();
genericAnimal.move();
genericAnimal.play();
console.log(genericAnimal.getInfo());
console.log(genericAnimal.showStatus());

console.log('\n2. Cat dengan method yang di-override:');
const persian = new Cat('Fluffy', 'Persian');

console.log('\n--- Testing makeSound() override ---');
persian.makeSound(); // Normal state
persian.feed(-50); // Make hungry
persian.makeSound(); // Hungry state
persian.feed(60); // Feed well
persian.play(); persian.play(); persian.play(); // Make tired
persian.makeSound(); // Tired state

console.log('\n--- Testing other overridden methods ---');
persian.move();
persian.sleep();
persian.play();
console.log(persian.getInfo());
persian.scratch(); // Cat-specific method
console.log(persian.showStatus());

console.log('\n3. Dog dengan method yang di-override:');
const goldenRetriever = new Dog('Buddy', 'Golden Retriever');

console.log('\n--- Testing makeSound() override ---');
goldenRetriever.makeSound(); // Normal state
goldenRetriever.feed(-50); // Make hungry
goldenRetriever.makeSound(); // Hungry state
goldenRetriever.feed(40); // Feed
goldenRetriever.makeSound(); // High energy state

console.log('\n--- Testing other overridden methods ---');
goldenRetriever.move();
goldenRetriever.sleep();
goldenRetriever.play();
console.log(goldenRetriever.getInfo());
goldenRetriever.fetch(); // Dog-specific method
goldenRetriever.wagTail(); // Dog-specific method
console.log(goldenRetriever.showStatus());

console.log('\n4. Bird dengan method yang di-override:');
const eagle = new Bird('Aquila', 'Eagle');

console.log('\n--- Testing makeSound() override (time-based) ---');
eagle.makeSound(); // Current time-based sound

console.log('\n--- Testing other overridden methods ---');
eagle.move(); // Can fly
eagle.sleep();
eagle.play();
console.log(eagle.getInfo());
eagle.buildNest(); // Bird-specific method
eagle.migrate(); // Bird-specific method
eagle.preen(); // Bird-specific method

// Make bird tired to test flight limitation
eagle.play(); eagle.play(); eagle.play(); eagle.play();
console.log('\n--- Testing tired bird movement ---');
eagle.move(); // Too tired to fly
console.log(eagle.showStatus());

console.log('\n5. Demonstrasi Flightless Bird:');
class Penguin extends Bird {
  constructor(name) {
    super(name, 'Penguin');
    this.canFly = false; // Override flight ability
    console.log(`${name} adalah penguin yang tidak bisa terbang!`);
  }

  move() {
    console.log(`${this.getName()} berjalan dengan goyangan lucu atau berenang.`);
  }

  swim() {
    console.log(`${this.getName()} berenang dengan anggun di air.`);
  }
}

const pingu = new Penguin('Pingu');
pingu.move(); // Overridden again in Penguin class
pingu.migrate(); // Can't migrate because can't fly
pingu.swim(); // Penguin-specific method
console.log(pingu.getInfo());

console.log('\n=== KONSEP METHOD OVERRIDING ===');
console.log('1. Child class dapat mengubah implementasi method parent class');
console.log('2. Method signature harus sama (nama dan parameter)');
console.log('3. Runtime menentukan method mana yang dipanggil berdasarkan object type');
console.log('4. Override memungkinkan behavior yang berbeda untuk setiap subclass');
console.log('5. Dapat menggunakan kondisi untuk variasi behavior dalam override');

console.log('\n=== PERBANDINGAN METHOD CALLS ===');
console.log('Memanggil method yang sama pada object berbeda:');

const animals = [genericAnimal, persian, goldenRetriever, eagle, pingu];

console.log('\n--- makeSound() dari semua animals ---');
animals.forEach(animal => {
  console.log(`${animal.getName()}: `, end='');
  animal.makeSound();
});

console.log('\n--- move() dari semua animals ---');
animals.forEach(animal => {
  console.log(`${animal.getName()}: `, end='');
  animal.move();
});

console.log('\n--- getInfo() dari semua animals ---');
animals.forEach(animal => {
  console.log(animal.getInfo());
});