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

function bubbleSortProductsByPrice(productsArray) {
    const arr = [...productsArray]; // Membuat salinan array agar tidak memutasi array asli[cite: 1]
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // Membandingkan properti price dari objek yang bersebelahan
            if (arr[j].price > arr[j + 1].price) {
                // Tukar posisi (swap) menggunakan ES6 destructuring[cite: 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    return arr;
}

function sortProducts(productsArray, sortBy) {
    const arr = [...productsArray]; // Membuat salinan array agar tidak memutasi array asli[cite: 1]

    switch (sortBy) {
        case "price-asc":
            return arr.sort((a, b) => a.price - b.price); // Termurah ke termahal[cite: 1]
            
        case "price-desc":
            return arr.sort((a, b) => b.price - a.price); // Termahal ke termurah[cite: 1]
            
        case "rating":
            return arr.sort((a, b) => b.rating - a.rating); // Rating tertinggi ke terendah[cite: 1]
            
        case "title":
            return arr.sort((a, b) => a.title.localeCompare(b.title)); // Berdasarkan abjad judul[cite: 1]
            
        default:
            return arr; // Kembalikan tanpa diurutkan jika kriteria tidak dikenal
    }
}

console.log("Hasil Bubble Sort Berdasarkan Harga ");
console.log(bubbleSortProductsByPrice(products));

console.log("\nHasil Built-in Sort (Rating Tertinggi)");
console.log(sortProducts(products, "rating"));