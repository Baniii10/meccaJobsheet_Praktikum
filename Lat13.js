const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5},
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15},
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

class Stack {
    constructor() {
        this.items = []; // Array internal untuk menyimpan elemen stack
    }

    // Menambahkan elemen ke posisi paling atas tumpukan
    push(item) {
        this.items.push(item);
    }

    // Mengeluarkan dan mengembalikan elemen teratas dari tumpukan
    pop() {
        return this.items.pop();
    }

    // Melihat elemen teratas tanpa menghapusnya
    peek() {
        return this.items[this.items.length - 1];
    }

    // Mengecek apakah stack kosong
    isEmpty() {
        return this.items.length === 0;
    }
}

// 1. Inisialisasi Stack untuk riwayat pencarian
const searchHistory = new Stack();

// Simulasi aktivitas pencarian oleh pengguna
function performSearch(keyword) {
    console.log(`Mencari produk dengan keyword: "${keyword}"`);
    searchHistory.push(keyword);
}

// Simulasi fitur Undo Search
function undoSearch() {
    if (searchHistory.isEmpty()) {
        console.log("Tidak ada riwayat pencarian untuk di-undo.");
        return null;
    }

    // Hapus pencarian saat ini dari stack
    searchHistory.pop();

    // Ambil keyword pencarian sebelumnya yang ada di puncak stack
    const previousKeyword = searchHistory.peek();
    
    if (previousKeyword) {
        console.log(`Undo berhasil! Kembali ke pencarian: "${previousKeyword}"`);
        return previousKeyword;
    } else {
        console.log("Kembali ke kondisi awal (pencarian kosong).");
        return "";
    }
}

performSearch("laptop");       // Stack berisi: ["laptop"]
performSearch("smartphone");   // Stack berisi: ["laptop", "smartphone"]
performSearch("tablet");       // Stack berisi: ["laptop", "smartphone", "tablet"]

// Pengguna menekan tombol Undo
undoSearch();                  // Mengembalikan ke "smartphone"
undoSearch();                  // Mengembalikan ke "laptop"