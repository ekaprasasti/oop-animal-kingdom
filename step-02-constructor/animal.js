/**
 * File: animal.js
 * 
 * Implementasi Constructor dan Method dengan State
 * 
 * Konsep yang Dipelajari:
 * - Constructor: Method khusus yang dipanggil saat object dibuat
 * - State Management: Properties yang dapat berubah nilai
 * - Method dengan Side Effects: Method yang mengubah state object
 * - Object Independence: Setiap instance memiliki state terpisah
 */

class Animal {
  // Properties - data yang dimiliki setiap hewan
  name;
  type;
  sound;
  hunger = 50;    // Level kelaparan awal (0-100, semakin rendah semakin lapar)
  energy = 100;   // Level energi awal (0-100, semakin tinggi semakin berenergi)
  
  /**
   * Constructor - Method khusus untuk inisialisasi object
   * Dipanggil otomatis saat membuat instance baru dengan 'new Animal()'
   * @param {string} name - Nama hewan
   * @param {string} type - Jenis hewan
   * @param {string} sound - Suara yang dihasilkan hewan
   */
  constructor(name, type, sound) {
    // Mengisi properties dengan parameter yang diberikan
    this.name = name;
    this.type = type;
    this.sound = sound;
    
    // Menampilkan pesan ketika hewan baru dibuat
    console.log(`Hewan baru dibuat: ${this.name} (${this.type})`);
  }
  
  /**
   * Method untuk menampilkan suara hewan
   * Method ini mengubah state (mengurangi energy)
   */
  makeSound() {
    console.log(`${this.name} berbunyi: ${this.sound}`);
    
    // Bersuara mengurangi energi hewan
    this.energy -= 5;
    console.log(`Energi ${this.name} sekarang: ${this.energy}`);
  }
  
  /**
   * Method untuk memberi makan hewan
   * Method ini mengubah state (mengurangi hunger)
   * @param {number} foodAmount - Jumlah makanan yang diberikan
   */
  feed(foodAmount) {
    // Mengurangi level kelaparan
    this.hunger -= foodAmount;
    
    // Memastikan hunger tidak negatif
    if (this.hunger < 0) this.hunger = 0;
    
    console.log(`${this.name} diberi makan. Level kelaparan: ${this.hunger}`);
  }
  
  /**
   * Method untuk bermain dengan hewan
   * Method ini mengubah multiple state (energy dan hunger)
   * @param {number} minutes - Durasi bermain dalam menit
   */
  play(minutes) {
    // Bermain mengurangi energi (2 poin per menit)
    this.energy -= minutes * 2;
    
    // Bermain membuat hewan lebih lapar (1 poin per menit)
    this.hunger += minutes;
    
    console.log(`${this.name} bermain selama ${minutes} menit.`);
    console.log(`Energi: ${this.energy}, Kelaparan: ${this.hunger}`);
  }
  
  /**
   * Method untuk menampilkan status hewan
   * Method ini tidak mengubah state (read-only)
   * @returns {string} Status lengkap hewan
   */
  showStatus() {
    return `${this.name} - Energi: ${this.energy}, Kelaparan: ${this.hunger}`;
  }
}

// === Demonstrasi Constructor dan State Management ===

console.log('=== Membuat Hewan dengan Constructor ===');
// Constructor dipanggil otomatis dan menerima parameter
const kucing = new Animal('Meong', 'Kucing', 'Meow');
const anjing = new Animal('Doggy', 'Anjing', 'Woof');

console.log('\n=== Status Awal Hewan ===');
console.log(kucing.showStatus());
console.log(anjing.showStatus());

console.log('\n=== Menggunakan Method yang Mengubah State ===');

// Test dengan kucing
console.log('\n--- Aktivitas Kucing ---');
kucing.makeSound();      // Mengurangi energy
kucing.feed(20);         // Mengurangi hunger
kucing.play(10);         // Mengurangi energy, menambah hunger
console.log('Status akhir: ' + kucing.showStatus());

// Test dengan anjing
console.log('\n--- Aktivitas Anjing ---');
anjing.makeSound();      // Mengurangi energy
anjing.feed(15);         // Mengurangi hunger
anjing.play(5);          // Mengurangi energy, menambah hunger
console.log('Status akhir: ' + anjing.showStatus());

console.log('\n=== Verifikasi Object Independence ===');
console.log('Kucing:', kucing.showStatus());
console.log('Anjing:', anjing.showStatus());
console.log('=> Setiap object memiliki state yang terpisah dan independen');

// === Demonstrasi State Changes Over Time ===
console.log('\n=== Simulasi Aktivitas Berkelanjutan ===');

const sapi = new Animal('Moo', 'Sapi', 'Moooo');
console.log('Status awal sapi:', sapi.showStatus());

console.log('\nSapi melakukan berbagai aktivitas:');
sapi.makeSound();
sapi.play(3);
sapi.feed(10);
sapi.makeSound();
sapi.play(2);

console.log('\nStatus akhir sapi:', sapi.showStatus());