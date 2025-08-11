/**
 * File: animal.js
 * 
 * Implementasi Encapsulation dalam OOP
 * 
 * Konsep yang Dipelajari:
 * - Private Fields: Properties yang tidak bisa diakses dari luar class
 * - Private Methods: Method internal yang tidak untuk konsumsi publik
 * - Public Interface: Method yang safe untuk digunakan dari luar
 * - Data Protection: Validasi input dan kontrol perubahan state
 * - Getter/Setter: Controlled access ke private properties
 */

class Animal {
  // Private fields (dimulai dengan #)
  #name;
  #type;
  #sound;
  #hunger = 50;    // 0-100, semakin rendah semakin lapar
  #energy = 100;   // 0-100, semakin tinggi semakin berenergi
  #health = 100;   // 0-100, kondisi kesehatan
  #age = 0;        // Umur dalam hari

  /**
   * Constructor dengan validasi input
   * @param {string} name - Nama hewan (minimal 2 karakter)
   * @param {string} type - Jenis hewan (minimal 3 karakter) 
   * @param {string} sound - Suara hewan (minimal 2 karakter)
   */
  constructor(name, type, sound) {
    // Validasi input menggunakan private method
    this.#validateInput(name, type, sound);

    this.#name = name;
    this.#type = type;
    this.#sound = sound;

    console.log(`🐾 Hewan baru dibuat: ${this.#name} (${this.#type})`);
  }

  // === PRIVATE METHODS ===

  /**
   * Private method untuk validasi input constructor
   * @private
   * @param {string} name 
   * @param {string} type 
   * @param {string} sound 
   */
  #validateInput(name, type, sound) {
    if (!name || name.length < 2) {
      throw new Error('Nama hewan harus minimal 2 karakter');
    }
    if (!type || type.length < 3) {
      throw new Error('Jenis hewan harus minimal 3 karakter');
    }
    if (!sound || sound.length < 2) {
      throw new Error('Suara hewan harus minimal 2 karakter');
    }
  }

  /**
   * Private method untuk memastikan nilai dalam range yang valid
   * @private
   * @param {number} value 
   * @param {number} min 
   * @param {number} max 
   * @returns {number}
   */
  #clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  /**
   * Private method untuk update kesehatan berdasarkan kondisi
   * @private
   */
  #updateHealth() {
    // Kesehatan menurun jika kelaparan tinggi atau energi rendah
    if (this.#hunger > 80 || this.#energy < 20) {
      this.#health -= 2;
    }
    // Kesehatan membaik jika kondisi ideal
    else if (this.#hunger < 30 && this.#energy > 70) {
      this.#health += 1;
    }

    // Pastikan health dalam range 0-100
    this.#health = this.#clamp(this.#health, 0, 100);
  }

  /**
   * Private method untuk aging process
   * @private
   */
  #ageUp() {
    this.#age++;
    // Semakin tua, energi maksimal berkurang sedikit
    if (this.#age % 30 === 0) { // Setiap 30 hari
      this.#energy = Math.max(this.#energy - 1, 0);
    }
  }

  // === GETTERS (Read-only access) ===

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get sound() {
    return this.#sound;
  }

  get hunger() {
    return this.#hunger;
  }

  get energy() {
    return this.#energy;
  }

  get health() {
    return this.#health;
  }

  get age() {
    return this.#age;
  }

  // === SETTERS (Controlled write access) ===

  /**
   * Setter untuk mengubah nama hewan (dengan validasi)
   */
  set name(newName) {
    if (!newName || newName.length < 2) {
      throw new Error('Nama harus minimal 2 karakter');
    }
    console.log(`📝 ${this.#name} berganti nama menjadi ${newName}`);
    this.#name = newName;
  }

  // === PUBLIC METHODS ===

  /**
   * Method untuk bersuara
   */
  makeSound() {
    if (this.#energy < 10) {
      console.log(`😴 ${this.#name} terlalu lelah untuk bersuara`);
      return;
    }

    console.log(`🔊 ${this.#name} berbunyi: ${this.#sound}`);

    // Bersuara mengurangi energi
    this.#energy = this.#clamp(this.#energy - 5, 0, 100);
    this.#ageUp();
    this.#updateHealth();

    console.log(`⚡ Energi ${this.#name}: ${this.#energy}`);
  }

  /**
   * Method untuk memberi makan dengan validasi
   * @param {number} foodAmount - Jumlah makanan (1-50)
   */
  feed(foodAmount) {
    // Validasi input
    if (typeof foodAmount !== 'number' || foodAmount <= 0) {
      throw new Error('Jumlah makanan harus berupa angka positif');
    }

    if (foodAmount > 50) {
      console.log(`⚠️  Terlalu banyak! ${this.#name} hanya bisa makan maksimal 50 unit`);
      foodAmount = 50;
    }

    if (this.#hunger === 0) {
      console.log(`😋 ${this.#name} sudah kenyang, tidak bisa makan lagi`);
      return;
    }

    // Update hunger dengan clamp
    this.#hunger = this.#clamp(this.#hunger - foodAmount, 0, 100);

    // Makan menambah sedikit energi
    this.#energy = this.#clamp(this.#energy + Math.floor(foodAmount * 0.5), 0, 100);

    this.#ageUp();
    this.#updateHealth();

    console.log(`🍽️  ${this.#name} diberi makan. Kelaparan: ${this.#hunger}, Energi: ${this.#energy}`);
  }

  /**
   * Method untuk bermain dengan validasi durasi
   * @param {number} minutes - Durasi bermain (1-60 menit)
   */
  play(minutes) {
    // Validasi input
    if (typeof minutes !== 'number' || minutes <= 0) {
      throw new Error('Durasi bermain harus berupa angka positif');
    }

    if (minutes > 60) {
      console.log(`⏰ Maksimal bermain 60 menit! ${this.#name} akan bermain selama 60 menit`);
      minutes = 60;
    }

    if (this.#energy < minutes * 2) {
      console.log(`😴 ${this.#name} tidak punya cukup energi untuk bermain ${minutes} menit`);
      return;
    }

    // Update state
    this.#energy = this.#clamp(this.#energy - minutes * 2, 0, 100);
    this.#hunger = this.#clamp(this.#hunger + minutes, 0, 100);

    this.#ageUp();
    this.#updateHealth();

    console.log(`🎮 ${this.#name} bermain selama ${minutes} menit`);
    console.log(`📊 Energi: ${this.#energy}, Kelaparan: ${this.#hunger}`);
  }

  /**
   * Method untuk istirahat (mengembalikan energi)
   * @param {number} hours - Jam istirahat (1-24)
   */
  sleep(hours = 8) {
    if (typeof hours !== 'number' || hours <= 0) {
      throw new Error('Durasi tidur harus berupa angka positif');
    }

    if (hours > 24) {
      console.log(`😴 Maksimal tidur 24 jam! ${this.#name} akan tidur selama 24 jam`);
      hours = 24;
    }

    // Tidur mengembalikan energi tapi menambah sedikit kelaparan
    this.#energy = this.#clamp(this.#energy + hours * 8, 0, 100);
    this.#hunger = this.#clamp(this.#hunger + Math.floor(hours * 2), 0, 100);

    // Aging berdasarkan jam tidur
    for (let i = 0; i < hours; i += 8) {
      this.#ageUp();
    }

    this.#updateHealth();

    console.log(`😴 ${this.#name} tidur selama ${hours} jam`);
    console.log(`✨ Energi pulih: ${this.#energy}, Kelaparan: ${this.#hunger}`);
  }

  /**
   * Method untuk mendapatkan status lengkap hewan
   * @returns {Object} Status object
   */
  getStatus() {
    return {
      name: this.#name,
      type: this.#type,
      age: this.#age + ' hari',
      energy: this.#energy,
      hunger: this.#hunger,
      health: this.#health,
      condition: this.#getConditionStatus()
    };
  }

  /**
   * Private method untuk menentukan kondisi hewan
   * @private
   * @returns {string}
   */
  #getConditionStatus() {
    if (this.#health >= 80) return 'Sangat Sehat 💚';
    if (this.#health >= 60) return 'Sehat 💛';
    if (this.#health >= 40) return 'Cukup Sehat 🧡';
    if (this.#health >= 20) return 'Kurang Sehat ❤️';
    return 'Sakit 💔';
  }

  /**
   * Method untuk menampilkan status dalam format string
   * @returns {string}
   */
  showStatus() {
    const status = this.getStatus();
    return `🐾 ${status.name} (${status.type}) - Umur: ${status.age}
    ⚡ Energi: ${status.energy}/100
    🍽️  Kelaparan: ${status.hunger}/100  
    ❤️  Kesehatan: ${status.health}/100 (${status.condition})`;
  }
}

// === DEMONSTRASI ENCAPSULATION ===

console.log('=== 🔒 Demonstrasi Encapsulation ===\n');

try {
  // Membuat hewan dengan data valid
  console.log('1️⃣ Membuat hewan dengan constructor validation:');
  const kucing = new Animal('Meong', 'Kucing', 'Meow');
  const anjing = new Animal('Buddy', 'Anjing', 'Woof');

  console.log('\n2️⃣ Mengakses data melalui getters (read-only):');
  console.log(`Nama kucing: ${kucing.name}`);
  console.log(`Jenis anjing: ${anjing.type}`);
  console.log(`Suara kucing: ${kucing.sound}`);

  console.log('\n3️⃣ Mencoba mengakses private fields (akan error):');
  console.log('kucing.#name =', 'undefined (private field tidak bisa diakses)');
  console.log('kucing.#energy =', 'undefined (private field tidak bisa diakses)');

  console.log('\n4️⃣ Mengubah nama melalui setter dengan validation:');
  kucing.name = 'Kitty'; // Valid
  console.log(`Nama baru: ${kucing.name}`);

  console.log('\n5️⃣ Method dengan built-in validation dan protection:');
  kucing.feed(30);
  kucing.play(15);
  kucing.sleep(8);

  console.log('\n6️⃣ Status lengkap dengan data protected:');
  console.log(kucing.showStatus());

  console.log('\n7️⃣ Testing validation errors:');

  // Test input validation
  try {
    kucing.feed(-5); // Error: invalid input
  } catch (error) {
    console.log('❌ Feed validation:', error.message);
  }

  try {
    kucing.play('invalid'); // Error: invalid type
  } catch (error) {
    console.log('❌ Play validation:', error.message);
  }

  try {
    kucing.name = 'x'; // Error: too short
  } catch (error) {
    console.log('❌ Name validation:', error.message);
  }

  console.log('\n8️⃣ Constructor validation:');

} catch (error) {
  console.log('❌ Constructor error:', error.message);
}

try {
  // Test invalid constructor inputs
  new Animal('', 'Cat', 'Meow'); // Error: empty name
} catch (error) {
  console.log('❌ Empty name error:', error.message);
}

try {
  new Animal('Valid', 'ab', 'Meow'); // Error: type too short
} catch (error) {
  console.log('❌ Short type error:', error.message);
}

console.log('\n=== 📊 Simulasi Siklus Hidup dengan Encapsulation ===');

const singa = new Animal('Simba', 'Singa', 'Roar');
console.log('\n🦁 Status awal Simba:');
console.log(singa.showStatus());

console.log('\n🎯 Simulasi aktivitas harian:');
singa.makeSound();
singa.play(20);
singa.feed(25);
singa.sleep(10);
singa.makeSound();

console.log('\n📈 Status akhir setelah aktivitas:');
console.log(singa.showStatus());

console.log('\n✅ Semua data internal tetap protected dan valid!');
console.log('🔒 Private fields tidak bisa diakses langsung dari luar class');
console.log('🛡️  Validation mencegah invalid state');
console.log('🎛️  Controlled access melalui getters/setters');
