# Encapsulation Insights - Konsep Private vs Public Access

## Pertanyaan Kunci yang Muncul

### 1. "Mengapa `#name` menghasilkan `undefined` saat diakses dari luar?"
**Answer**: Private field (`#name`) tidak bisa diakses langsung dari luar class. Hanya bisa diakses dari dalam class itu sendiri.

```javascript
class Human {
  #name // Private field

  constructor(name) {
    this.#name = name;
  }
}

let messi = new Human('messi')
console.log(messi.name) // undefined - karena #name adalah private
```

### 2. "Apa perbedaan `get name()` dan `getName()`?"

| Aspek | `get name()` | `getName()` |
|-------|-------------|------------|
| **Pemanggilan** | `obj.name` (seperti property) | `obj.getName()` (seperti method) |
| **Sintaks** | Getter property | Method biasa |
| **Tujuan** | Akses data sederhana | Logic yang lebih kompleks |
| **Setter** | Bisa dipasangkan dengan `set name(value)` | Perlu method terpisah |

### 3. "Jika `#name` dimaksudkan private, mengapa perlu getter/setter untuk diakses dari luar?"

**Jawaban Filosofis**: Ini bukan tentang teknis, tapi tentang **controlled access**.

## Konsep Utama: "Private by Default, Public by Necessity"

### Mindset yang Salah
```javascript
// ❌ Everything is public - berbahaya!
class BankAccount {
  balance = 1000        // Bisa dihack langsung
  accountNumber = "123" // Bisa diubah sembarangan
}

let account = new BankAccount()
account.balance = -999999 // 💀 HACK!
```

### Mindset yang Benar
```javascript
// ✅ Secure by default
class BankAccount {
  #balance = 1000      // Private - aman
  #accountNumber       // Private - aman
  #transactionHistory = []

  // Controlled access only
  get balance() { return this.#balance }
  
  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid amount")
    this.#balance += amount
    this.#logTransaction(`Deposit: ${amount}`)
  }
  
  #logTransaction(detail) {
    this.#transactionHistory.push({ date: new Date(), detail })
  }
}
```

## Use Cases untuk Controlled Access

### 1. **Validation**
```javascript
class User {
  #email

  set email(value) {
    if (!value.includes('@')) {
      throw new Error('Email tidak valid')
    }
    this.#email = value.toLowerCase().trim()
  }
}
```

### 2. **Read-Only Properties**
```javascript
class Product {
  #id
  #createdAt

  constructor(id) {
    this.#id = id
    this.#createdAt = new Date()
  }

  get id() { return this.#id }        // Read-only
  get createdAt() { return this.#createdAt }  // Read-only
  // Tidak ada setter = tidak bisa diubah
}
```

### 3. **Computed Properties**
```javascript
class Rectangle {
  #width
  #height

  get area() {  // Calculated on-the-fly
    return this.#width * this.#height
  }
}
```

### 4. **Logging & Monitoring**
```javascript
class SecureData {
  #data
  #accessCount = 0

  get data() {
    this.#accessCount++
    console.log(`Data diakses ${this.#accessCount} kali`)
    return this.#data
  }
}
```

## Key Insights

### 1. **Encapsulation ≠ Hidden**
- **Encapsulation** = Controlled access, bukan penyembunyian total
- Data tetap bisa diakses, tapi dengan aturan yang aman

### 2. **Security vs Functionality**
- **Private**: Melindungi dari akses langsung yang berbahaya
- **Controlled Access**: Memberikan functionality yang dibutuhkan dengan aman

### 3. **Design Philosophy**
> "Start with everything private, then expose only what's absolutely necessary with proper controls"

### 4. **Real-World Analogy**
```javascript
// Seperti rumah:
class House {
  #masterKey      // Tidak boleh ada yang tahu
  #valuables      // Disimpan aman
  
  address         // Public info
  
  // Controlled entry
  enterHouse(key) {
    if (key === this.#masterKey) {
      return this.#allowEntry()
    }
    throw new Error('Wrong key!')
  }
}
```

## Kesimpulan

**Encapsulation** dalam JavaScript bukan tentang menyembunyikan data sepenuhnya, tapi tentang:

1. **Protecting data integrity** - Data tidak bisa diubah sembarangan
2. **Providing safe interfaces** - Akses data melalui method yang aman
3. **Maintaining business rules** - Validation dan logic terjaga
4. **Security-first thinking** - Default private, public by necessity

**Bottom line**: Private fields + controlled access = **Security + Functionality**