const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
    { id: 4, title: "Tablet", price: 450, category: "tablets", stock: 8 },
    { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 12 },
    { id: 6, title: "Gaming Monitor", price: 350, category: "monitors", stock: 7 },
    { id: 7, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 20 },
    { id: 8, title: "Wireless Mouse", price: 45, category: "accessories", stock: 25 },
    { id: 9, title: "External SSD 1TB", price: 120, category: "storage", stock: 10 }
];

function linearSearch(array, target) {
 for (let i = 0; i < array.length; i++) {
 if (array[i] === target) return i;
 }
 return -1;
}

function linearSearchProductById(products, targetId) {
    for (let i = 0; i < products.length; i++) {
        // Cek apakah properti id dari objek produk pada indeks ke-i sama dengan targetId
        if (products[i].id === targetId) {
            return i; // Mengembalikan indeks array tempat produk ditemukan
        }
    }
    return -1; // Mengembalikan -1 jika tidak ditemukan
}
console.log(linearSearchProductById(products, 3));