const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5, rating: 4.5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 4.0 },
    { id: 4, title: "Tablet", price: 450, category: "tablets", stock: 8, rating: 4.3 },
    { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 12, rating: 4.1 },
    { id: 6, title: "Gaming Monitor", price: 350, category: "monitors", stock: 7, rating: 4.6 },
    { id: 7, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 20, rating: 4.7 },
    { id: 8, title: "Wireless Mouse", price: 45, category: "accessories", stock: 25, rating: 4.4 },
    { id: 9, title: "External SSD 1TB", price: 120, category: "storage", stock: 10, rating: 4.8 }
];

function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const key = product.category;

        // Jika key kategori belum ada di dalam objek groups, buat array kosong dulu
        if (!groups[key]) {
            groups[key] = [];
        }

        // Masukkan produk ke dalam array kategori yang sesuai
        groups[key].push(product);

        return groups; // Kembalikan accumulator untuk iterasi berikutnya
    }, {}); // {} adalah nilai awal (initial value) berupa objek kosong
}

const grouped = groupByCategory(products);
console.log(grouped);

function displayCategorySummary(products) {
    // 1. Panggil fungsi grouping dari latihan 9.1
    const grouped = groupByCategory(products);

    // 2. Ubah objek grouping menjadi array of objects agar mudah diringkas
    const summary = Object.keys(grouped).map(categoryName => {
        return {
            Category: categoryName,
            TotalProducts: grouped[categoryName].length // Menghitung jumlah produk per kategori
        };
    });

    // 3. Tampilkan dalam bentuk format tabel sederhana
    console.table(summary);
}

// Contoh Cara Memanggilnya:
displayCategorySummary(products);