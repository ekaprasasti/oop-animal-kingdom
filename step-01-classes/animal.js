/**
 * File: animal.js
 * 
 * Implementasi Class dan Object Dasar
 * 
 * Konsep yang Dipelajari:
 * - Class: Template atau blueprint untuk membuat object
 * - Object: Instance dari class yang memiliki properties dan methods
 * - Properties: Data yang dimiliki oleh object
 * - Methods: Fungsi yang dapat dilakukan oleh object
 */

class Animal {
  // Properties - data yang dimiliki setiap hewan
  name;
  type;
  sound;

  // Method untuk menampilkan suara hewan
  makeSound() {
    console.log(`${this.name} (${this.type}) berbunyi: ${this.sound}`);
  }
}

// Membuat beberapa instance dari class Animal
// Setiap instance adalah object yang terpisah dengan data sendiri

const kucing = new Animal();
kucing.name = 'Meong';
kucing.type = 'Kucing';
kucing.sound = 'Meow';

const anjing = new Animal();
anjing.name = 'Doggy';
anjing.type = 'Anjing';
anjing.sound = 'Woof';

const sapi = new Animal();
sapi.name = 'Moo';
sapi.type = 'Sapi';
sapi.sound = 'Moooo';

// Memanggil method untuk setiap hewan
console.log('=== Demonstrasi Class dan Object Dasar ===');
kucing.makeSound();
anjing.makeSound();
sapi.makeSound();

// Contoh eksplorasi mandiri
console.log('\nContoh eksplorasi mandiri:');
const kambing = new Animal();
kambing.name = 'Billy';
kambing.type = 'Kambing';
kambing.sound = 'Mbeeek';
kambing.makeSound();

// Menunjukkan bahwa setiap object memiliki properties yang independen
console.log('\n=== Verifikasi Independensi Object ===');
console.log(`Kucing: ${kucing.name} - ${kucing.type}`);
console.log(`Anjing: ${anjing.name} - ${anjing.type}`);
console.log(`Sapi: ${sapi.name} - ${sapi.type}`);
console.log(`Kambing: ${kambing.name} - ${kambing.type}`);