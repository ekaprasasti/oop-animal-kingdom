# 🦁 Animal Kingdom Simulation - OOP Learning Project

Proyek pembelajaran Object-Oriented Programming (OOP) menggunakan analogi makhluk hidup yang mudah dipahami. Dirancang khusus untuk memahami konsep OOP secara bertahap melalui simulasi kerajaan hewan.

## 🎯 Tujuan Pembelajaran

Memahami dan menguasai konsep-konsep fundamental OOP melalui implementasi praktis:

- **Classes & Objects** - Blueprint dan instance makhluk hidup
- **Encapsulation** - Menyembunyikan data internal hewan
- **Inheritance** - Hierarki taksonomi hewan
- **Polymorphism** - Perilaku berbeda untuk method sama
- **Abstraction** - Template untuk perilaku umum
- **Composition** - Hubungan "has-a" dalam ekosistem
- **Static Members** - Properties shared antar instances

## 📚 Kurikulum 10 Tahap

### 🐾 Tahap 1: Classes & Objects
Membuat class Animal pertama dan memahami perbedaan class vs object

### 🏗️ Tahap 2: Constructor & Methods  
Inisialisasi object dan implementasi behavior dasar

### 🔒 Tahap 3: Encapsulation
Private properties dan access control untuk melindungi data

### 🧬 Tahap 4: Inheritance
Pewarisan sifat dari Animal ke Cat, Dog, dan spesies lain

### 🎭 Tahap 5: Method Overriding
Setiap hewan punya cara berbeda untuk makeSound() dan move()

### 🔄 Tahap 6: Polymorphism
Satu interface, banyak implementasi - semua hewan bisa dipanggil method sama

### 📐 Tahap 7: Abstract Concepts
Template class yang memaksa child class implement method tertentu

### 🧩 Tahap 8: Composition
Hubungan "has-a" - Owner punya Pet, PetShop berisi banyak hewan

### ⚡ Tahap 9: Static Members
Class-level properties dan methods yang shared semua instances

### 🎮 Tahap 10: Mini Simulation
Menggabungkan semua konsep dalam simulasi sederhana

## 🚀 Quick Start

### Prerequisites
- Node.js (untuk menjalankan JavaScript)
- Task Master AI (untuk project management)

### Setup Project

1. **Clone repository**
   ```bash
   git clone https://github.com/ekaprasasti/oop-animal-kingdom.git
   cd oop-animal-kingdom
   ```

2. **Setup environment variables**
   ```bash
   cp .env.example .env
   # Edit .env dan tambahkan API keys Anda
   ```

3. **Initialize Task Master**
   ```bash
   npx task-master-ai init
   npx task-master-ai parse-prd .taskmaster/docs/prd.txt
   ```

4. **Mulai pembelajaran**
   ```bash
   npx task-master-ai next
   ```

## 🛠️ Tools & Integration

### Task Master AI
Project ini terintegrasi dengan Task Master AI untuk management pembelajaran:
- Breakdown otomatis PRD menjadi tasks
- Progress tracking per tahap
- Guidance untuk setiap langkah pembelajaran

### Claude Code Integration
Configured untuk bekerja optimal dengan Claude Code:
- MCP server setup untuk Task Master AI
- Auto-loaded context dari CLAUDE.md
- Custom slash commands untuk workflow

## 📁 Structure Project

```
animal-kingdom/
├── .taskmaster/           # Task Master AI files
│   ├── docs/prd.txt      # Product Requirements Document
│   └── tasks/            # Generated tasks
├── step-01-classes/      # Tahap 1: Classes & Objects
├── step-02-constructor/  # Tahap 2: Constructor & Methods
├── step-03-encapsulation/# Tahap 3: Encapsulation
├── step-04-inheritance/  # Tahap 4: Inheritance
├── step-05-overriding/   # Tahap 5: Method Overriding
├── step-06-polymorphism/ # Tahap 6: Polymorphism
├── step-07-abstract/     # Tahap 7: Abstract Concepts
├── step-08-composition/  # Tahap 8: Composition
├── step-09-static/       # Tahap 9: Static Members
├── step-10-simulation/   # Tahap 10: Mini Simulation
├── .mcp.json            # MCP server configuration
├── CLAUDE.md            # Claude Code context
└── README.md            # This file
```

## 🎓 Cara Belajar

### Filosofi Learning by Doing
1. **Baca konsep** - Pahami teori OOP yang akan dipelajari
2. **Lihat contoh** - Study implementasi yang sudah ada
3. **Coba sendiri** - Modifikasi code untuk eksperimen
4. **Trial & Error** - Sengaja buat error untuk belajar debugging
5. **Reflect** - Jawab pertanyaan pemahaman di setiap tahap

### Eksplorasi Mandiri
Setiap tahap punya section "Eksplorasi Mandiri":
- Modifikasi properties dan methods
- Tambah hewan baru dengan karakteristik unik
- Eksperimen dengan edge cases
- Compare output expected vs actual

### Validation Pemahaman
- Self-assessment questions
- Practical challenges
- Code modification exercises
- Concept explanation tasks

## 🐈 Contoh Hewan untuk Implementasi

- **Mammals**: Lion, Elephant, Dolphin, Cat, Dog
- **Birds**: Eagle, Penguin, Parrot, Owl
- **Fish**: Shark, Goldfish, Tuna
- **Reptiles**: Snake, Turtle, Gecko

## 🎯 Success Criteria

Setelah menyelesaikan project ini, Anda akan bisa:

✅ Membuat class hierarchy yang proper  
✅ Implement encapsulation dengan benar  
✅ Gunakan inheritance tanpa tight coupling  
✅ Apply polymorphism untuk clean code  
✅ Choose composition vs inheritance appropriately  
✅ Explain semua konsep OOP dengan confidence  

## 🤝 Contributing

Project ini dirancang untuk pembelajaran individual, tapi kontribusi welcome:

1. Fork repository
2. Buat branch untuk improvement (`git checkout -b feature/better-examples`)
3. Commit changes (`git commit -m 'Add better cat examples'`)
4. Push ke branch (`git push origin feature/better-examples`)
5. Buat Pull Request

## 📜 License

MIT License - Feel free untuk use, modify, dan share untuk tujuan pembelajaran.

## 🙏 Acknowledgments

- Inspired by real animal behaviors untuk OOP analogies
- Built with Task Master AI untuk structured learning
- Optimized untuk Claude Code development workflow

---

**Happy Learning! 🎉**

*Remember: The best way to learn OOP is by doing. Don't just read the code - modify it, break it, fix it, and make it your own!*